function countdown() {
  
  const bigDay = new Date("December 19, 2025 00:00:00").getTime();
  const now = new Date().getTime();

  const diff = bigDay - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "ðŸŽ‰ The Big Day is here!";
    clearInterval(timer); // stop the countdown
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    `${days}  ${hours}  ${minutes}  ${seconds}  `;


}

const timer = setInterval(countdown, 1000);
countdown(); // run immediately