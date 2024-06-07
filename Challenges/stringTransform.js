const transformString = (inputString) => {
    const length = inputString.length;
  
    // Reverse string and replace characters by ASCII code when length is divisible by 3 and 5 
    if (length % 15 === 0) {
      inputString = inputString.split('').reverse().join('');
      inputString = inputString.split('').map(char => char.charCodeAt(0)).join(' ');
      return inputString;
    }
  
    // Check if length is divisible by 3 and reverse string
    if (length % 3 === 0) {
      return inputString.split('').reverse().join('');
    }
  
    // Check if length is divisible by 5 and replace characters with ASCIIcode
    if (length % 5 === 0) {
      return inputString.split('').map(char => char.charCodeAt(0)).join(' ');
    }
  
    // Return the inputString unchanged if none of the conditions are met
    return inputString;
  }
  
  // Examples
  console.log("Hamburger returns:", transformString("Hamburger")); 
  console.log("Pizza returns:", transformString("Pizza")); 
  console.log("Chocolate Chip Cookie returns:", transformString("Chocolate Chip Cookie")); 
  console.log("FifteenCharacters returns:", transformString("FifteenCharacters")); 
  