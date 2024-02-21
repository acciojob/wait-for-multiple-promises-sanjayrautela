//your JS code here. If required.
// Create an array of Promises
const promises = [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 1');
    }, Math.random() * 2000 + 1000); // Random time between 1 and 3 seconds
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 2');
    }, Math.random() * 2000 + 1000); // Random time between 1 and 3 seconds
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 3');
    }, Math.random() * 2000 + 1000); // Random time between 1 and 3 seconds
  }),
];

// Display loading text
const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', '2');
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
document.getElementById('output').appendChild(loadingRow);

// Wait for all Promises to resolve
Promise.all(promises)
  .then((results) => {
    // Remove loading text
    document.getElementById('output').removeChild(loadingRow);

    // Populate the table with the results
    results.forEach((result, index) => {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
      cell1.textContent = `Promise ${index + 1}`;
      cell2.textContent = `${(Math.random() * 2 + 1).toFixed(3)}`; // Random time between 1 and 3 seconds
      row.appendChild(cell1);
      row.appendChild(cell2);
      document.getElementById('output').appendChild(row);
    });

    // Calculate and display the total time taken
    const totalTime = results.reduce((acc, curr) => acc + curr, 0);
    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');
    totalCell1.textContent = 'Total';
    totalCell2.textContent = `${totalTime.toFixed(3)}`;
    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    document.getElementById('output').appendChild(totalRow);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

