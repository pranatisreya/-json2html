export default function json2html(data) {
    // Start with the table tag, adding the data-user attribute
    let html = `<table data-user="pranatisreya.dama@gmail.com">
                    <thead>
                        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                    </thead>
                    <tbody>`;

    // Loop through the data array and create table rows
    data.forEach(item => {
        html += '<tr>';
        html += `<td>${item.Name}</td>`;
        html += `<td>${item.Age}</td>`;
        // Ensure 'Gender' field exists before adding it
        if (item.Gender) {
            html += `<td>${item.Gender}</td>`;
        }
        html += '</tr>';
    });

    // Close the table
    html += '</tbody></table>';
    
    return html;
}
