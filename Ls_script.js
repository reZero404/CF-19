document.getElementById("bizForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("businessName").value.trim();
    const type = document.getElementById("businessType").value.trim();
    const desc = document.getElementById("businessDescription").value.trim();
  
    // Update UI
    document.getElementById("flyerTitle").innerText = name;
    document.getElementById("socialHandle").innerText = `@${name.replace(/\s+/g, "").toLowerCase()}`;
    document.getElementById("pitchTitle").innerText = `${name}:`;
  
    // Simulated AI Output
    document.getElementById("flyerContent").innerHTML = `
      <strong>${name}</strong> - Your Local ${type}!<br>
      ${desc}<br>
      <b>Exclusive deals this weekend! Visit us now.</b>
    `;
  
    document.getElementById("socialTagline").innerText = `#${type.replace(/\s+/g, "")}`;
    document.getElementById("socialContent").innerHTML = `
      🌟 Discover ${name} — your neighborhood's trusted ${type}.<br>
      ${desc}<br>
      #${type} #${name.replace(/\s+/g, "")} #SupportLocal
    `;
  
    document.getElementById("pitchTagline").innerText = `Your trusted ${type}`;
    document.getElementById("pitchContent").innerHTML = `
      ${name} is a premier ${type} focused on delivering excellent services to the community.
      ${desc} Our goal is to provide unmatched quality with a personal touch.
    `;
  });
  
