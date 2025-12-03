
function checkDomain() {
  let d = document.getElementById("domainInput").value;
  if(!d.includes(".")){
    document.getElementById("result").innerText="Format domain tidak valid.";
    return;
  }
  let available = Math.random() > 0.5;
  document.getElementById("result").innerText =
    available ? "✔ Domain tersedia!" : "❌ Domain sudah dipakai.";
}
