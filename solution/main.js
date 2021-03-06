/*
 * HARDEST FUNCTION
 * Purpose: The headings got all mixed up, it would be easier to just write
 *          a function to fix this, instead of changing the HTML code. (Not
 *          really but for the purpose of learning, run with it)
 */
function fixHeadings() {
  //HINT: Use the API that can get all of the name tags

  //Get all of the errors and store into array
  var errors = document.getElementsByName("error");
  //Loop through errors
  for (var i = 0; i < errors.length; i++) {
    //if it currently says area, change to volume
    if (errors[i].innerHTML == "Area Calculator") {
      errors[i].innerHTML = "Volume Calculator";
    }
    //else - it currently says volume, change to area
    else {
      errors[i].innerHTML = "Area Calculator";
    }
  }
}

/*
 * Purpose: Since we have yet to reach JavaScript's built-in functions, use this
 *          "self-written" power function
 */
function power(x, y) {
  return Math.pow(x, y);
}

/*
 * Purpose: Prompt the user for the side length, calculate the area, and
 *          change the text from "The area is: " to "The area is: [area]"
 */
function square() {
  //Reset innerHTML to ensure reusability
  document.getElementById("squareAns").innerHTML = "The area is: ";
  //Prompt user for side length
  var side = prompt("Enter side length: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(side)) {     //We use a while loop because the user could keep doing this
    side = prompt("Please enter a number. Enter side length: ");
  }
  //Calculate area - use power function
  var area = power(side, 2);
  //Change innerHTML
  document.getElementById("squareAns").innerHTML += area;
}

/*
 * Purpose: Prompt the user for the both side lengths, calculate the area, and
 *          change the text from "The area is: " to "The area is: [area]"
 */
function rectangle() {
  //Reset innerHTML to ensure reusability
  document.getElementById("rectAns").innerHTML = "The area is: ";
  //Prompt user for 1st side length
  var side1 = prompt("Enter 1st side length: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(side1)) {
    side1 = prompt("Please enter a number. Enter 1st side length: ");
  }
  //Prompt user for 2nd side length
  var side2 = prompt("Enter 2nd side length: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(side2)) {
    side2 = prompt("Please enter a number. Enter 2nd side length: ");
  }
  //Calculate area
  var area = side1 * side2;
  //Change innerHTML
  document.getElementById("rectAns").innerHTML += area;
}

/*
 * Purpose: Prompt the user for the radius, calculate the area, and
 *          change the text from "The area is: " to "The area is: [area]"
 * Tip: Use Math.PI for pi
 */
function circle() {
  //Reset innerHTML to ensure reusability
  document.getElementById("circAns").innerHTML = "The area is: ";
  //Prompt user for radius
  var radius = prompt("Enter radius: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(radius)) {
    radius = prompt("Please enter a number. Enter radius: ");
  }
  //Calculate area - use power function
  var area = Math.PI * power(radius, 2);
  //Change innerHTML
  document.getElementById("circAns").innerHTML += area;
}

/*
 * Purpose: Prompt the user for the base & height, calculate the area,
 *          and change the text from "The area is: " to "The area is: [area]"
 */
function triangle() {
  //Reset innerHTML to ensure reusability
  document.getElementById("triAns").innerHTML = "The area is: ";
  //Prompt user for base
  var base = prompt("Enter base: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(base)) {
    base = prompt("Please enter a number. Enter base: ");
  }
  //Prompt user for height
  var height = prompt("Enter height: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(height)) {
    height = prompt("Please enter a number. Enter height: ");
  }
  //Calculate area
  var area = base * height;
  //Change innerHTML
  document.getElementById("triAns").innerHTML += area;
}

/*
 * Purpose: Prompt the user for the side length, calculate the volume, and
 *          change the text from "The volume is: " to "The volume is: [volume]"
 */
function cube() {
  //Reset innerHTML to ensure reusability
  document.getElementById("cubeAns").innerHTML = "The volume is: ";
  //Prompt user for side length
  var side = prompt("Enter side length: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(side)) {
    side = prompt("Please enter a number. Enter side length: ");
  }
  //Calculate volume - use power function
  var volume = power(side, 3);
  //Change innerHTML
  document.getElementById("cubeAns").innerHTML += volume;
}

/*
 * Purpose: Prompt the user for the radius & height, calculate the volume, and
 *          change the text from "The volume is: " to "The volume is: [volume]"
 * Tip: Use Math.PI for pi
 */
function cylinder() {
  //Reset innerHTML to ensure reusability
  document.getElementById("cylAns").innerHTML = "The volume is: ";
  //Prompt user for radius
  var radius = prompt("Enter radius: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(radius)) {
    radius = prompt("Please enter a number. Enter radius: ");
  }
  //Prompt user for height
  var height = prompt("Enter height: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(height)) {
    height = prompt("Please enter a number. Enter height: ");
  }
  //Calculate volume - use power function
  var volume = Math.PI * power(radius, 2) * height;
  //Change innerHTML
  document.getElementById("cylAns").innerHTML += volume;
}

/*
 * Purpose: Prompt the user for the radius, calculate the volume, and
 *          change the text from "The volume is: " to "The volume is: [volume]"
 * Tip: Use Math.PI for pi
 */
function sphere() {
  //Reset innerHTML to ensure reusability
  document.getElementById("sphereAns").innerHTML = "The volume is: ";
  //Prompt user for radius
  var radius = prompt("Enter radius: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(radius)) {
    radius = prompt("Please enter a number. Enter radius: ");
  }
  //Calculate volume - use power function
  var volume = (4 / 3) * Math.PI * power(radius, 3);
  //Change innerHTML
  document.getElementById("sphereAns").innerHTML += volume;
}

/*
 * Purpose: Prompt the user for the radius & height, calculate the volume, and
 *          change the text from "The volume is: " to "The volume is: [volume]"
 * Tip: Use Math.PI for pi
 */
function cone() {
  //Reset innerHTML to ensure reusability
  document.getElementById("coneAns").innerHTML = "The volume is: ";
  //Prompt user for radius
  var radius = prompt("Enter radius: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(radius)) {
    radius = prompt("Please enter a number. Enter radius: ");
  }
  //Prompt user for height
  var height = prompt("Enter height: ");
  //If user inputs text instead of a number, prompt user again
  while (isNaN(height)) {
    height = prompt("Please enter a number. Enter height: ");
  }
  //Calculate volume - use power function
  var volume = (1 / 3) * Math.PI * power(radius, 2) * height;
  //Change innerHTML
  document.getElementById("coneAns").innerHTML += volume;
}
