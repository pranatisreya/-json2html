// json2html.js
export default function json2html(data) {
  // Start the table with the data-user attribute
  let html = '<table data-user="pranatisreya.dama@gmail.com">';
  
  // Create the table header
  html += '<thead><tr>';
  // Check for the columns: Name, Age, Gender
  if (data.length > 0) {
    for (let key in data[0]) {
      html += `<th>${key}</th>`;
    }
  }
  html += '</tr></thead><tbody>';
  
  // Add rows for each object in the data array
  data.forEach(row => {
    html += '<tr>';
    for (let key in row) {
      html += `<td>${row[key]}</td>`;
    }
    html += '</tr>';
  });
  
  // Close the table and return the HTML string
  html += '</tbody></table>';
  
  return html;
}
