
var QutesArray = ["\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"<p class='lead py-2'> -- Marilyn Monroe</p>",
"\"Be yourself; everyone else is already taken.\"<p class='lead py-2'>  -- Oscar Wilde</p>",
"\"A room without books is like a body without a soul.\"<p class='lead py-2'>  -- Marcus Tullius Cicero</p>",
"\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"<p class='lead py-2'>  -- Bernard M. Baruch</p>",
"\"You only live once, but if you do it right, once is enough.\"<p class='lead py-2'>  -- Mae West</p>",
"\"Be the change that you wish to see in the world.\"<p class='lead py-2'> -- Mahatma Gandhi</p>"];

var random = Math.floor(Math.random() * QutesArray.length);


function addQute() {

 
    var random = Math.floor(Math.random() * QutesArray.length);

    document.getElementById('qute').innerHTML=QutesArray[random];
    
  }



