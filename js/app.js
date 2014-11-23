$(document).ready(function () {
	//Pre-load images into cache 
	function preloadImages(srcs) {
    	if (!preloadImages.cache) {
        preloadImages.cache = [];
    	}
    	var img;
    	for (var i = 0; i < srcs.length; i++) {
	        img = new Image();
	        img.src = srcs[i];
	        preloadImages.cache.push(img);
	    }
	}
	var imageSrcs = ["img/arryn-sigil-partial.png", "img/baratheon-sigil-partial.png", "img/greyjoy-sigil-partial.png", "img/lannister-sigil-partial.png", "img/martell-sigil-partial.png", "img/stark-sigil-partial.png", "img/targaryen-sigil-partial.png", "img/tully-sigil-partial.png", "img/tyrell-sigil-partial.png", "img/arryn-sigil-partial.png", "img/header-logo2.jpg", "img/black-smoke.jpg"];
	preloadImages(imageSrcs);

	//Answer List
	function answer (house, sigilImg, words, correctVal) {
		this.house = house,
		this.sigilImg = "img/"+sigilImg+"-sigil-partial.png",
		this.words = words,
		this.question = "What is the sigil of House "+house+"?",
		this.correctVal = "Correct! The sigil of House "+house+" is a "+correctVal+"."
	};
	var arryn = new answer ("Arryn", "arryn", "As High as Honor", "falcon");
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
	function randomAns() {
		shuffleArray(answerList);
		for (i=1; i<=4; i++) {
			$('#image'+i).attr('src', answerList[i-1].sigilImg);
			$('#button'+i).attr('value', answerList[i-1].house)
		};
	};
	randomAns();

	//Randomly choose question from selected answers and deletes that entry from answerList
	var rand;
	function randomQ () {
		rand = Math.floor(Math.random()*4)
		$('#question').text(answerList[rand].question);
		$('#question').attr('value', answerList[rand].house);
	};
	randomQ();

	//Play game button on intro page
	$('#play-game').click(function() {
		$('.game-intro').fadeOut(700);
	});
	
	//Score tracker
	var round = 1;
	var score = 0;

	//Click variable to prevent double clicking errors
	var clickNum = 0;

	//Player selects answer
	$('.answers').click(function() {
		var selected = ($(this).val());
		var ans = $('#question').attr("value");
		if (clickNum <1) {
			if (selected === ans) {
				$('#feedback').text(answerList[rand].correctVal);
				score = score +1;
				$('#score').text(score);
			} else {
				$('#feedback').text("Incorrect! This is the sigil of House "+selected);
			};
			$('#feedback').fadeIn();
			answerList.splice((rand), 1);
			if (answerList.length >= 4) {
				$('#next').delay(800).fadeIn();
			} else {
				$('#finish').delay(800).fadeIn();
			};
		};
		clickNum = 1;
	});

	//Next Question
	$('#next').click(function() {
		$('#feedback').fadeOut();
		$('#next').fadeOut();
		$('.game-space').fadeOut(400, function() {
			randomAns();
			randomQ();
			round = round+1;
			$('#round').text(round);
		});
		$('.game-space').fadeIn(600);
		clickNum = 0;
	});

	//Finish Button
	$('#finish').click(function () {
		$('#final-score').text(score+"/6.");
		if(score > 4) {
			$('#win-lose').text("Victory!");
			$('#game-over-gif').attr('src', "img/victory.gif");
		} else {
			$('#win-lose').text("Defeat!");
			$('#game-over-gif').attr('src', "img/defeat.gif");
		}
		$('.main').remove();
		$('#play-game').remove();
		$('.game-over').show();
		$('.game-intro').fadeIn(function() {
			$('#your-score').delay(600).fadeIn();
			$('#game-over-gif').delay(2400).fadeIn();
		});
	});

	//New Game
	$('#new-game').click(function() {
		$('.game-space').fadeOut(400, function() {
			answerList = [arryn,baratheon,greyjoy,lannister,martell,stark,targaryen,tully,tyrell];randomAns();
			randomQ();
			round = 1;
			score = 0;
			$('#round').text(round);
			$('#score').text(score);
		});
		$('.game-space').fadeIn(600);
		clickNum = 0;
	});
});
