//Function to draw blankstimulus
function confdrawblankstimulus(canvasID,colour)
{
	var stimCanvas = document.getElementById(canvasID);
  var stimContext = stimCanvas.getContext("2d");

	//create black stimulus box
	var squareWidth = 250;
	var sqystartpoint = (stimCanvas.height - squareWidth)/2;
	var sqxstartpoint = (stimCanvas.width - squareWidth)/2;

	stimContext.fillStyle = colour; // the colour is defined outside the function 
	stimContext.fillRect(sqxstartpoint,  sqystartpoint, squareWidth, squareWidth);// Fill black square (stimulus background)

	//specification
  var cellSize = 10;

	var string4stimulus = stimCanvas.toDataURL();

	stimContext.clearRect(0, 0, stimCanvas.width, stimCanvas.height);

	return string4stimulus;
}
