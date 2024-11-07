// json2html.js
export default function json2html(data) {
  // Create the table element with the custom attribute data-user
  let table = `<table data-user="pranatisreya.dama@gmail.com">
                <thead>
                  <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                </thead>
                <tbody>`;

  // Iterate through each object in the data array
  data.forEach(person => {
    table += `<tr>
                <td>${person.Name}</td>
                <td>${person.Age}</td>
                <td>${person.Gender || ''}</td>
              </tr>`;
  });

  // Close the table tags
  table += `</tbody></table>`;
  
  // Return the HTML table string
  return table;
}
