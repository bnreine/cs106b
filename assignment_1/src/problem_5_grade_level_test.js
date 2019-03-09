const fs = require('fs');

module.exports = {
  tokenize(){
    const file = fs.readFileSync('./resources/problem_5_grade_level_test_stream.txt', 'utf-8');
    var tokens = [];
    var isNewWord = true;
    for(let i=0;i<file.length;i++){
      if(file.charCodeAt(i) !== 32 && !(file.charCodeAt(i) >= 97 && file.charCodeAt(i) <=  122) && !(file.charCodeAt(i) >= 65 && file.charCodeAt(i) <= 90)){
        tokens.push(file[i]);
        isNewWord = true;
      } else if((file.charCodeAt(i) >= 97 && file.charCodeAt(i) <=  122) || (file.charCodeAt(i) >= 65 && file.charCodeAt(i) <= 90)){
        if(isNewWord){
          tokens.push(file[i]);
          isNewWord = false;
        } else {
          tokens[tokens.length - 1]+=file[i];
        }
      } else {
        isNewWord = true;
      }
    }
    return tokens;
  },
  countWordsSentences(tokens){
    var wordsSentences = {
      words: 0,
      sentences: 0
    }
    for(let i=0;i<tokens.length;i++){
      if((tokens[i].charCodeAt(0) >= 97 && tokens[i].charCodeAt(0) <=  122) || (tokens[i].charCodeAt(0) >= 65 && tokens[i].charCodeAt(0) <= 90)){
        wordsSentences.words++;
      } else if(tokens[i].charCodeAt(0) === 46 || tokens[i].charCodeAt(0) === 33 || tokens[i].charCodeAt(0) === 63){
        wordsSentences.sentences++;
      }
    }
    if(wordsSentences.words === 0){
      wordsSentences.words = 1;  //default so no divide by zero
    }
    if(wordsSentences.sentences === 0){
      wordsSentences.sentences = 1; //default so no divide by zero
    }
    return wordsSentences;
  },
  countSyllables(tokens){
    var isNewSyllable = true;
    var totalSyllableCount = 0;
    var wordSyllableCount = 0;
    for(let i=0;i<tokens.length;i++){
      if((tokens[i].charCodeAt(0) >= 97 && tokens[i].charCodeAt(0) <=  122) || (tokens[i].charCodeAt(0) >= 65 && tokens[i].charCodeAt(0) <= 90)){
        wordSyllableCount = 0;
        for(let j=0;j<tokens[i].length;j++){
          switch(tokens[i][j].toLowerCase()){
            case 'a':
              if(isNewSyllable){
                wordSyllableCount++;
                isNewSyllable = false;
              }
              break;
            case 'e':
              if(isNewSyllable && j !== tokens[i].length - 1){
                wordSyllableCount++;
                isNewSyllable = false;
              }
              break;
            case 'i':
              if(isNewSyllable){
                wordSyllableCount++;
                isNewSyllable = false;
              }
              break;
            case 'o':
              if(isNewSyllable){
                wordSyllableCount++;
                isNewSyllable = false;
              }
              break;
            case 'u':
              if(isNewSyllable){
                wordSyllableCount++;
                isNewSyllable = false;
              }
              break;
            case 'y':
              if(isNewSyllable){
                wordSyllableCount++;
                isNewSyllable = false;
              }
              break;
            default:
              isNewSyllable = true;
          }
        }
        wordSyllableCount = (wordSyllableCount !== 0) ? wordSyllableCount : 1;  //to guarantee that all words have at least one syllable
        totalSyllableCount+=wordSyllableCount;
        isNewSyllable = true;
      }
    }
    return totalSyllableCount;
  }
}
