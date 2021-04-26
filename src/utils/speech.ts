class Speech {
  constructor() {}

  private isSupportedSpeech() {
    if (typeof SpeechSynthesisUtterance === 'undefined' || typeof speechSynthesis === 'undefined') {
      console.error('This browser does not support speech API');
      return false;
    }

    window.onbeforeunload = () => this.stopSpeech();

    return true;
  }

  public sendMessage(text, voiceIndex = 0) {
    if (this.isSupportedSpeech()) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      const message = new SpeechSynthesisUtterance(text);
      message.rate = 1;
      const voices = speechSynthesis.getVoices();

      message.voice = voices[voiceIndex];
      speechSynthesis.speak(message);
    }
  }

  public sendContentsMessage() {
    const postArticleElement = document.querySelector('.post_article') as HTMLElement;
    if (postArticleElement?.innerText) {
      this.sendMessage(postArticleElement?.innerText);
    }
  }

  public stopSpeech() {
    if (this.isSupportedSpeech() && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }
}

export default new Speech();
