// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
data.forEach((UFOentry) => {
    var row = tbody.append("tr");
    Object.entries(UFOentry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();





  
  // Select the input element and get the raw HTML node
 
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");
  var inputElement1 = d3.select("#datetime");

  // Get the value property of the input element
  

  var input, table, tr, td, cell, i, j;

  var filter2 = inputElement2.property("value");
  var filter3 = inputElement3.property("value");
  var filter4 = inputElement4.property("value");
  var filter5 = inputElement5.property("value");
  var filter1 = inputElement1.property("value");

  var filteredData = data
  if (filter1 !== ""){
    var filteredData = filteredData.filter(data => data.datetime === filter1);}
  if (filter2 !== ""){
    var filteredData = filteredData.filter(data => data.city === filter2);}
  if (filter3 !== ""){
    var filteredData = filteredData.filter(data => data.state === filter3);}
  if (filter4 !== ""){
    var filteredData = filteredData.filter(data => data.country === filter4);}
  if (filter5 !== ""){
    var filteredData = filteredData.filter(data => data.shape === filter5);}
  console.log(filteredData)
  

  const tableEl = document.getElementById('ufo-table');

  const tableBodyEl = tableEl.querySelector('tbody');

  while (tableBodyEl.lastElementChild) {
    tableBodyEl.removeChild(tableBodyEl.lastElementChild);
}
  
  filteredData.forEach((UFOentry) => {
    var row = tbody.append("tr");
    Object.entries(UFOentry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


};

