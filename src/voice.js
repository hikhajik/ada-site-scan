function announceADA(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speech.pitch = 1;
  speech.rate = 1;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}
