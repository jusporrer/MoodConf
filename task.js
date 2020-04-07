function task(NumBlocks, NumTrials)
{
    var timeline = [];
    let cursornone = document.getElementById("cursornone").innerHTML;

    //////////////////////////////////////////////////////////////
    ///MOOD PARAMETERS that do not need to change every block ///
    //////////////////////////////////////////////////////////////
    let f = jsPsych.randomization.shuffle([0,1,2,3,4,5],1); //// randomise the order of the figures pair,    console.log(f);
    var winorloseblock = []; ////// here 1 is a win block and O is a lose block
    var winorlosepos = []; ////// allows to have high win/lose and low win/lose that change side 50/50

    function shufflewinorloss(winorloseblock, winorlosepos) {
      		var winorlosepair = [[1,1], [1,1], [1,0], [0,1], [0,1], [0,0]];

      		function shuffler(winorlosepair) {
          		var j, x, i;
          		for (i = winorlosepair.length; i; i -= 1) {
          		    j = Math.floor(Math.random() * i);
          		    x = winorlosepair[i - 1];
         			    winorlosepair[i - 1] = winorlosepair[j];
         		 	    winorlosepair[j] = x;}};
      		function range(start, stop, step) {
          		if (typeof stop == 'undefined') {stop = start;start = 0;}
          		if (typeof step == 'undefined') {step = 1;}
          		if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {return [];}
          		var result = [];
          		for (var i = start; step > 0 ? i < stop : i > stop; i += step) {result.push(i);}
          		return result;};

              var idx = range(winorlosepair.length) ;
              shuffler(idx) ;
              var shuffle_winorlosepair = [] ;
              $.map(idx,function(elt){shuffle_winorlosepair.push(winorlosepair[elt])}) ;

              for (var i = 0 ; i < shuffle_winorlosepair.length ; i++) {
                var interm = shuffle_winorlosepair[i] ;
                var winorloseblock = winorloseblock.concat(interm[0]) ;
                var winorlosepos = winorlosepos.concat(interm[1]) ;
              } /// end for loop shuffle_winorlosepair
              console.log(subject_id);
              console.log(subject_id % 2);
              console.log("the initial is", winorloseblock);

              var count = 1;

          if (subject_id % 2 === 0) {
            while (count /= 0) {
              var count = 0;
            for (var z = 0 ; z < 4 ; z++) {
              //console.log(z);
              if (winorloseblock[0] === 1) {
                var idx = range(winorlosepair.length) ;
                shuffler(idx) ;
                var shuffle_winorlosepair = [] ;
                $.map(idx,function(elt){shuffle_winorlosepair.push(winorlosepair[elt])}) ;
                winorloseblock.length = 0;
                winorlosepos.length = 0;
                for (var i = 0 ; i < shuffle_winorlosepair.length ; i++) {
                  var interm = shuffle_winorlosepair[i];
                  var winorloseblock = winorloseblock.concat(interm[0]) ;
                  var winorlosepos = winorlosepos.concat(interm[1]) ;
                var count = 1;
                } /// end for loop shuffle_winorlosepair
                //console.log(winorloseblock);
              }
              if (winorloseblock[z] === winorloseblock[z+1] & winorloseblock[z+1] === winorloseblock[z+2]) {
                var idx = range(winorlosepair.length) ;
                shuffler(idx) ;
                var shuffle_winorlosepair = [] ;
                $.map(idx,function(elt){shuffle_winorlosepair.push(winorlosepair[elt])}) ;
                winorloseblock.length = 0;
                winorlosepos.length = 0;
                for (var i = 0 ; i < shuffle_winorlosepair.length ; i++) {
                  var interm = shuffle_winorlosepair[i];
                  var winorloseblock = winorloseblock.concat(interm[0]) ;
                  var winorlosepos = winorlosepos.concat(interm[1]) ;
                var count = 1;
                } /// end for loop shuffle_winorlosepair
                //console.log(winorloseblock);
              }
            else if (winorloseblock[0] === 0 & winorloseblock[z] != winorloseblock[z+1] & winorloseblock[z+1] != winorloseblock[z+2]) {
              var count = 0;}
           }
            } /// end while
          } /// end if subject_id % 2 === 0

        if (subject_id % 2 === 1) {
          while (count /= 0) {
            var count = 0;
          for (var z = 0 ; z < 4 ; z++) {
            //console.log(z);
            if (winorloseblock[0] === 0) {
              var idx = range(winorlosepair.length) ;
              shuffler(idx) ;
              var shuffle_winorlosepair = [] ;
              $.map(idx,function(elt){shuffle_winorlosepair.push(winorlosepair[elt])}) ;
              winorloseblock.length = 0;
              winorlosepos.length = 0;
              for (var i = 0 ; i < shuffle_winorlosepair.length ; i++) {
                var interm = shuffle_winorlosepair[i];
                var winorloseblock = winorloseblock.concat(interm[0]) ;
                var winorlosepos = winorlosepos.concat(interm[1]) ;
              var count = 1;
              } /// end for loop shuffle_winorlosepair
              //console.log(winorloseblock);
            }
            if (winorloseblock[z] === winorloseblock[z+1] & winorloseblock[z+1] === winorloseblock[z+2]) {
              var idx = range(winorlosepair.length) ;
              shuffler(idx) ;
              var shuffle_winorlosepair = [] ;
              $.map(idx,function(elt){shuffle_winorlosepair.push(winorlosepair[elt])}) ;
              winorloseblock.length = 0;
              winorlosepos.length = 0;
              for (var i = 0 ; i < shuffle_winorlosepair.length ; i++) {
                var interm = shuffle_winorlosepair[i];
                var winorloseblock = winorloseblock.concat(interm[0]) ;
                var winorlosepos = winorlosepos.concat(interm[1]) ;
              var count = 1;
              } /// end for loop shuffle_winorlosepair
              //console.log(winorloseblock);
            }
          else if (winorloseblock[0] === 1 & winorloseblock[z] != winorloseblock[z+1] & winorloseblock[z+1] != winorloseblock[z+2]) {
            var count = 0;}
         }
          } /// end while
        } /// end if subject_id % 2 === 1


  return [winorloseblock,  winorlosepos];
} ///// end function

  var a = shufflewinorloss([], []);
  var winorloseblock = a[0];
  var winorlosepos = a[1];

  console.log("final sequence is", winorloseblock);


    //on_finish: function(data){data.correct = true;}

    let pos = jsPsych.randomization.shuffle([1,1,1,1,1,1,1,1,1,1,1,1],1); /////// Creates the position of the figure, if left or right, if we want to have the randomization 50/50 for each side L or R shuffle([1,1,1,1,1,1,0,0,0,0,0,0],1);


    /////////////////////////////////////////////////////////////
    ///Conf PARAMETERS that do not need to change every block ///
    ////////////////////////////////////////////////////////////
    var fixation_time = 1000;
  	var feedback_trial_time = 500;
  	var prac_stim_time= 300;
  	var stim_time= 300; ///// presentation time of the dots
    var numDots1 = 25;  //in log space; 4.65 is about 104 dots which is 70 dots shown for the first one
  	var numDots2 = 0;
    var blankstim1 = confdrawblankstimulus("myInnerCanvas","#000000");
    var blankstim2 = confdrawblankstimulus("myInnerCanvas2", "#000000");
    var blankstim3 = confdrawblankstimulus("myInnerCanvas", "#008080"); /// blue selected box
    var blankstim4 = confdrawblankstimulus("myInnerCanvas2", "#FFFFFF"); //// colour of the background that allow to have feedback (#FFFFFF is white)
    var stim1 = confdrawstimulus("myInnerCanvas",numDots1); // Create stimulus 1
    var stim2 = confdrawstimulus("myInnerCanvas2",numDots2); // Create stimulus 2
    var confpos = jsPsych.randomization.shuffle([1,1,1,1,1,1,0,0,0,0,0,0],1);

///////////////////////////////////////////// Defined fixation  and moodrating before any loop so it optimize the code
    var fixation = {
      type:'html-keyboard-response',
      stimulus: '<div style="font-size:70px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: fixation_time,
      prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
      data:{
        test_part:'fixation',
        blocknumber: 999,
        trialnumber: 999,
        winorloseblock: 999,
        winorlosepos: 999,
      }
    }


        var moodtransition = {
            type: 'html-keyboard-response',
            stimulus: "<p> Get ready for the first mini game!</p>" +
            "<p> Remember: Press W for the left symbol, press E for the right symbol, and rate how happy you are at any given moment on the scale.</p>" +
            "<p> Press spacebar to continue </p>",
            data: {
              test_part: 'moodtransition',
              blocknumber: 999,
              trialnumber: 999,
              winorloseblock: 999,
              winorlosepos: 999,
            },
        };


        var confidencetransition = {
            type: 'html-keyboard-response',
            stimulus: "<p> Get ready for the second mini game!</p>" +
            "<p> Remember: Press S if the box on the left had more dots, press D if the box on the right had more dots, and rate your confidence in each judgement on the scale.</p>" +
            "<p> Press spacebar to continue </p>",
            data: {
              test_part: 'confidencetransition',
              blocknumber: 999,
              trialnumber: 999,
              winorloseblock: 999,
              winorlosepos: 999,
            },
        };

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


    /////////////////////////////////////////////////
    ////// Start of the block ///////////////////////
    /////////////////////////////////////////////////

for (let y = 0; y < NumBlocks; y++)  { // use of let instead of var as it allows it to be used in function loops

        var task_break = {
      	type:'html-keyboard-response',
      	stimulus: '<p> Now you are ready to start the experiment.</p>'+
        '<p> Each mini-game comprises '+NumTrials+' trials. The 2 mini-games will alternate. </p>' +
        '<p> In total there are '+NumBlocks+' parts and you will be offered to take breaks in-between parts. </p>' +
      	'<p>There is no time limit on your responses or on your ratings.</p>'+
        '<p> <strong> Press spacebar when you are ready to start!</strong></p>',
        choices: " ",
        data: {
          test_part: 'firstbreak',
          blocknumber: y,
          trialnumber: 999,
          winorloseblock: 999,
          winorlosepos: 999,
        }
      	};

      	var task_break2 = {
        type:'html-keyboard-response',
      	stimulus:'<p> You can now pause for a break. You have completed '+y+' out of '+NumBlocks+' parts. Press spacebar to continue.</p>',
        choices: " ",
        data: {
          test_part: 'blockbreak',
          blocknumber: y,
          trialnumber: 999,
          winorloseblock: 999,
          winorlosepos: 999,
        }
      	};

      //PUSH BREAK SCREENS BETWEEN EACH BLOCK
      		if (y > 0)
      		{timeline.push(task_break2);}
      		else
      		{
            timeline.push(task_break);
          }

          timeline.push(moodtransition);

      /////Allow Mood Rating just before the start of each trial (first mood rating)
          //timeline.push(moodrating);

  //////////////////////////////////////////////////////
  ///MOOD PARAMETERS that need to change every block ///
  /////////////////////////////////////////////////////
  let winblock1 = jsPsych.randomization.shuffle([1,1,1,1,1,1,1,1,1,1,0,0],1); ////// here 1 is a win and O is a lose, with a prob of wining that is 10/12
  let winblock2 = jsPsych.randomization.shuffle([1,1,1,1,1,1,1,0,0,0,0,0],1); ////// here 1 is a win and O is a lose, with a prob of wining that is 7/12
  let loseblock1 = jsPsych.randomization.shuffle([1,1,1,1,1,0,0,0,0,0,0,0],1); ////// here also 1 is a win and O is a lose, with a prob of wining that is 5/12
  let loseblock2 = jsPsych.randomization.shuffle([1,1,0,0,0,0,0,0,0,0,0,0],1); ////// here also 1 is a win and O is a lose, with a prob of wining that is 2/12

/////////////////////////////////////////////////
////// Start of the trial ///////////////////////
/////////////////////////////////////////////////
for(let i = 0; i < NumTrials; i++) /// use of let instead of var as it allows it to be used in function loops
  {
    var moodrating = {
      type: 'slider-response',
      stimulus: '<div style = "text-align:center; font-size: 24px"> <p> How <strong>happy</strong> are you at this moment? </p> </div>',
      labels: ['Very Unhappy', 'Very Happy'],
      data: {
        test_part: 'moodrating',
        blocknumber: y,
        trialnumber: i,
        winorloseblock:winorloseblock[y],
        winorlosepos: winorlosepos[y],
      },
      width: '400px',
      start: 50,
      on_start: function(){
          var res = cursornone.replace("none", "default");
          document.getElementById("cursornone").innerHTML = res;
      },
      on_finish: function(){
          var res = cursornone.replace("default", "none");
          document.getElementById("cursornone").innerHTML = res;
      },
        };
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
            data: {
              test_part: 'moodpretestblock1',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
          }
          var test1 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M11.bmp',
            stimulus2: 'img/M12.bmp',
            choices: ['w','e'],
            position: pos[i],
            correct_key: 87,
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for the left symbol. Press E for the right symbol.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {
              test_part: 'moodtestblock1',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
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
            data: {
              test_part: 'moodpretestblock2',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
          }
          var test2 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M21.bmp',
            stimulus2: 'img/M22.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for the left symbol. Press E for the right symbol.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {
              test_part: 'moodtestblock2',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
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
              data: {
                test_part: 'moodpretestblock3',
                blocknumber: y,
                trialnumber: i,
                winorloseblock:winorloseblock[y],
                winorlosepos: winorlosepos[y],
              },
            }
          var test3 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M31.bmp',
            stimulus2: 'img/M32.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for the left symbol. Press E for the right symbol.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {
              test_part: 'moodtestblock3',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
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
            data: {
              test_part: 'moodpretestblock4',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
          }
          var test4 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M41.bmp',
            stimulus2: 'img/M42.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for the left symbol. Press E for the right symbol.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {
              test_part: 'moodtestblock4',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
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
            data: {
              test_part: 'moodpretestblock5',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
          }
          var test5 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M51.bmp',
            stimulus2: 'img/M52.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for the left symbol. Press E for the right symbol.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {
              test_part: 'moodtestblock5',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
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
            data: {
              test_part: 'moodpretestblock6',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
          }
          var test6 = {
            type: 'mooddisplay2figures',
            stimulus: 'img/M61.bmp',
            stimulus2: 'img/M62.bmp',
            choices: ['w','e'],
            correct_key: 87,
            position: pos[i],
            timing_post_trial: 0,
            prompt: '<p style="text-align:center; font-size: 24px">Press W for the left symbol. Press E for the right symbol.</p>',
            prompt2: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">invisibleprompt</p>',
            data: {
              test_part: 'moodtestblock6',
              blocknumber: y,
              trialnumber: i,
              winorloseblock:winorloseblock[y],
              winorlosepos: winorlosepos[y],
            },
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
              else {return (winblock2[i])} /// we want the win to change every trial so we use i here
            } // end if last_trial_correct
            else {
              if (winorlosepos[y] == 1) {return (winblock2[i])}
              else {return (winblock1[i])}
            }// end else last_trial_correct
          },/// end winorlose function
          data: {
            test_part: 'winfeedback',
            blocknumber: y,
            trialnumber: i,
            winorloseblock:winorloseblock[y],
            winorlosepos: winorlosepos[y],
          },
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
              else {return (loseblock2[i])} /// we want the win to change every trial so we use i here
            } // end if last_trial_correct
            else {
              if (winorlosepos[y] == 1) {return (loseblock2[i])}
              else {return (loseblock1[i])}
            }// end else last_trial_correct
          },/// end winorlose function
          data: {
            test_part: 'losefeedback',
            blocknumber: y,
            trialnumber: i,
            winorloseblock:winorloseblock[y],
            winorlosepos: winorlosepos[y],
          },
      }; // end of losefeedback

      timeline.push(fullscreen);

    if(i == 0)   /////Allow Mood Rating at the middle of the trial (second mood rating)
      {timeline.push(moodrating);}
  //  timeline.push(fixation);
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

    timeline.push(fullscreen);

    if(i == 4)   /////Allow Mood Rating at the middle of the trial (second mood rating)
      {timeline.push(moodrating);}
    if(i == 11)  /////Allow Mood Rating at the end of the trial (third mood rating). ONLY WORKS WHEN 12 TRIALS SELECTED
      {timeline.push(moodrating);
      timeline.push(confidencetransition);}



} // end number of trials for mood part


//////////////////////////////////////////////////////
////////////// Confidence part loop trial ////////////
/////////////////////////////////////////////////////

for(let i = 0; i < NumTrials; i++)
  {
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
                  test_part: 'confdots',
                  blocknumber: y,
                  trialnumber: i,
                  winorloseblock: 999,
                  winorlosepos: 999,
                }, //n
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
                  blocknumber: y,
                  trialnumber: i,
                  winorloseblock: 999,
                  winorlosepos: 999,
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
            var select = {
              type: 'confdisplay2boxes',
              choices: jsPsych.NO_KEYS,
              prompt: '<p style="color:#FFFFFF; text-align:center; font-size: 24px">Press S if the left box had more dots. Press D if the right box had more dots.</p>', /// (INVISIBLE) put the whole prompt because when the screen is smaller and the prompt takes 2 lines it changes the position of the boxes
              position: 1,
              trial_duration: feedback_trial_time, /// feedback_trial_time is defined on top (and in main file later???)
              data: {
                test_part: 'confselection',
                blocknumber: y,
                trialnumber: i,
                winorloseblock: 999,
                winorlosepos: 999,
              },
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

              var confrating = {
                type: 'slider-response',
                stimulus: '<div style = "text-align:center; font-size: 24px"><p> Rate your <strong>confidence</strong> in your judgement: </p></div>',
                labels: ['Guessing', 'Certain'],
                width: '400px',
                start: Math.floor(Math.random()*100),
                data: {
                  test_part: 'confrating',
                  blocknumber: y,
                  trialnumber: i,
                  winorloseblock: 999,
                  winorlosepos: 999,
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

    timeline.push(fullscreen);
    timeline.push(fixation);
    timeline.push(dots);
    timeline.push(postblank);
    timeline.push(select);
    timeline.push(confrating);
} // end number of trials for conf part


} // end number of blocks

return timeline;
} // end function
