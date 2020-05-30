# Geometry Calculator

Project created by [Jonathan Chuang](https://jonathanchuang.me)

## Table of Contents
* [Project Goal](https://github.com/j0nathanchuang/web_u2_geometry#project-goal)
* [Overview](https://github.com/j0nathanchuang/web_u2_geometry#overview)
* [Download Starter Files](https://github.com/j0nathanchuang/web_u2_geometry#how-to-download-start-files)
* [CodePen Alternative](https://github.com/j0nathanchuang/web_u2_geometry#dont-want-to-download-the-files)
* [Before Starting](https://github.com/j0nathanchuang/web_u2_geometry#before-starting)
* [Getting Started](https://github.com/j0nathanchuang/web_u2_geometry#getting-started)
* [Testing Your Code](https://github.com/j0nathanchuang/web_u2_geometry#testing)
* [Solution](https://github.com/j0nathanchuang/web_u2_geometry#solution)

## Project Goal
This project will serve as a bridge between JavaScript and its compatibility with HTML. In further units, you will really dive into interactivity with JavaScript but this project will explore some basic tools to allow you to see how JS can change what you see on a web page.

**Suggested prerequisites:** Completion of lessons 1,2, and 3 of unit 2

**Main concepts:** Functions, basic APIs, loops, arrays, conditionals, user input with `prompt()`, boolean logic

**Estimated time for completion:** 30 mins to 1 hour

## Overview
Your teacher needs your help! He wants to teach his students about geometry, specifically how to calculate area and volume for different shapes. He taught the concepts in class and gave out homework problems but he doesn't have time to grade everyone's homework. Instead, he wants you to create a web page where students can check their solution by typing in the homework problems and outputting the correct answers.

He has created the HTML page and CSS file but did not have time to create the corresponding JavaScript file. Can you help him out?

## How to download start files
1. Near the top right of the page, locate the "Clone or download" button. It should be bright green.
2. Click the button.
3. A mini-screen should pop up. Click "Download ZIP".
4. Open "Finder" or "File Explorer" on your desktop and drag the ZIP file to where you want to store these files.
5. Click on the ZIP files to unzip all of the files.

## Don't want to download the files?
1. Go to [CodePen](https://codepen.io/)
2. On the top left of the page, click "Start Coding"
3. From "starer_code" folder, copy & paste each files content in to the corresponding spots for HTML, CSS, and JS code on CodePen

:scream: **The images will not load using this method**

## Before starting
### HTML
If you've checked out the HTML code, you'll notice some things that we have yet to cover in our lessons: id/name tags & events.

**Tags:**
```
//TODO
```

**Events:**
```
//TODO
```

### JavaScript
JavaScript is used to interact with the HTML code. Here are important APIs you will have to use to complete the project:
* `document.getElementById("idName")` returns an object with that id 
* `document.getElementsByName("name")` returns an array of all the objects with the same name tag
* `.innerHTML` use this to modify the text on the web page

**Example:**
```
//Store object in variable and modify HTML separately
var temp = document.getElementById('id'); 
temp.innerHTML = "Changed text";

//Don't store object, modify directly
document.getElementById('id').innerHTML = "Changed text";

//Concatenate string to existing string
document.getElementById('id').innerHTML += "Add text";

//Store array of name tags & modify 3rd element's innerHTML
var array = document.getElementsByName('name');
array[2].innerHTML = "Changed text";

//Almost exact same process for names
document.getElementsByName('name')[0].innerHTML = "Changed text"; //Remember it is an array so you need to index
```
**Tip:** Remember to get the capitalization and spelling correct when using these APIs or else your code won't work.

## Getting started
* Get familiar with the HTML and CSS code
* Locate the id tags & name tags
* Get familiar with all of the function descriptions in `main.js`, each one tells you what the function needs to do
* The `power()` function is already implemented, the reason is that we want you to get familiar with reusing functions that you implemented in other functions
* Your job is to implement the 9 incompleted functions in `main.js` 

The end goal is a fully functional web page where the user can work out all of his geometry homework problems correctly. Good luck!

## Testing
A good practice is to test frequently and to test small. What that means is that don't write too much code before testing if it works. For this project, I recommend writing one function at a time and testing it if it works with your own input. When you write the next function, make sure the new function and previous functions are all working, not just the new one.

**Pro Tip:** Use `console.log()` if you're having trouble figuring out the error. Sometimes your error is simply a spelling error - so save time debugging with `console.log()`.

### Test cases
You can and should come up with your own test cases! This is a sample test that may not catch all possible bugs.
1. Square 2 - correct: 4
2. Rectangle 2, 4 - correct: 8
3. Circle 3 - correct: 28.27...
4. Triangle 3, 2 - correct: 3
5. Cube 2 - correct: 8
6. Cylinder 3, 3 - correct: 84.82...
7. Sphere 2 - correct: 33.51...
8. Cone 2, 2 - correct: 8.37...
9. Fix headings - just click the button to test

## Solution
The solution can be found in the solution folder. Keep in mind that there are many different ways to implement each function so as long as yours works it's correct! To use the answer key, locate the script tag in `index.html` and read the comment on how to change which script to use.
