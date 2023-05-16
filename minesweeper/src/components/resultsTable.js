export default function getResultsTable() {
  let body = `
  <tr>
    <td></td>
    <td class='cell-results cell-header'>times</td>
    <td class='cell-results cell-header'>clicks</td>
    <td class='cell-results cell-header'>status</td>
  </tr>
`;
  for (let i = 0; i < 10; i++) {
    const chunk = `
      <tr>
        <td class='cell-number'>${i + 1}</td>
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
