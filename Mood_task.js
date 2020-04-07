function Mood_task(MoodNumBlocks, MoodNumTrials)
{
    var timeline = [];
    let f = jsPsych.randomization.shuffle([0,1,2,3,4,5],1); //// randomise the order of the figures pair,    console.log(f);


    /////////////////////////////////////////////////
    ////// Instructions and first screens ///////////
    ////////////////////////////////////////////////

    var welcome = {
        type: 'html-keyboard-response',
        stimulus: 'Welcome to the Mood experiment. Press any Key to begin.',
        data: { test_part: 'welcome' }
    };

    var instructions = {
      type: 'html-keyboard-response',
      stimulus: "<p> In this experiment, two figures will appear on each side of the screen. </p> <p>If the figure is on the <strong>left</strong>"+
      " press the letter W on the keyboard.</p>"+
      "<p>If the figure is on the <strong>right</strong>, press the letter E on the keyboard. </p>" +
      "<div style>" +
        "<div style='float: left; width: 50%;'> <img src='img/M11.bmp'></img>" +
        "<p class='small'><strong> Press on the W </strong></p></div>" +
        "<div style='float: right; width: 50%;'> <img src='img/M12.bmp'></img>" +
        "<p class='small'><strong> Press on the E </strong></p></div>" +
        "</div>",
      data: { instruction: 'explication'}
    };


///////////////////////////////////////////// Defined fixation and moodrating before any loop so it optimize the code
var fixation = {
  type:'html-keyboard-response',
  stimulus: '<div style="font-size:70px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 500,
  prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
  data:{test_part:'moodfixation'}
}

var moodrating = {
  type: 'slider-response',
  stimulus: "How <strong>happy</strong> are you at the moment?",
  labels: ['Unhappy', 'Happy'],
  data: {test_part: 'moodrating'},
  width: '400px',
  start: 50,    /// Math.floor(Math.random()*100), to make it random between 0 and 100
    };


    /////////////////////////////////////////////////
    ////// Start of the block ///////////////////////
    /////////////////////////////////////////////////

for (let y = 0; y < MoodNumBlocks; y++)  { // use of let instead of var as it allows it to be used in function loops
      	var task_break = {
      	type:'html-keyboard-response',
      	stimulus: '<p class="instructions">The experiment is divided into '+MoodNumBlocks+' blocks of '+MoodNumTrials+' trials, where you can pause for a break before every block.</p>' +
      	'<p class="instructions">There are no time limits on your responses to the figures and on your mood ratings.</p>'+
        '<p>Press any key to begin.</p>',
        data: {test_part: 'firstbreak'}
      	};

      	var task_break2 = {
        type:'html-keyboard-response',
      	stimulus:'<p class="instructions">You can now pause for a break. You have completed '+y+' out of '+MoodNumBlocks+' blocks. Press any key to continue.</p>'+'<p class="instructions">',
        data: {test_part: 'blockbreak'}
      	};

      //PUSH BREAK SCREENS BETWEEN EACH BLOCK
      		if (y > 0)
      		{timeline.push(task_break2);}
      		else
      		{ timeline.push(welcome);
            timeline.push(instructions);
            timeline.push(task_break);
          }

      /////Allow Mood Rating just before the start of each trial (first mood rating)
          timeline.push(moodrating);

/////// Creates the win or loss
let winorloseblock = jsPsych.randomization.shuffle([1,1,1,1,1,1,0,0,0,0,0],1); ////// here 1 is a win block and O is a lose block
let winblock1 = jsPsych.randomization.shuffle([1,1,1,1,1,1,1,1,1,1,0,0],1); ////// here 1 is a win and O is a lose, with a prob of wining that is 10/12
let winblock2 = jsPsych.randomization.shuffle([1,1,1,1,1,1,1,0,0,0,0,0],1); ////// here 1 is a win and O is a lose, with a prob of wining that is 7/12
let loseblock1 = jsPsych.randomization.shuffle([1,1,1,1,1,0,0,0,0,0,0,0],1); ////// here also 1 is a win and O is a lose, with a prob of wining that is 5/12
var loseblock2 = jsPsych.randomization.shuffle([1,1,0,0,0,0,0,0,0,0,0,0],1); ////// here also 1 is a win and O is a lose, with a prob of wining that is 2/12
let winorlosepos = jsPsych.randomization.shuffle([1,1,1,1,1,1,0,0,0,0,0,0],1); ////// allows to have high win/lose and low win/lose that change side 50/50
var pos = jsPsych.randomization.shuffle([1,1,1,1,1,1,1,1,1,1,1,1],1); /////// Creates the position of the figure, if left or right, if we want to have the randomization 50/50 for each side L or R shuffle([1,1,1,1,1,1,0,0,0,0,0,0],1);

/////////////////////////////////////////////////
////// Start of the trial ///////////////////////
/////////////////////////////////////////////////
for(let i = 0; i < MoodNumTrials; i++) /// use of let instead of var as it allows it to be used in function loops
  {

/////// Presentation of the figures
          var pretest1 = {
          type: 'mooddisplay2figures', /// previously the pluggin was image_keyboard_response_edited
          stimulus: 'img/M11.bmp',
          stimulus2: 'img/M12.bmp',
          choices: jsPsych.NO_KEYS,
          position: pos[i],
          trial_duration: 500,
          response_ends_trial: false,
          prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
          data: {test_part: 'pretestblock1'},}
          var test1 = {
          type: 'mooddisplay2figures',
          stimulus: 'img/M11.bmp',
          stimulus2: 'img/M12.bmp',
          choices: ['w','e'],
          position: pos[i],
          correct_key: 87,
          timing_post_trial: 0,
          prompt: '<p style="text-align:center; font-size: 24px">Press W for selecting the left image. Press E for selecting the right image.</p>',
          prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
          data: {test_part: 'testblock1'},
        	on_finish: function(data){
            if (data.key_press ==87) {
              data.correct = true;}
              else {
                data.correct = false;
              }}}
          var pretest2 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M21.bmp',
            stimulus2: 'img/M22.bmp',
            choices: jsPsych.NO_KEYS,
            position: pos[i],
            trial_duration: 1000,
            response_ends_trial: false,
            prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'pretestblock2'},
          }
          var test2 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M21.bmp',
            stimulus2: 'img/M22.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for selecting the left image. Press E for selecting the right image.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'testblock2'},
            on_finish: function(data){
              if (data.key_press ==87) {
                data.correct = true;}
                else {
                  data.correct = false;
                }}}
          var pretest3 = {
              type: 'mooddisplay2figures',
              stimulus: 'img/M31.bmp',
              stimulus2: 'img/M32.bmp',
              choices: jsPsych.NO_KEYS,
              position: pos[i],
              trial_duration: 1000,
              response_ends_trial: false,
              prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
              data: {test_part: 'pretestblock3'},
            }
          var test3 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M31.bmp',
            stimulus2: 'img/M32.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for selecting the left image. Press E for selecting the right image.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'testblock3'},
          	on_finish: function(data){
              if (data.key_press == 87) {
                data.correct = true;}
                else {
                  data.correct = false;
                }}}
          var pretest4 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M41.bmp',
            stimulus2: 'img/M42.bmp',
            choices: jsPsych.NO_KEYS,
            position: pos[i],
            trial_duration: 1000,
            response_ends_trial: false,
            prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'pretestblock4'},
          }
          var test4 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M41.bmp',
            stimulus2: 'img/M42.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for selecting the left image. Press E for selecting the right image.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'testblock4'},
          	on_finish: function(data){
              if (data.key_press ==87) {
                data.correct = true;}
                else {
                  data.correct = false;
                }}}
          var pretest5 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M51.bmp',
            stimulus2: 'img/M52.bmp',
            choices: jsPsych.NO_KEYS,
            position: pos[i],
            trial_duration: 1000,
            response_ends_trial: false,
            prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'pretestblock5'},
          }
          var test5 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M51.bmp',
            stimulus2: 'img/M52.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for selecting the left image. Press E for selecting the right image.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'testblock5'},
          	on_finish: function(data){
              if (data.key_press ==87) {
                data.correct = true;}
                else {
                  data.correct = false;
                }}}
          var pretest6 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M61.bmp',
            stimulus2: 'img/M62.bmp',
            choices: jsPsych.NO_KEYS,
            correct_key: 87,
            position: pos[i],
            trial_duration: 1000,
            response_ends_trial: false,
            prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'pretestblock6'},
          }
          var test6 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M61.bmp',
            stimulus2: 'img/M62.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for selecting the left image. Press E for selecting the right image.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {test_part: 'testblock6'},
          	on_finish: function(data){
              if (data.key_press ==87) {
                data.correct = true;}
                else {
                  data.correct = false;
                }}}

      //////Give the feedback about if it is a win or a loss
      var winfeedback = {
          type: 'feedback-response',
          stimulus: "<img src='img/mood_coin.bmp'></img>",
          stimulus2: "<img src='img/mood_coinlose.bmp'></img>",
          prompt: '<p style="text-align:center; font-size: 24px"> You win! </p>',
          prompt2: '<p style="text-align:center; font-size: 24px"> No win! </p>',
          choices: jsPsych.NO_KEYS,
          trial_duration: 1000,
          winorlose: function(){
            var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
            if(last_trial_correct){
              if (winorlosepos[y] == 1) {return (winblock1[i])} //// we want to have the same side that has high or low win per block so we use y here
              else {return (winblock2[i])} /// we want the win to change every trail so we use i here
            } // end if last_trial_correct
            else {
              if (winorlosepos[y] ==1) {return (winblock2[i])}
              else {return (winblock1[i])}
            }// end else last_trial_correct
          },/// end winorlose function
          data: {test_part: 'winorlose'},
      }; // end of winfeedback

      var losefeedback = {
          type: 'feedback-response',
          stimulus: "<img src='img/mood_coin.bmp'></img>",
          stimulus2: "<img src='img/mood_coinlose.bmp'></img>",
          prompt: '<p style="text-align:center; font-size: 24px"> You win! </p>',
          prompt2: '<p style="text-align:center; font-size: 24px"> No win! </p>',
          choices: jsPsych.NO_KEYS,
          trial_duration: 1000,
          winorlose: function(){
            var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
            if(last_trial_correct){
              if (winorlosepos[y] == 1) {return (loseblock1[i])} //// we want to have the same side that has high or low win per block so we use y here
              else {return (loseblock2[i])} /// we want the win to change every trail so we use i here
            } // end if last_trial_correct
            else {
              if (winorlosepos[y] ==1) {return (loseblock2[i])}
              else {return (loseblock1[i])}
            }// end else last_trial_correct
          },/// end winorlose function
          data: {test_part: 'winorlose'},
      }; // end of losefeedback



///// Determines order of each part of the trial
    timeline.push(fixation);
    if (f[y] == 0) ///// f is defined at the begining and allows to have the order of the figures randomized
    {timeline.push(pretest1);
    timeline.push(test1);}
    if (f[y] == 1)
    {timeline.push(pretest2);
    timeline.push(test2);}
    if (f[y] == 2)
    {timeline.push(pretest3);
    timeline.push(test3);}
    if (f[y] == 3)
    {timeline.push(pretest4);
    timeline.push(test4);}
    if (f[y] == 4)
    {timeline.push(pretest5);
    timeline.push(test5);}
    if (f[y] == 5)
    {timeline.push(pretest6);
    timeline.push(test6);}

    if (winorloseblock[y] == 1){
    timeline.push(winfeedback);}
    if (winorloseblock[y] == 0){
    timeline.push(losefeedback);}

    if(i == 5)   /////Allow Mood Rating at the middle of the trial (second mood rating)
      {timeline.push(moodrating);}
    if(i == 11)  /////Allow Mood Rating at the end of the trial (third mood rating). ONLY WORKS WHEN 12 TRIALS SELECTED
      {timeline.push(moodrating);}

} // end number of trials
} // end number of blocks

return timeline;
} // end function
