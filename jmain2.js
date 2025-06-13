    function showquote() {
   return fetch('https://dummyjson.com/quotes/random').then(res =>res.json())
    .then(ResponseDATA => {
    const quote = ResponseDATA.quote;
    const author = ResponseDATA.author;
    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = author;
})
.catch((error) => {
    console.error("Error fetching quote:", error); 
    document.getElementById('quote').textContent = "Failed to load quote.";	
    document.getElementById('author').textContent = "";
});

}

showquote(); // Call the function to show a quote on page load 
document.getElementById('show-quote').addEventListener('click', showquote);