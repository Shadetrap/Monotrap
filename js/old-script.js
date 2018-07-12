//textrap paratrap docutrap extrap linetrap vocatrap hypertap indextrap spintrap toggletrap
$(document).ready(function(){
$.get("http://www.shadetrap.tk/whatever.txt", function(data) {
    //var myvar = data;
  });
});
//var randomValue = myArray[Math.floor(Math.random() * myArray.length)];
// var str =  "Java script can be written as java-script and javascript";
// str = str.replace(/script/gi, "language"); 
// document.body.innerHTML = document.body.innerHTML.replace('hello', 'hi');
//var res = str.replace("Microsoft", show);
// var str = document.getElementById("demo").innerHTML; 
//console.log(nounMath);
//console.log(adjMath);
//console.log( "why is " + field + " not displaying anything");
function maBootan() {
    function textFileToArray(filename) {
        var reader = (window.XMLHttpRequest != null)
            ? new XMLHttpRequest()
            : new ActiveXObject("Microsoft.XMLHTTP");
        reader.open("GET", filename, false);
        reader.send();
        //return reader.responseText.split(/(\r\n|\n)/g);
        //return reader.responseText.split("\n");
        //return reader.responseText.split("\n");
        //return reader.responseText.split(/\r?\n/);
        //return reader.responseText.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);
        //return reader.responseText;
        return reader.responseText.split("\n");
    }
    //var Beethoven_Song = textFileToArray("http://www.shadetrap.tk/whatever.txt");
    var Bach_Song = textFileToArray("http://www.shadetrap.tk/whatever.txt");

    //var items = data.split(',');
    //var items = data.split("\n");
    var nounList = ['Dr. Strange', 'Rodger Rabbit', 'Stitch', 'Cornelius Fudge', 'Vinesauce', 'Foxy', 'Mario', 'Dexter'];
    var adjList = ['handsome', 'shy', 'insane', 'curious', 'sleepy', 'happy', 'smart', 'cool'];
    var nounMath = nounList[Math.floor(Math.random() * nounList.length)];
    var adjMath = adjList[Math.floor(Math.random() * adjList.length)];
    var whatever = adjList[Math.floor(Math.random() * adjList.length)];
    var bachMath = Bach_Song[Math.floor(Math.random() * Bach_Song.length)];
    //var dataMath = items[Math.floor(Math.random() * items.length)];
    var field = document.getElementById("inpoot").value;
    field = field.replace(/{{noun}}/gi, nounMath); 
    field = field.replace(/{{adj}}/gi, adjMath); 
    field = field.replace(/{{bach}}/gi, bachMath); 
    field = field.replace(/{{whatever}}/gi, whatever); 
    //field = field.replace(/{{items}}/gi, items); 
    //document.getElementById("awtpoot").innerHTML = show;
    document.getElementById("awtpoot").innerHTML = field;
    //document.getElementById("awtpoot").innerHTML = Bach_Song;
    
    console.log(Bach_Song);
}