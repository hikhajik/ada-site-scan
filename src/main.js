document.getElementById('scanBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  runADAAudit(url);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  downloadADAReport();
});
