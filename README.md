# Taskforce Pro Edition Challenge's Solutions

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation and Set up](#installation-and-set-up)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [The Interactive Photo Gallery](#the-interactive-photo-gallery)
    - [How to open the interactive photo gallery website](#how-to-open-the-interactive-photo-gallery-website)
    - [The approach on building the interactive photo gallery](#the-approach-on-building-the-interactive-photo-gallery)
- [The Javascript Coding Challenges](#the-javascript-coding-challenges)
    - [How to run the two javascript coding challenges](#how-to-run-the-two-javascript-coding-challenges)
    - [Array Manipulation Challenge: My approach on solving it](#array-manipulation-challenge-my-approach-on-solving-it)
    - [String Transformation Challenge: My approach on solving it](#string-transformation-challenge-my-approach-on-solving-it)  

## Description

This repository contains solved challenges for the Code of Africa Taskforce Pro Edition. It contains an interactive photo gallery and solutions to two javascript coding challenges.

## Installation and Set up

### Prerequisites

- Node.js for running the javascript coding challenges: You can download and install the latest version [here](https://nodejs.org/en/download)

### Setup

- To get started, clone the repository to your local machine and navigate into the repository directory.

```bash
git clone https://github.com/hervebutera/taskforceProChallenge.git
cd taskforceProChallange
```

## The Interactive Photo Gallery 

### How to open the interactive photo gallery website

You can find the GitHub pages hosted version on this [link](https://hervebutera.github.io/taskforceProChallenge/Interactive_gallery/)

Or open it from your local repository following the steps below:

From the root directory of the repository `taskforceProChallenge`, 

- For windows users, open the `Interactive_gallery` directory in `File explorer` by running the command: 
```bash
 explorer Interactive_gallery
``` 

- For Mac Os users, open the `Interactive_gallery` directory in `Finder` by running the command: 
```bash
 open Interactive_gallery
```

- In the File explorer app or Finder app, double click and run the `index.html`.

### The approach on building the interactive photo gallery

- I began by creating the folder structure that includes styles folder, javascript folder, 
images folder, and fonts folder all under the `Interactive_gallery` folder.

- I then created the html structure for the website, where I added all html elements
with their specific classes and ids.

- I then added the CSS styles for the classes of the html elements in a separate CSS file 
and styling for mobile first then later for desktop devices.

- Later using javascript, I created an array of objects of images and their respective data (name, location). 

- I then passed the images data to html elements and appended the html elements into the gallery 
container grid's innerHTML using javascript.

## The Javascript Coding Challenges

### How to run the two javascript coding challenges

From the root directory of the repository `taskforceProChallenge`, 

- Navigate to the `Challenges` directory by running the command:
```bash
 cd Challenges
```

- In the Challenges directory, run any of the challenges javascript files 
using the command `node fileName.js`. Example: `node arrayMap.js`

### Array Manipulation Challenge: My approach on solving it

- The function initializes a sum variable `currentSum = 0`. 
This currentSum will hold the contagious sub-array's sum during each iteration. 

- Then a first loop is created to iterate through the array starting from the left 
adding the array element to the `currentSum`.

- After adding the array element to the `currentSum`, the function checks if 
`currentSum equals targetSum` to return `true`.

- If `currentSum doesn't equal the targetSum`, another second loop starts 
from the start of the array subtracting the array element if 
`currentSum is greater than targetSum` and 
`array index of second loop is less than or equals array index of first loop`.

- The first loop continues until the end of the array without having a 
currentSum that equals targetSum and then returns `false`.

### String Transformation Challenge: My approach on solving it

- A function `stringTransform` with a parameter `inputString` is created.


`Condition 1: `

- The function checks if inputStrings'length `length` is divisible by both 3 
and 5 i.e `if length % 15 === 0`.

- If true, the inputString is split into characters, a new array of characters is then reversed,
and then the reversed array's elements joined together into a reversed string .

- The reversed inputString is then split into characters, then using `Array.map()`, 
each character is transformed into its corresponding ASCII code. Then the ASCII codes are joined into a string.

- The string of ASCII codes of the reversed string is then returned.


`Condition 2: `

- The function checks if inputString's length `length` is divisible by only 3
i.e `if length % 3 === 0`.

- If true, the inputString is split into characters, the array of characters is then reversed,
and the reversed array's elements joined together into a reversed string.

- The reversed string is then returned.


`Condition 3: `

- The function checks if inputString's length `length` is divisible by only 5
i.e `if length % 5 === 0`

-If true, the inputString is split into characters, then using `Array.map()` each character is
transformed into its corresponding ASCII code, and then the ASCII code joined together into a string.

- The string of ASCII codes is then returned.


`Condition 4: `

- If the inputString's length doesn't meet any of the above conditions, the initial unchanged
input string is returned.
