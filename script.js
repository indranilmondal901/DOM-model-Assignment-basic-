//geting the <body> 
// const body = document.getElementsByTagName("body")
const body = document.body;
console.log(body)


// Get all <p> elements present in the document
const paragraph = document.getElementsByTagName("p");
console.log(paragraph);
console.log(paragraph[0]);
for (let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i]);
}

// Get the element with ID "my-div"
const div = document.getElementById("div1");
console.log(div)
