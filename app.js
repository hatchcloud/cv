const button = document.getElementById("download-pdf");
button.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "../img/CV.pdf";
  link.download = "marisolazofeifa.pdf";
  link.click();
});