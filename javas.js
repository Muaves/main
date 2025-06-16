function accessVIP() {
  const password = prompt("Pötyögd be a jelszót!:");
  if (password === "iloveyou<3") {
    window.location.href = "vip.html"; // Replace with your VIP page URL
  } else {
    alert("A jelszó helytelen! Próbáld újra.");
  }
}