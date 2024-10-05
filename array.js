// step 1 : define an array
let mixedArray = [10, "Hello", "world", 1.2, 44]; 

//Step 2: Accessing Arrays
console.log(mixedArray[0]);

console.log(mixedArray[mixedArray.length - 1]);

console.log(mixedArray[Math.floor(mixedArray.length / 2)]);

// STEP 3  Store these accessed values in separate variables.
let firstElement = mixedArray[0];
let lastElement = mixedArray[mixedArray.length - 1];
let middleElement = mixedArray[Math.floor(mixedArray.length / 2)];
console.log(firstElement);
console.log(lastElement);
console.log(middleElement);

// STEP 4 Use the .length property to determine the number IN THE ARRAY USE .push(), .pop(), .shift(),  to modify the array.

if (typeof firstElement === "number") {
  console.log("The first element is a number =>" + firstElement);
} else {
  console.log("The first element is not a number =>" + firstElement);
}

if (typeof lastElement === "number") {
  console.log("The last element is a number =>" + lastElement);
} else {
  console.log("The last element is not a number =>" + lastElement);
}
if (typeof middleElement === "number") {
  console.log("The middle element is a number =>" + middleElement);
} else {
  console.log("The middle element is not a number =>" + middleElement);
}

// .push() 
mixedArray.push("newElement");
console.log("After .push():", mixedArray);

// .pop() 
let poppedElement = mixedArray.pop();
console.log("After .pop():", mixedArray);
console.log("Popped element:", poppedElement);

// .shift() 
let shiftedElement = mixedArray.shift();
console.log("After .shift():", mixedArray);
console.log("Shifted element:", shiftedElement);

// using each 
mixedArray.forEach((element, position) => {
    console.log("Element at position" + position + ": is", element);
  });

// STEP 5 Use a loop to iterate through the array 
for (let i = 0; i < mixedArray.length; i++) {
  console.log("Element at position", i, "is", mixedArray[i]);
}

// step 6 destructuring an array
let [firstElem, secondElement] = mixedArray;
console.log("destructing an array", firstElem);
console.log("destructing an array", secondElement);
