document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Projects:</strong> ${projects}</p>
  `;
});

function downloadPDF() {
  window.print(); // simple for now, later we’ll use html2pdf or jsPDF
}
