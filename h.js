//defer attribute = its a boolean attribute
// if the defer attribute is set it specifies that the script is downloaded in parallel
//to parsing the page, and executed after the page has finished parsing
// the defer attribute is only for external scripst

// also there are several ways an external script can be executed
//if async is present the script is downloaded in parallel to parsing the page,
//defer is present and not async execution happens afetr the page has finished parsing


// if neither defer or async is present the script is downloaded and executed immediately
// blocking parsing until the script is completed




const cel = document.querySelector("#cel"),
      fah = document.querySelector("#fah");

//queryselector() and querySelectorAll()
//both returns syntax_err if the selector s is invalis



//lets set the focus to celsius input field when the page loads
window.addEventListener("load", () => cel.focus());


//lets convert the celsius value to fahrnheit when the celsius value changes

cel.addEventListener("input", () =>{
    fah.value =((cel.value *9)/5 + 32).toFixed(2);
    /// toFixed(2) rounded off the number to two decimal splaces

//when the celsius value is not written on the display then the
//fahrenheit value should always show an empty window
    if(!cel.value) fah.value ="";
});

//also in the same code we can convert the fahrenheit value to celsiuis when the 
// fehrenheit value changes

fah.addEventListener("input", () => {
    cel.value = (((fah.value - 32) *5) /9).toFixed(2);

    // clear celsius input when the fahrenheit value is empty


    if(!fah.value) cel.value ="";
});

//toFixed() method converts a number to a string
/// then rounds the stirng to a specific number of decimals