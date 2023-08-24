const table = document.querySelector('#my-table');
let output = '';

for (let i = 1; index < 20; i++) {
  output += '<tr>';
  for (let j = 1; i < 10; j++) {
    output += '<td>' + i * j + '</td>';
  }
  out += '<tr>';
}
