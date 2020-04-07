/**
 * jspsych-image-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["confdisplay2boxes"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('image-keyboard-response', 'stimulus', 'image');

  plugin.info = {
    name: 'image-keyboard-response-edited',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The first image to be displayed'
      },
      stimulus2: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus2',
        default: undefined,
        description: 'The second image to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
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
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
      position: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Position',
        default: null,
        description: 'This determines if the stimulus 1 is on the left or the right'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    var new_html = '<img src="'+trial.stimulus+'" id="jspsych-image-keyboard-response-stimulus"></img>';
    var new_html2 = '<img src="'+trial.stimulus2+'" id="jspsych-image-keyboard-response-stimulus2"></img>';

    var select = '<img src=img/select.bmp></img>';

    // add prompt


    // draw the specific position of the two stimuli to either LR or RL according to the variable position (var pos)


    if (trial.prompt !== null){
    if (trial.position == 1) {
      display_element.innerHTML = [new_html + ' ' + new_html2 + trial.prompt];
    };
    if (trial.position == 0) {
      display_element.innerHTML = [new_html2 + ' ' + new_html  + trial.prompt];
    };
    if (trial.position == null){
      display_element.innerHTML = [new_html + ' ' + new_html2 + trial.prompt];};};

    if (trial.prompt == null){
    if (trial.position == 1) {
      display_element.innerHTML = [new_html + ' ' + new_html2];};
    if (trial.position == 0) {
      display_element.innerHTML = [new_html2 + ' ' + new_html];};};






    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "stimulus2": trial.stimulus2,
        "key_press": response.key,
        "position": trial.position,
        "response": 999,
        "start_point": 999,
      };

  // clear the display
  display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-image-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
