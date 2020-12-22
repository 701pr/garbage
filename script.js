function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
//document.write("Random Number between 1000 and 9999: ")  
var rand = ( randomNumber(1000, 9999) );

let  d1,d2,d3,d4;
d4=Math.floor(rand%10);
rand=Math.floor(rand/10);
d3=Math.floor(rand%10);
rand=Math.floor(rand/10);
d2=Math.floor(rand%10);
rand=Math.floor(rand/10);
d1=Math.floor(rand%10);
while(d1===d2 || d1===d3 || d1===d4 || d2===d3 || d2===d4 || d3===d4)
{
rand = ( randomNumber(1000, 9999) );
d4=Math.floor(rand%10);
rand=Math.floor(rand/10);
d3=Math.floor(rand%10);
rand=Math.floor(rand/10);
d2=Math.floor(rand%10);
rand=Math.floor(rand/10);
d1=Math.floor(rand%10);
}
let life=5;
function reload() {
    window.location.reload();
}
function myFunction() {
  var D1 = document.getElementById("a").value;
  console.log(D1);
  var D2 = document.getElementById("b").value;
  console.log(D2);
  var D3 = document.getElementById("c").value;
  console.log(D3);
  var D4 = document.getElementById("d").value;
  console.log(D4);
   if(D1==d1 && D2==d2 && D3==d3 && D4==d4)
   {
  	document.getElementById("lock").innerHTML ="correct input ";
  }
  if(D1==d2 || D1==d3 || D1==d4 && D1!=d1 )
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = yellow>"+D1+"";

  }
  if(D1!=d1 && D1!=d2 && D1!=d3 && D1!=d4)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = red>"+D1+"";

  }
  if(D1==d1)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = #2FFC9F>"+D1+"";

  }
  if(D2==d1 || D2==d3 || D2==d4 && D2!=d2 )
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = yellow>"+D2+"";

  }
  if(D2!=d1 && D2!=d2 && D2!=d3 && D2!=d4)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = red>"+D2+"";

  }
  if(D2==d2)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = #2FFC9F>"+D2+"";

  }
  if(D3==d1 || D3==d2 || D3==d4 && D3!=d3 )
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = yellow>"+D3+"";

  }
  if(D3!=d1 && D3!=d2 && D3!=d3 && D3!=d4)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = red>"+D3+"";

  }
  if(D3==d3)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = #2FFC9F>"+D3+"";

  }
  if(D4==d1 || D4==d3 || D4==d2 && D4!=d4 )
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = yellow>"+D4+"";

  }
  if(D4!=d1 && D4!=d2 && D4!=d3 && D4!=d4)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = red>"+D4+"";

  }
  if(D4==d4)
  {
  	
  	document.getElementById("lock").innerHTML += "<font color = #2FFC9F>"+D4+"";

  }
  if(D1=="" || D2=="" || D3=="" || D4=="")
  {
  	alert("NOT ENOUGH INPUT");
  	return false;
  }

  document.getElementById("a").value = null;
  document.getElementById("b").value = null;
  document.getElementById("c").value = null;
  document.getElementById("d").value = null;
document.getElementById("lock").innerHTML += "<br>"
life--;
document.getElementById("lock").innerHTML += "<font size= 4 color= #079CAD>remaining attempts: "+life+"</font><br>";
if(life==0)
{
document.getElementById("lock").innerHTML = "<font size= 4 color= #E02F4C>you've exhausted all your attempts <br> game will restart now:"
setTimeout(reload, 4000)
}
}
