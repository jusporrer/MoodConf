//Function to draw blankstimulus
function draw_blankstimulus(canvasID,colour)
{
	var stimCanvas = document.getElementById(canvasID);
  var stimContext = stimCanvas.getContext("2d");

	//create black stimulus box
	var squareWidth = 250;
	var sqystartpoint = (stimCanvas.height - squareWidth)/2;
	var sqxstartpoint = (stimCanvas.width - squareWidth)/2;

	stimContext.fillStyle = colour; // grey inner square#C0C0C0
	stimContext.fillRect(sqxstartpoint,  sqystartpoint, squareWidth, squareWidth);// Fill black square (stimulus background)

	//specification
  var cellSize = 10;

	var string4stimulus = stimCanvas.toDataURL();

	stimContext.clearRect(0, 0, stimCanvas.width, stimCanvas.height);

	return string4stimulus;
}
