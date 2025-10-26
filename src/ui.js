function updateADAReportUI(results) {
  const container = document.getElementById('results');
  container.innerHTML = `
    <h3>Audit Results</h3>
    <p>Website: ${results.site}</p>
    <ul>
      <li>Critical: ${results.critical}</li>
      <li>Major: ${results.major}</li>
      <li>Minor: ${results.minor}</li>
    </ul>
    <p>${results.summary}</p>
  `;
}
