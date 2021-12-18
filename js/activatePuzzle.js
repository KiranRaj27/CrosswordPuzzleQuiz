

var options = {
				   solution: 			[[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
				   						[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
				   						[null,	null,	null,	 "A",	 "C",	null,	null,	 "L",	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	 "S",	 "A",	 "N",	 "S",	 "E",	 "R",	 "I",	 "F",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 "C",	 "S",	null,	null,	 "N",	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 "H",	null,	null,	null,	 "K",	null,    "E",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 "O",	null,	null,	 "H",	null,	null,    "X",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 "R",	 "U",	 "L",	 "E",	 "S",	 "E",    "T",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 "E",	 "A",	null,	 "K",    "E",    "R",    "N",    "I",    "N",    "G",   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	 "F",	 "D",	null,	null,    "R",    "I",    "B",    "B",    "O",    "N",   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 "T",	null,	null,	null,    "N",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,    "A",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,    "L",   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


		            index: 				[[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,  null,   null,      1,      4,   null,   null,      6,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,      8,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,      2,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,      3,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,      7,   null,      5,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,     10,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,      9,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

		         questions_across: [	  "7. Single section of CSS including the selector, the curly braces, and the different lines with properties and values",
		                                  "8. Correct family of text to use in HTML documents",
		                                  "9. An area at the top of an office program window that contains commands for working with the open file; the commands are organized under tabs",
		                                  "10.Adjusting the space between characters, placing two characters closer together than normal"],

		         questions_down: [		 "1. Clickable text in a hyperlink",
										 "2. With this type of style sheet you can change the look of an entire website by changing just one file",
										 "3. The external style sheet information is in what part of the HTML document",
										 "4. Used to format the layout of webpages in conjunction with HTML",
										 "5. Default alignment for all HTML paragraphs",
										 "6. HTML object that allows you to jump to a new location when click or tap it"]

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);