function rot13(str) {
    return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
  }
  
  rot13("SERR PBQR PNZC");