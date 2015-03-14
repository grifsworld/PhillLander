var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");


var nodeArray=new Array();

//look in to checking iframe load with js instead of html
function LoadFile() {
  var oFrame = document.getElementById("frmFile");
  var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML.replace(/\r/g, '');
var arrLines = strRawContents.split("\n");

for (var i = 0; i < arrLines.length; i++) {

nodeArray.push(arrLines[i]);
//alert(arrLines[i]);
}


}
  
test = new Image();
test.src = "http://i.imgur.com/FOZylZA.jpg";
window.onload = function run(){
LoadFile();
check();
function check(){
for(var coord in nodeArray){
	
	coord = nodeArray[coord];
	var partStr = coord.split(' ');
	var x = parseInt(partStr[0]);
	var y = parseInt(partStr[1]);
	ctx.drawImage(test, x,y);
	}
}

}