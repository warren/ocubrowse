//var div=document.createElement("div");
//document.body.appendChild(div);
//div.innerText="test123";



console.log( "loaded!" );
webgazer.begin(); // turns on wgazer
webgazer.showPredictionPoints(true); //red dot
setTimeout(function(){
  webgazer.end();
  alert("data saved");
},3000);
webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null){
    return;
  }
  console.log(data);
});