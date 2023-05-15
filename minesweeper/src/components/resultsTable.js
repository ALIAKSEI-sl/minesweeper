export default function getResultsTable() {
  let body = `
  <tr>
    <td class='cell-results'></td>
    <td class='cell-results'>times</td>
    <td class='cell-results'>clicks</td>
    <td class='cell-results'>status</td>
  </tr>
`;
  for (let i = 0; i < 10; i++) {
    const chunk = `
      <tr>
        <td class='cell-results'>${i + 1}</td>
        <td class='cell-results results-time'></td>
        <td class='cell-results results-click'></td>
        <td class='cell-results results-status'></td>
      </tr>
    `;
    body += chunk;
  }

  const main = `
  <table class='table-results'>
    <tbody>
    ${body}
    </tbody>
  </table>
  `;

  return main;
}
