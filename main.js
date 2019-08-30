// Lightening Exercise
// 1. Using this url, fetch data related to NASA’s picture of the day.
// 2. Display the returned object in the console.
// 3. Write a template function that will return a DOM component with the 
//image, date, explanation, title, and copyright. Remember to use semantic HTML.
// 4. Write a function that will display the component on the DOM.

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY



   // Demo Key: KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx

   // template 
   const nasaFunction = (item) => {
    return` 
            <img src="${item.url}" alt="Nasa image">
            <p>${item.date}</p>
            <p>${item.explanation}</p>
            <p>${item.title}</p>
            <p>${item.copyright}</p>
        
       `
}
// print to DOM
const nasaContainer = document.querySelector(".container");

function printToDomFunction(htmlString) {
    nasaContainer.innerHTML += htmlString;
}

fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(nasa => nasa.json())
    .then(parsedNasa => {
        printToDomFunction(nasaFunction(parsedNasa));
        console.table(parsedNasa)
    })