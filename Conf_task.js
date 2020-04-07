function Conf_task(ConfNumBlocks, ConfNumTrials)
{
    var timeline = [];

  //EXPERIMENT PARAMETERS

  	// Create variables for timing
  	var fixation_time = 1000;
  	var feedback_trial_time = 500;
  	var prac_stim_time= 300;
  	var stim_time= 300; ///// presentation time of the dots
  	var max_CR_RT = -1;
  	var inter_trial_interval = 500;

  	// Initialize staircase variables
  	var responseMatrix = [true, true];
  	var reversals = 0;
  	var	s2_dir = ["up", "up"];
    var numDots1 = 70;  //in log space; 4.65 is about 104 dots which is 70 dots shown for the first one
  	var numDots2 = 0;
  	count = 0;

//// START INSTRUCTION
    var welcome = {
        type: 'html-keyboard-response',
        stimulus: 'Welcome to the confidence experiment. Press any Key to begin.',
        data: { test_part: 'welcome' }
    };

    var instructions = {
      type: 'html-keyboard-response',
      stimulus: 'We will now ask you to judge which of two images contains more dots, before asking you to rate your confidence in your judgement.</p>' +
      'At the beginning of each trial, you will be presented with a black cross in the middle of the screen. Focus your attention on it. Then, two black boxes with a number of white dots will be flashed and you will be asked to judge which box had a higher number of dots.</p>' +
      'If the box on the <strong>left</strong> had more dots, <strong>press W</strong>.<br> If the box on the <strong>right</strong> had more dots, <strong> press E</strong>.</p>' +
      '<p> Please respond quickly and to the best of your ability.</p>' +
      '<p> You will then rate your confidence in your judgement on a scale with the mouse.</p>' +
      '<p> Please do yo ur best to rate your confidence accurately and do take advantage of the whole rating scale.</p>' +
      '<p>Press spacebar to continue.</p>',
      data: { test_part: 'explication'}
    };

for (var y = 0; y < ConfNumBlocks; y++)
    {
    	  var task_break = {
      	type:'html-keyboard-response',
      	stimulus: '<p class="instructions">The experiment is divided into '+ConfNumBlocks+' blocks of '+ConfNumTrials+' trials, where you can pause for a break before every block.</p>' +
      	'<p class="instructions">There are no time limits on your responses to the figures and on your mood ratings.</p>'+
        '<p>Press any key to begin.</p>',
        data: {test_part: 'firstbreak'}
      	};

      	var task_break2 = {
        type:'html-keyboard-response',
      	stimulus:'<p class="instructions">You can now pause for a break. You have completed '+y+' out of '+ConfNumBlocks+' blocks. Press any key to continue.</p>'+'<p class="instructions">',
        data: {test_part: 'blockbreak'}
      	};

      //PUSH BREAK SCREENS BETWEEN EACH BLOCK
      		if (y > 0)
      		{timeline.push(task_break2);}
      		else
      		{timeline.push(task_break);
            timeline.push(welcome);
            timeline.push(instructions);}


          /////////////////////////////////////////////////
          ///////////// EXPERIMENT CONFIDENCE /////////////
          /////////////////////////////////////////////////

  //position of the side of the stimulus
  var pos = jsPsych.randomization.shuffle([1,1,1,1,1,1,0,0,0,0,0,0],1);
////// Start of the trial
for(var i = 0; i < ConfNumTrials; i++)
  {
    var fixation = {
      type:'html-keyboard-response',
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement([350,500,750,1000,1250],1)[0];
      },
      data:{test_part:'conffixation'}
    }

/////// Presentation of the figures

    var blankstim1 = confdrawblankstimulus("myInnerCanvas","#000000");
    var blankstim2 = confdrawblankstimulus("myInnerCanvas2", "#000000");
    var blankstim3 = confdrawblankstimulus("myInnerCanvas", "#008080"); /// blue selected box
    var blankstim4 = confdrawblankstimulus("myInnerCanvas2", "#FFFFFF"); //// colour of the background that allow to have feedback (#FFFFFF is white)
    var stim1 = confdrawstimulus("myInnerCanvas",numDots1); // Create stimulus 1
    var stim2 = confdrawstimulus("myInnerCanvas2",numDots2); // Create stimulus 2

////// show the two black boxes with the dots in it.
          var dots = {
            type: 'confdisplay2boxes', // previously image-keyboard-reponse-edited2
            stimulus: stim1,
            stimulus2: stim2,
            position: pos[i],
            choices: jsPsych.NO_KEYS,
            trial_duration: stim_time, /// stim_time is defined on top (and in main file later???)
            data: {test_part: 'confstim'}, //need this for feedback
          }

          ////// Shows the two blank black boxes
          var postblank = {
            type: 'confdisplay2boxes',
            stimulus: blankstim1,
            stimulus2: blankstim2,
            choices: ['w','e'],
            prompt: '<p style="text-align:center; font-size: 24px">Press S if the box on the left had more dots. Press D if the box on the right had more dots.</p>',
            data: {test_part: 'confblankstim'}, //need this for feedback
            on_finish: function(data){
              if (data.key_press ==87) {
                data.correct = true; //// if press on "W" then true (not in theory but it is easier for the selection part)
                } /// end if
                else {
                  data.correct = false; //// if press on other ("E") then false,
                } // end else
              } /// end function
            } /// end postblank

//////Shows which item was selected
        var select = {
          type: 'confdisplay2boxes',
          choices: jsPsych.NO_KEYS,
          trial_duration: feedback_trial_time, /// feedback_trial_time is defined on top (and in main file later???)
          data: {test_part: 'confselection'},
          stimulus: function(){
            var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
            if(last_trial_correct){
              return blankstim3;
            } else {
              return blankstim4;
            }},
          stimulus2: function(){
            var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
            if(last_trial_correct){
              return blankstim4;
            } else {
              return blankstim3;
            }},
          }

  //////// Confidence rating at the end of each trial
      var confrating = {
        type: 'slider-response',
        stimulus: "Rate your <strong>confidence</strong> in your judgement: ",
        labels: ['Guessing', 'Certain'],
        width: '400px',
        start: Math.floor(Math.random()*100),
        data: {test_part: 'confrating'},
          };



///// Determines order of each part of the trial
    timeline.push(fixation);
    timeline.push(dots);
    timeline.push(postblank);
    timeline.push(select);
    timeline.push(confrating);

  } ////end of the trial loop
  } ///// end of the block loop

  return timeline;
  } // end function
