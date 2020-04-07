function practmoodconf(numPrac)
{
    var practtimeline = [];
    let cursornone = document.getElementById("cursornone").innerHTML;

    /////////////////////////////////////////////////////////////
    ///Conf PARAMETERS that do not need to change every block ///
    ////////////////////////////////////////////////////////////
    var fixation_time = 1000;
  	var feedback_trial_time = 500;
  	var stim_time= 1000; ///// presentation time of the dots
    var numDots1 = [80, 70, 60, 52, 56, 45, 56, 40, 35, 25];  //in log space; 4.65 is about 104 dots which is 70 dots shown for the first one
  	var numDots2 = 0;
    var blankstim1 = confdrawblankstimulus("myInnerCanvas","#000000");
    var blankstim2 = confdrawblankstimulus("myInnerCanvas2", "#000000");
    var feedbackstim3 = confdrawblankstimulus("myInnerCanvas", "#228B22"); /// green feedback box
    var feedbackstim4 = confdrawblankstimulus("myInnerCanvas", "#DC143C"); /// red feedback box
    var blankstim5 = confdrawblankstimulus("myInnerCanvas2", "#FFFFFF"); //// colour of the background that allow to have feedback (#FFFFFF is white)
    var confpos = jsPsych.randomization.shuffle([1,1,1,1,1,1,0,0,0,0,0,0],1);


    //////////////////////////////////////////////
    ///////////// First screens /////////////////
    /////////////////////////////////////////////
    var fullscreen = {
      type: 'fullscreen',
      message: '<p>You need to be in fullscreen mode to continue the experiment! <br></br> Please click the button below to enter fullscreen mode.<br></br><p>',
      fullscreen_mode: false,
      data: {
        test_part: 'fullscreen',
        blocknumber: 999,
        trialnumber: 999,
        winorloseblock: 999,
        winorlosepos: 999,
      },
    };

    var introduction = {
      type: 'html-keyboard-response',
      stimulus: "<div style = 'text-align:center; font-size: 30px'><p> Hello and welcome to the experiment! </p> </div>" + "<p> You will be playing 2 mini-games in alternation. </p>" + "<p> Press spacebar to continue.</p>",
      choices: " ",
      data: {
        test_part: 'introduction',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
    };
    practtimeline.push(fullscreen);
    practtimeline.push(introduction);

    var moodinstruction = {
      type: 'html-keyboard-response',
      stimulus: "<div style = 'text-align:center; font-size: 30px'> <p> Instructions for the first mini-game! </p> </div>" + "<p> Press spacebar to continue.</p>",
      choices: " ",
      data: {
        test_part: 'moodinstruction',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
    };
    practtimeline.push(fullscreen);
    practtimeline.push(moodinstruction);



        //////////////////////////////////////////////////////
        ////////////// Mood practice part ///////////////////
        /////////////////////////////////////////////////////

        var moodinstructionfigure = {
          type: 'html-keyboard-response',
          stimulus: "<p> In the first mini-game, on each trial, you will be asked to choose between 2 symbols similar to the ones shown below. <br> From time to time you will be asked to rate how happy you are at any given moment.</p>" +
            "<div style='float: right; width: 50%;'> <img src='img/instructions11.bmp'></img>" +
            "<p class='small'><strong> </strong></p></div>" +
            "<div style='float: left; width: 50%;'> <img src='img/instructions22.bmp'></img>" +
            "<p class='small'><strong> </strong></p></div>" +
            "<div style='float: left;' > <p> After your choice, the outcome will be shown on the screen. Each time, you may win $0.05 or nothing ($0.00).</p>" +
            "<p> <font color='#FFFFFF'> Press spacebar to continue.</p></font></div>",
          choices: jsPsych.NO_KEYS,
          trial_duration:3000,
          data: {
            test_part: 'moodinstructionfigure',
            blocknumber: 888,
            trialnumber: 888,
            winorloseblock: 888,
            winorlosepos: 888,
          }
        };
        practtimeline.push(fullscreen);
      practtimeline.push(moodinstructionfigure);

       var moodinstructionfigure2 = {
         type: 'html-keyboard-response',
         stimulus: "<p> In the first mini-game, on each trial, you will be asked to choose between 2 symbols similar to the ones shown below. <br> From time to time you will be asked to rate how happy you are at any given moment.</p>" +
           "<div style='float: right; width: 50%;'> <img src='img/instructions11.bmp'></img>" +
           "<p class='small'><strong> </strong></p></div>" +
           "<div style='float: left; width: 50%;'> <img src='img/instructions22.bmp'></img>" +
           "<p class='small'><strong> </strong></p></div>" +
           "<div style='float: left;' > <p> After your choice, the outcome will be shown on the screen. Each time, you may win $0.05 or nothing ($0.00).</p>" +
           "<p> <font color='#000000'> Press spacebar to continue.</p> </font> </div>",
          choices: " ",
         data: {
           test_part: 'moodinstructionfigure2',
           blocknumber: 888,
           trialnumber: 888,
           winorloseblock: 888,
           winorlosepos: 888,
         }
       };
       practtimeline.push(fullscreen);
      practtimeline.push(moodinstructionfigure2);

        var moodinstructionwin = {
          type: 'html-keyboard-response',
          stimulus: "<p> <font color='#0000FF'> The aim is to accumulate as much money as possible.</font> </p> " +
            "<p> The different symbols are not equivalent in terms of outcome: <br> with some you are more likely to win than with others. </p> " +
           " <p> There will be different sessions of this mini-game <br> and each time you will be presented with a new set of symbols. </p>" +
           " <p> <font color='#0000FF'> Your current earnings will not be displayed on the screen, but the computer will keep track of it. </p>"+
           " <p> Your final bonus will take into account the money you accumulated on this set of mini-games. </font></p>" +
            "<div style= 'float: down;'> <p> Press spacebar to continue.</p> </div>",
            choices: " ",
          data: {
            test_part: 'moodinstructionwin',
            blocknumber: 888,
            trialnumber: 888,
            winorloseblock: 888,
            winorlosepos: 888,
          }
        };
        practtimeline.push(fullscreen);
        practtimeline.push(moodinstructionwin);

        var moodinstructionscale = {
          type: 'html-keyboard-response',
          stimulus: "<p> During this mini-game, from time to time, you will be asked to rate how happy you are at any given moment on a rating scale, which will be explained next.</p>" +
          "<p> <strong> Please use as much of the rating scale as you can. </strong> </p> " +
          "<p> Press spacebar to continue.</p>",
          choices: " ",
          data: {
            test_part: 'moodinstructionscale',
            blocknumber: 888,
            trialnumber: 888,
            winorloseblock: 888,
            winorlosepos: 888,
          }
        };
        practtimeline.push(fullscreen);
        practtimeline.push(moodinstructionscale);

            var moodrating_prac1 = {
              type: 'pract-slider-response',
              stimulus: "<div style = 'text-align:center;'> <p> A rating scale as shown below will be used throughout this mini-game.</p>" +
                "<p> You will be able to rate how happy you are at any given moment. </p> "  +
                "<p> If you are unhappy you should use the left half of the rating scale. If you are happy you should use the right half of the rating scale. </p> " +
                 "<p> Choose any point with your mouse and click \"Submit\" to continue.  </p> " +
                 "<p> How happy are you at this moment? </p> </div>",
              labels: ['Very Unhappy', 'Very Happy'],
              label_width: 25,
              width: '400px',
              start: 50,
              data: {
                test_part: 'moodrating_prac1',
                blocknumber: 888,
                trialnumber: 888,
                winorloseblock: 888,
                winorlosepos: 888,
              },
              on_start: function(){
                  var res = cursornone.replace("none", "default");
                  document.getElementById("cursornone").innerHTML = res;
              },
              on_finish: function(){
                  var res = cursornone.replace("default", "none");
                  document.getElementById("cursornone").innerHTML = res;
              },
                };
                practtimeline.push(fullscreen);
           practtimeline.push(moodrating_prac1);




//////////////////////////////////////////////////////
////////////// Confidence practice part /////////////
/////////////////////////////////////////////////////
        var introductionconf = {
          type: 'html-keyboard-response',
          stimulus: "<div style = 'text-align:center; font-size: 30px'> <p> Instructions for the second mini-game! </p> </div>" + "<p> Press spacebar to continue.</p>",
          choices: " ",
          data: {
            test_part: 'introductionconf',
            blocknumber: 888,
            trialnumber: 888,
            winorloseblock: 888,
            winorlosepos: 888,
          },
        };
    practtimeline.push(fullscreen);
     practtimeline.push(introductionconf);



      var confinstructionstim  = {
        type: 'html-keyboard-response',
        stimulus:'<p class="instructions"> In the second mini-game, you will be asked to judge which of 2 boxes contains more dots, before rating your confidence in your judgement.</p>' +
        '<p class="instructions">At the beginning of each trial, you will be presented with a black cross in the middle of the screen.</p>' +
        '<p> Focus your attention on it. </p>'+
        'Then, 2 black boxes with a number of white dots will be flashed and you will be asked to judge which box had the higher number of dots.</p>' +
        '<p class="instructions">If the box on the <strong>left</strong> had more dots, <strong>press S</strong>.<br> If the box on the <strong>right</strong> had more dots, <strong> press D</strong>.</p>' +
        '<p class="instructions">Please respond quickly and to the best of your ability.</p>' +
        "<p> <font color='#FFFFFF'> Press spacebar to continue. </font> </p>",
      choices: jsPsych.NO_KEYS,
      trial_duration:3000,
        data: {
          test_part: 'confinstructionstim',
          blocknumber: 888,
          trialnumber: 888,
          winorloseblock: 888,
          winorlosepos: 888,
        },
      };
      practtimeline.push(fullscreen);
      practtimeline.push(confinstructionstim);

      var confinstructionstim2  = {
        type: 'html-keyboard-response',
        stimulus:'<p class="instructions"> In the second mini-game, you will be asked to judge which of 2 boxes contains more dots, before rating your confidence in your judgement.</p>' +
        '<p class="instructions">At the beginning of each trial, you will be presented with a black cross in the middle of the screen.</p>' +
        '<p> Focus your attention on it. </p>'+
        'Then, 2 black boxes with a number of white dots will be flashed and you will be asked to judge which box had the higher number of dots.</p>' +
        '<p class="instructions">If the box on the <strong>left</strong> had more dots, <strong>press S</strong>.<br> If the box on the <strong>right</strong> had more dots, <strong> press D</strong>.</p>' +
        '<p class="instructions">Please respond quickly and to the best of your ability.</p>' +
        '<p class="instructions">Press spacebar to continue.</p>',
        choices: " ",
        data: {
           test_part: 'confinstructionstim2',
           blocknumber: 888,
           trialnumber: 888,
           winorloseblock: 888,
           winorlosepos: 888,
         },
      };
      practtimeline.push(fullscreen);
      practtimeline.push(confinstructionstim2);

      var confinstructionpract  = {
        type: 'html-keyboard-response',
        stimulus:'<p class="instructions">We will now ask you to carry out some practice trials. Please respond only when the dots have disappeared.</p>' +
    	'<p class="instructions">In this practice phase we will tell you whether your judgements are correct or incorrect. <br></br>If your judgement is <strong>correct</strong>, the box that you selected will be highlighted in <font color="#228B22"><strong>green</strong></font>. <br>If your judgement is <strong>incorrect</strong>, the box that you selected will be highlighted in <font color="#DC143C"><strong>red</strong></font>.</p>' +
    	'<p class="instructions">You will not be asked to rate your confidence on these practice trials.</p>' +
    	'<p class="instructions">Press spacebar to continue.</p>',
      choices: " ",
      data: {
        test_part: 'confinstructionpract',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
    };
    practtimeline.push(fullscreen);
    practtimeline.push(confinstructionpract);

    var fixation = {
      type:'html-keyboard-response',
      stimulus: '<div style="font-size:70px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: fixation_time,
      prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
      data:{
        test_part:'fixation',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
    }

for(let i = 0; i < numPrac; i++) //PRACTICE TRIAL LOOP for dots
  {
    var stim1 = confdrawstimulus("myInnerCanvas",numDots1[i]); // Create stimulus 1
    var stim2 = confdrawstimulus("myInnerCanvas2",numDots2); // Create stimulus 2
    ////// show the two black boxes with the dots in it.
              var dots = {
                type: 'confdisplay2boxes', // previously image-keyboard-reponse-edited2
                stimulus: stim1,
                stimulus2: stim2,
                position: confpos[i],
                prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">Press S if the left box had more dots. Press D if the right box had more dots.</p>', /// (INVISIBLE) put the whole prompt because when the screen is smaller and the prompt takes 2 lines it changes the position of the boxes
                choices: jsPsych.NO_KEYS,
                trial_duration: stim_time, /// stim_time is defined on top (and in main file later???)
                data: {
                  test_part: 'confstim',
                  blocknumber: 888,
                  trialnumber: 888,
                  winorloseblock: 888,
                  winorlosepos: 888,
                },
              }

              ////// Shows the two blank black boxes
              var postblank = {
                type: 'confdisplay2boxes',
                stimulus: blankstim1,
                stimulus2: blankstim2,
                choices: ['s','d'],
                position: 1,
                prompt:'<p style="text-align:center; font-size: 24px">Press S if the left box had more dots. Press D if the right box had more dots.</p>',
                data: {
                  test_part: 'confblankstim',
                  blocknumber: 888,
                  trialnumber: 888,
                  winorloseblock: 888,
                  winorlosepos: 888,
                }, //need this for feedback
                on_finish: function(data){
                  if (data.key_press ==83) {
                    data.correct = true; //// if press on "W" then true (not in theory but it is easier for the selection part)
                    } /// end if
                    else {
                      data.correct = false; //// if press on other ("E") then false,
                    } // end else
                  } /// end function
                } /// end postblank

    //////Shows which item was selected
            var practfeedback = {
              type: 'confdisplay2boxes',
              choices: jsPsych.NO_KEYS,
              position: 1,
              trial_duration:feedback_trial_time, /// feedback_trial_time is defined on top (and in main file later???)
              data: {
                test_part: 'confselection',
                blocknumber: 888,
                trialnumber: 888,
                winorloseblock: 888,
                winorlosepos: 888,
              },
              stimulus: function(){
                var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
                if (confpos[i] == 1){ ///// if stim1 is on the left
                if(last_trial_correct){ ////// if left key selected (S in this case)
                  return feedbackstim3; ///// green box
                } else {
                  return blankstim5; //// blank
                }}
                if (confpos[i] == 0){ ///// if stim1 is on the right
                  if(last_trial_correct){ ////// if left key selected (S in this case)
                    return feedbackstim4; ///// red box
                  } else {
                    return blankstim5;
                  }}
              },//// end function stimulus
              stimulus2: function(){
                var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
                if (confpos[i] == 1){ ///// if stim1 is on the left
                if(last_trial_correct){ ////// if left key selected (S in this case)
                  return blankstim5; /////
                } else {
                  return feedbackstim4; //// red box
                }}
                if (confpos[i] == 0){ ///// if stim1 is on the right
                  if(last_trial_correct){ ////// if left key selected (S in this case)
                    return blankstim5;
                  } else {
                    return feedbackstim3; /// green box
                  }}
                },//// end function stimulus2
                prompt: function (){
                  var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
                  if (confpos[i] == 1){ ///// if stim1 is on the left
                  if(last_trial_correct){ ////// if left key selected (S in this case)
                    return '<p style="text-align:center; font-size: 24px">Correct!</p>';
                  } else {
                    return '<p style="text-align:center; font-size: 24px"> Incorrect!</p>';
                  }}
                  if (confpos[i] == 0){ ///// if stim1 is on the right
                    if(last_trial_correct){ ////// if left key selected (S in this case)
                      return '<p style="text-align:center; font-size: 24px"> Incorrect!</p>';
                    } else {
                      return '<p style="text-align:center; font-size: 24px"> Correct!</p>';
                    }}
              } //// end function prompt
              } ///// end practfeedback

    practtimeline.push(fullscreen);
    practtimeline.push(fixation);
    practtimeline.push(dots);
    practtimeline.push(postblank);
    practtimeline.push(practfeedback);

} // end number of trials for conf part

        var confinstructionscale =  {
        type: 'html-keyboard-response',
        stimulus: '<p> <strong> In the task proper, the dots will be flashed more rapidly. </strong> </p>  ' +
        '<p class="instructions"> Besides, in the task proper, you will not be provided accuracy feedback on your judgements, but the box you selected will be highlighted  in <font color="#008080"><strong>blue</strong></font>.</p>' +
        '<p class="instructions">Instead, you will  be asked to rate your confidence in your judgement on a rating scale, which will be explained next.</p>' +
        '<p class="instructions">Please do your best to rate your confidence accurately and do take advantage of the whole rating scale.</p>' +
        '<p class="instructions">Press spacebar to continue.</p>',
        choices: " ",
        data: {
          test_part: 'confinstructionscale',
          blocknumber: 888,
          trialnumber: 888,
          winorloseblock: 888,
          winorlosepos: 888,
        },
        };
        practtimeline.push(confinstructionscale);


    var confrating_prac1 = {
      type: 'pract-slider-response',
      stimulus: '<div style = "text-align:center;"> <p> A rating scale as shown below will be used throughout the mini-game. <br> You will be able to rate your confidence in your judgements by choosing any point along the scale with your mouse.</p> </div>' +
      '<p> <strong> The initial position of the cursor on the scale will be random. </strong> </p>' +
      ' <p> Choose any point with your mouse and click \"Submit\" to continue. </p>' +
      ' <p> Rate your <strong>confidence</strong> in your judgement:</p>',
      labels: ['Guessing', 'Certain'],
      width: '400px',
      start: Math.floor(Math.random()*100),
      label_width: 20,
      data: {
        test_part: 'confrating_prac1',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
      on_start: function(){
          var res = cursornone.replace("none", "default");
          document.getElementById("cursornone").innerHTML = res;
      },
      on_finish: function(){
          var res = cursornone.replace("default", "none");
          document.getElementById("cursornone").innerHTML = res;
      },
        };
        practtimeline.push(fullscreen);
    practtimeline.push(confrating_prac1);

    var confrating_prac2 = {
      type: 'pract-slider-response',
      stimulus: '<div style = "text-align:center;"><p> During the task, if you are <strong>very sure</strong> that you made the correct judgement, where on the scale would you choose?</p></div>',
      labels: ['Guessing', 'Certain'],
      label_width: 20,
      width: '400px',
      start: Math.floor(Math.random()*90),
      data: {
        test_part: 'confrating_prac2',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
      on_start: function(){
          var res = cursornone.replace("none", "default");
          document.getElementById("cursornone").innerHTML = res;
      },
      on_finish: function(){
          var res = cursornone.replace("default", "none");
          document.getElementById("cursornone").innerHTML = res;
      },
        };
        practtimeline.push(fullscreen);
    practtimeline.push(confrating_prac2);

    var confrating_prac2ans = {
      type: 'pract-slider-response',
      stimulus: '<div style = "text-align:center;"> <p> If you are <strong>very sure</strong> that you made the correct judgement, you should have responded <strong>Certain</strong>.</p> </div>',
      labels: ['Guessing', 'Certain'],
      width: '400px',
      label_width: 20,
      start: 100,
      button_label: "Understood",
      continue: "yes",
      choice: "no",
      data: {
        test_part: 'confrating_prac2ans',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
      on_start: function(){
          var res = cursornone.replace("none", "default");
          document.getElementById("cursornone").innerHTML = res;
      },
      on_finish: function(){
          var res = cursornone.replace("default", "none");
          document.getElementById("cursornone").innerHTML = res;
      },
        };
    practtimeline.push(fullscreen);
    practtimeline.push(confrating_prac2ans);

    var confrating_prac3 = {
      type: 'pract-slider-response',
      stimulus: '<div style = "text-align:center;"><p> If you are <strong>very unsure</strong> that you made the correct judgement, where on the scale would you choose? </p></div>',
      labels: ['Guessing', 'Certain'],
      width: '400px',
      start: Math.floor(Math.random()*90) + 10,
      label_width: 20,
      data: {
        test_part: 'confrating_prac3',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
      on_start: function(){
          var res = cursornone.replace("none", "default");
          document.getElementById("cursornone").innerHTML = res;
      },
      on_finish: function(){
          var res = cursornone.replace("default", "none");
          document.getElementById("cursornone").innerHTML = res;
      },
        };
    practtimeline.push(fullscreen);
    practtimeline.push(confrating_prac3);

    var confrating_prac3ans = {
      type: 'pract-slider-response',
      stimulus: '<div style = "text-align:center;"> <p> If you are <strong>very unsure</strong> you made the correct judgement, you should have responded <strong>Guessing</strong>.</p> <p> In the minigame, you will be able to click anywhere in-between these descriptions according to your confidence. </p> </div>',
      labels: ['Guessing', 'Certain'],
      width: '400px',
      continue: "yes",
      choice: "no",
      label_width: 20,
      button_label: "Understood",
      start: 0,
      data: {
        test_part: 'confrating_prac3ans',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
      on_start: function(){
          var res = cursornone.replace("none", "default");
          document.getElementById("cursornone").innerHTML = res;
      },
      on_finish: function(){
          var res = cursornone.replace("default", "none");
          document.getElementById("cursornone").innerHTML = res;
      },
        };
    practtimeline.push(fullscreen);
    practtimeline.push(confrating_prac3ans);

      var confinstructionbonus =  {
      type: 'html-keyboard-response',
      stimulus: "<p> Well done! </p>" +
      " <p> <font color='#0000FF'> Your bonus earnings will also depend on your performance on the judgements and on the accuracy of your confidence ratings. </font></p>" +
       "<p> Press spacebar to continue.</p>",
      choices: " ",
      data: {
        test_part: 'confinstructionbonus',
        blocknumber: 888,
        trialnumber: 888,
        winorloseblock: 888,
        winorlosepos: 888,
      },
      };
      practtimeline.push(fullscreen);
      practtimeline.push(confinstructionbonus);

return practtimeline;
} // end function
