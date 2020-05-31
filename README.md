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
* [Error Checking](https://github.com/j0nathanchuang/web_u2_geometry#error-checking)
* [Solution](https://github.com/j0nathanchuang/web_u2_geometry#solution)

## Project Goal
This project will serve as a bridge between JavaScript and its compatibility with HTML. In further units, you will really dive into interactivity with JavaScript but this project will explore some basic tools to allow you to see how JS can change what you see on a web page. The main purpose is for you to be able to apply what you've learned so far and see tangible results.

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
3. From "starter_code" folder, copy & paste each files content in to the corresponding spots for HTML, CSS, and JS code on CodePen

:scream: **The images will not load using this method**

## Before starting
### Text Editor
If you've chosen CodePen in the previous step, you may ignore this section.

To actually edit the code, you will need to use a text editor. If you already have a text editor or IDE downloaded, you may use that, or if you are comfortable editing from vim or gedit in your terminal that works too.

If not, here are some suggestions:
* [CodePen](https://codepen.io/) - You can just edit your code on this if you don't want to download a text editor
* [Atom](https://atom.io/) - This is my favorite text editor, it has really nice themes and built-in [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting)
* [VSCode](https://code.visualstudio.com/download) - This is an IDE for Windows, Mac, and Linux systems. If you're planning on using code that requires a compiler in the future, this would be a good option. 

### HTML
If you've checked out the HTML code, you'll notice some things that we have yet to cover in our lessons: id/name tags & events.

**Tags:**
```
<!--id/name tags come after HTML tags-->
<p id="paragraph" name="text">This is a paragraph.</p>
```
The main difference between an id tag and a name tag is the amount of them in your file. The convention is that you use an id tag if you want that object to be unique to everything else. Think about it as a ID number, you don't want someone else sharing the same ID number as you or else how would you be able to identify yourself? Name tags are used when you want multiple objects to share the same tag. In this case, think about an online store selling Apple products and Android products. If a customer only wants Apple products, he should be able to browse the store based on its name "Apple". An iPad and an iPhone may be different products but they're under the same company name "Apple".

In short, id tag means one unique object and name tags mean an array of objects.

**Events:**
```
<!--There are hundreds of events but we only use onclick in our project-->
<button onclick="doSomething()">Button!</button>
```
Events also come after HTML tags. Events are different actions that the user may do when he/she is on your web page. In this instance, if the user clicks on the button, the function `doSomething()` will run.  

### JavaScript
JavaScript is used to interact with the HTML code. Id/name tags are used so your JavaScript code knows which element(s) you are referring to. Here are important APIs that locate these tags that you will have to use to complete the project:
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
* Don't change any of the HTML/CSS files until you finish correctly implementing `main.js`, you may tinker with these files after and try to make the web page do more things or look better!
* Get familiar with all of the function descriptions in `main.js`, each one tells you what the function needs to do
* The `power()` function is already implemented, the reason is that we want you to get familiar with reusing functions that you implemented in other functions
* Your job is to implement the 9 incompleted functions in `main.js` - each function will require usage of at least one of the APIs mentioned above
* For the 8 functions that calculate area or volume, keep in mind that the user should be able to keep using the same shape and get the correct result in the corret place each time. **Example:** If the user wants to use the square function 10 times, all 10 times should be correct and it should not affect the rectangle section of the web page.

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

## Error checking
Once you've finished testing and everything seems to be correct, try this input: what happens when you click on "Calculate Square" and you type in "Pizza" in the prompt? If your result is "The area is: NaN", you've one more step before finishing.

We want to constrain the user to only be able to type in numbers into the prompt so our functions work as they're intended. Thus we need to use JavaScript's built-in `isNaN()` method. 
```
//Usage: isNaN(value);
//NaN stands for not a number
isNaN(19); //returns true
isNaN("hello"); //returns false
```
Use `isNaN()` in each of your area/volume functions to ensure that the user only inputs numbers and will be prompted to re-input if the user continuously inputs words 

## Solution
The solution can be found in the solution folder. Keep in mind that there are many different ways to implement each function so as long as yours works it's correct! To use the answer key, locate the script tag in `index.html` and read the comment on how to change which script to use.
