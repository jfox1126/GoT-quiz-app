$(document).ready(function () {
	
	//Answer List
	function answer (house, sigilImg, words, correctVal) {
		this.house = house,
		this.sigilImg = "img/"+sigilImg+"-sigil-partial.png",
		this.words = words,
		this.question = "What is the sigil of House "+house+"?",
		this.correctVal = "Correct! The sigil of House "+house+" is a "+correctVal+"."
	};
	var arryn = new answer ("Aryrn", "arryn", "As High as Honor", "falcon");
	var baratheon = new answer ('Baratheon', "baratheon", 'Ours is the Fury', 'crowned stag');
	var greyjoy = new answer ('Greyjoy', "greyjoy", 'We Do Not Sow','kraken');
	var lannister = new answer ('Lannister', "lannister", 'Hear me Roar!', 'lion');
	var martell = new answer ('Martell', "martell", 'Unbowed, Unbroken, Unbent', 'sun pierced by a spear');
	var stark = new answer ('Stark', "stark", 'Winter is Coming', 'direwolf');
	var targaryen = new answer ("Targaryen", "targaryen", "Fire & Blood", "three-headed dragon");
	var tully = new answer ('Tully', "tully", 'Family, Duty, Honor', 'silver trout');
	var tyrell = new answer ('Tyrell', "tyrell", 'Growing Strong', 'golden rose');
	var answerList = [arryn,baratheon,greyjoy,lannister,martell,stark,targaryen,tully,tyrell];
	
	//Test that array of answer objects is accurate
	/*for (i = 0; i<=8; i++) {
		var ansIndex = answerList[i];
		for (x in ansIndex) {
			console.log(ansIndex[x]);
		};
	};*/
	
	//Randomize Answer list
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	};
	function randomize() {
		shuffleArray(answerList);
		for (i=1; i<=4; i++) {
			$('#image'+i).attr('src', answerList[i-1].sigilImg);
		};
		$('#question').text(answerList[Math.floor(Math.random()*4)].question);
	}
	randomize();
	


});



	/*Question List
	var qArryn = "What is the seal of House Arryn?";
	var qBaratheon = "What is the seal of House Baratheon?";
	var qGreyjoy = "What is the seal of House Greyjoy?";
	var qLannister = "What is the seal of House Lannister?";
	var qMartell = "What is the seal of House Martell?";
	var qStark = "What is the seal of House Stark?";
	var qTargaryen = "What is the seal of House Targaryen?";
	var qTully = "What is the seal of House Tully?";
	var qTyrell = "What is the seal of House Tyrell?";
	var questionList = [qArryn, qBaratheon, qGreyjoy, qLannister, qMartell, qStark, qTargaryen, qTully, qTyrell];
	Test that array of questions is accurate
	for (i = 0; i<=8; i++) {
		console.log(questionList[i])
	};*/

	/*var randomize = function () {
		var randArray = [];
		for (i=1; i<=4; i++) {
			var rand = answerList[Math.floor(Math.random() * answerList.length)];
			randArray.push(rand);
			$('#image'+i).attr('src', randArray[i-1].sigilImg);
		};
		console.log(randArray[Math.floor(Math.random()*randArray.length)]);
		$('#question').text(randArray[Math.floor(Math.random()*randArray.length)].question);
	}*/