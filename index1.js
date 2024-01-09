var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;

document.getElementById("guessBtn").addEventListener("click",function() {
  var guess = parseInt(document.getElementById("guessInput").value);
  attempts++;
  if(guess==randomNumber){
    displaymsg("Congratulations! You Guessed the Number in "+attempts+" attempts.")
    document.getElementById("guessBtn").disabled=true;
  }
else if(guess<randomNumber){
    displaymsg("Too Low Try another Number");
}
else{
    displaymsg("Too high Try another Number");
}
});
function displaymsg(k){
    document.getElementById("msg").textContent=k;

}

