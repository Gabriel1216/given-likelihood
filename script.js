function spinWheel() {
  const wheel = document.querySelector('.wheel');
  let deg = Math.floor(5000 + Math.random() * 5000);
  wheel.style.transform = `rotate(${deg}deg)`;
}

