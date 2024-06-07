const arrayMap = (array, targetSum) => {
    let pointer1 = 0;

    // A sum value holding current contiguous sub array's sum for comparison with targetUm
    let currentSum = 0;
  
    // Loop through array to add elements to the currentSum unti it equals the target sum
    for (let pointer2 = 0; pointer2 < array.length; pointer2++) {
      currentSum += array[pointer2];
  
      //Subtract left most element from currentSum whenever currentSum is greater than targetSum 
      while (currentSum > targetSum && pointer1 <= pointer2) {
        currentSum -= array[pointer1];
        pointer1++;
      }
      
      //return true when currentSum equals targetSum  
      if (currentSum === targetSum) {
        return true;
      }
    }

    //return false when currentSum fails to equal targetSum at the end of array loop
    return false;
};

// Example 1
const array1 = [4, 2, 7, 1, 9, 5] // testing against targetSum = 17
console.log("Example 1", arrayMap(array1, 17)); // returns true

// Example 2
const array2 = [4, 2, 7, 4, 9, 5] // testing against targetSum = 10
console.log("Example 2", arrayMap(array2, 10)); // returns false
