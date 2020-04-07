/**
 * jspsych-html-slider-response
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['pract-slider-response'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'html-slider-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider.'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },
      start: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider starting value',
        default: 50,
        description: 'Sets the starting value of the slider',
      },
      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: 1,
        description: 'Sets the step of the slider'
      },
      choice: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'choice',
        default: "yes",
        description: 'If yes then it is possible to chose on the scale, if no then it is not possible.'
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'Labels',
        default: [],
        array: true,
        description: 'Labels of the slider.',
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Submit',
        array: false,
        description: 'Label of the button to advance.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      continue: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'continue',
        default: null,
        description: 'If yes then it is possible to continue when trial.start = response.response .'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Width slider',
        default: null,
        description: 'How long is the slider.'
      },
      label_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'label_width slider',
        default: 0,
        description: 'How long is the label_width slider.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when user makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {


    var html = '<div id="jspsych-html-slider-response-wrapper" style="margin: 100px;">';
    html += '<div id="jspsych-html-slider-response-stimulus" style="margin: 0% 0%">' + trial.stimulus + '</div>';
    html += '<div class="jspsych-html-slider-response-container">';
    html += '<input type="range" value="'+trial.start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" style="width: '+trial.width+';" id="jspsych-html-slider-response-response"></input>';
    html += '<div style="position: relative; margin: 0% '+trial.label_width+'%">'
    for(var j=0; j < trial.labels.length; j++){
      var width = 100/(trial.labels.length-1);
      var left_offset = (j * (100 /(trial.labels.length - 1))) - (width/2);
      html += '<div style="display: inline-block; position: absolute; left:'+left_offset+'%; text-align: center; width: '+width+'%;">';
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';

    if (trial.prompt !== null){
      html += trial.prompt;
    }

    // add submit button
   html += '<button id="jspsych-html-slider-response-next" class="jspsych-btn">'+trial.button_label+'</button>';

    display_element.innerHTML = html;

    if (trial.choice == "no") {
    display_element.querySelector('#jspsych-html-slider-response-response').disabled = true;}

    var response = {
      rt: null,
      response: null
    };

    display_element.querySelector('#jspsych-html-slider-response-next').addEventListener('click', function() {
      // measure response time
      var endTime = (new Date()).getTime();
      response.rt = endTime - startTime;
      response.response = display_element.querySelector('#jspsych-html-slider-response-response').value;

      if(trial.response_ends_trial){
        if (trial.start != response.response) { ///// only allows it to end when the value of the beginning is not the same
        end_trial();
      } if (trial.continue == "yes") { ///// only allows it to end when the value of the beginning is not the same
        end_trial();
    }}
    else {
        display_element.querySelector('#jspsych-html-slider-response-next').disabled = true;
      }

    });

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "stimulus2": "null",
        "position": 99,
        "key_press": 99,
        "response": response.response,
        "start_point": trial.start,
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-html-slider-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
