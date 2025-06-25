const container = document.getElementById('container');

function showWelcome() {
  container.innerHTML = '<h1 class="fade-in">Hlww,  just a little surprise for you 💌</h1>';
  setTimeout(showKissGif, 3000);
}

function showKissGif() {
  container.innerHTML = '<img src="kiss.gif" alt="Kiss" class="fade-in" />';
  setTimeout(showBirthdayWish, 3000);
}

function showBirthdayWish() {
  container.innerHTML = `
    <h1 class="fade-in">Happy Birthday Meri jaan😘🎉🎂</h1>
    <img src="balloon.png" alt="Balloon" class="balloon" />
    <br><br>
    <div id="buttonWrapper" style="position: relative; width: 100%; height: 120px;">
      <button id="runawayBtn" class="fade-in" style="position: absolute;">okayy😒</button>
    </div>
    <br>
    <button class="fade-in" onclick="showNotes()">Thankk uhh sir jii😘❤️</button>
  `;

  const btn = document.getElementById('runawayBtn');
  const wrapper = document.getElementById('buttonWrapper');

  btn.addEventListener('mouseover', () => {
    const maxX = wrapper.clientWidth - btn.clientWidth;
    const maxY = wrapper.clientHeight - btn.clientHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
  });

 btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Bahut dimag chalati hainn😁");
  });
}

function showNotes() {
  container.innerHTML = `
    <h2 class="fade-in">Here are some letters for you 💕</h2>
    <div id="textFileButtons">
      <button onclick="openText('texts/letter1.txt')">Birthday wishes</button>
      <button onclick="openText('texts/letter2.txt')">First letter</button>
      <button onclick="openText('texts/letter3.txt')">maybe second</button>
      <button onclick="openText('texts/letter4.txt')">special</button>
      <button onclick="openText('texts/letter5.txt')">Bye</button>
      
    </div>
    <pre id="textDisplay"></pre>
    <h2>Likh dijiye apne dil ki baat😉💌</h2>
    <form id="replyForm">
      <textarea id="replyBox" name="message" placeholder="Type your reply here..." required></textarea><br>
      <button type="submit">Send to Him ❤️</button>
    </form>
  `;

  document.getElementById('replyForm').addEventListener('submit', sendReply);
}

function openText(path) {
  fetch(path)
    .then(res => res.text())
    .then(text => {
      document.getElementById('textDisplay').textContent = text;
    });
}

function sendReply(e) {
  e.preventDefault();
  const message = document.getElementById('replyBox').value.trim();
  if (!message) {
    alert("pahle likh to lo kuch madam jii😁");
    return;
  }

  fetch("https://formspree.io/f/xeokldnz", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
  .then(res => {
    if (res.ok) {
      alert("Thank uhh for ur reply madaam jii 😘💕");

      document.getElementById('replyBox').value = '';
    } else {
      alert("Oops! Something went wrong.");
    }
  });
}

window.onload = showWelcome;


let countdownEnded = false;

function updateCountdown() {
  const countdownEl = document.getElementById("countdown");
  const targetDate = new Date("2025-07-15T00:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0 && !countdownEnded) {
    countdownEnded = true;
    countdownEl.innerText = "🎉 It's the special day!";
    
    
    setTimeout(() => {
      alert("🎊 Surprise! happy Birthdayy madam jii💖\nI hope your birthday is as magical as you are ✨");
    }, 500);
    
    return;
  }

  if (!countdownEnded) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `Surprise in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();



