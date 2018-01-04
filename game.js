var words = ["cat", "dog", "mouse", "horse", "monkey", "bear", "lion", "tiger", "lemur", "koala", "hamster", "goat", "fox", "rabbit", "snake", "badger", "owl", "seagull", "ostrich", "chameleon"];

exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}