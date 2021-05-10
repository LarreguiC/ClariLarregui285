var questions = 5;

var questionsLeft = ' [' + questions + ' questions left]';
var adjective1 = prompt('Type and adjective describing something or an object' + questionsLeft);
questions -= 1;

var questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Type and adjective describing someone' + questionsLeft);
questions -= 1;

var questionsLeft = ' [' + questions + ' questions left]';
var noun1 = prompt('Please type a noun that is an object ' + questionsLeft);
questions -= 1;

var questionsLeft = ' [' + questions + ' questions left]';
var noun2 = prompt('Please type a noun that is an object' + questionsLeft);
questions -= 1;

var questionsLeft = ' [' + questions + ' questions left]';
var noun3 = prompt('Please type a plural noun that is a animal' + questionsLeft);
questions -= 1;

var questionsLeft = ' [' + questions + ' questions left]';
var game = prompt('Please type a game/board game' + questionsLeft);

alert('All done. Ready for the message?');
var sentence = "<h2> A Vacation is when you take a trip to some " + adjective1;
sentence += ' place with your ' + adjective2;
sentence += ' family. Usually you go to some place that is near a ' + noun1;
sentence += ' or up on a ' + noun2 + '.';
sentence += ' A good vacation place is one where you can ride ' + noun3;
sentence += ' or play' + game + ' .</h2> ';
document.write(sentence);


