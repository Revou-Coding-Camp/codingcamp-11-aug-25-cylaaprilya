function welcomespeech() {
  let nama = prompt("Masukkan nama kamu:");
  if (nama && nama.trim() !== "") {
    document.getElementById("welcome-user").textContent = nama;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  welcomespeech();
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("data-target");
      const section = document.getElementById(targetId);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

    const messageForm = document.getElementById('message-form');
    const messageDisplayBox = document.getElementById('message-display-box');
    const displayName = document.getElementById('display-name');
    const displayDob = document.getElementById('display-dob');
    const displayGender = document.getElementById('display-gender');
    const displayMessage = document.getElementById('display-message');

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Tidak disebutkan';
        const message = document.getElementById('message').value;

        displayName.textContent = name;
        displayDob.textContent = dob;
        displayGender.textContent = gender;
        displayMessage.textContent = message;

        messageDisplayBox.classList.remove('hidden');

        messageForm.reset();
    });
