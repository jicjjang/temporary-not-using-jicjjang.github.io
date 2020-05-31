class speech {
  constructor() {}

  private isSupportedSpeech() {
    if (typeof SpeechSynthesisUtterance === 'undefined' || typeof speechSynthesis === 'undefined') {
      console.error('This browser does not support speech API');
      return false;
    }
    return true;
  }

  public sendMessage(text, voiceIndex = 0) {
    if (this.isSupportedSpeech()) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      const message = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();

      message.voice = voices[voiceIndex];
      speechSynthesis.speak(message);
    }
  }

  public stopSpeech() {
    if (this.isSupportedSpeech() && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }
}

export default new speech();
