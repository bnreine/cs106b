
//***********************sandpiles************
const sandpiles = require("./problem_4_sandpiles.js");
var grid = [[3,3,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
const row = 0;
const column = 0;
console.log("before: ");
console.log(grid);
console.log("after: ");
sandpiles.init(grid, row, column);
console.log(grid);

//*********************************************





//**************grade level test******************
const gradeLevelTest = require("./problem_5_grade_level_test.js");
const tokens = gradeLevelTest.tokenize();
console.log(tokens);
const wordsSentences = gradeLevelTest.countWordsSentences(tokens);
console.log(wordsSentences);
const totalSyllableCount = gradeLevelTest.countSyllables(tokens);
console.log(`Total Syllables: ${totalSyllableCount}`);

//*************************************************
