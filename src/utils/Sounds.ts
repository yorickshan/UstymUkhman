export default class Sounds {
  private static speach: HTMLAudioElement = new Audio('public/audio/speech.mp3')
  private static close: HTMLAudioElement = new Audio('public/audio/close.mp3')
  private static open: HTMLAudioElement = new Audio('public/audio/open.mp3')
  private static closePlay: number = Date.now();

  public static playSpeach (): void {
    this.speach.onended = this.endSpeach.bind(this)
    this.speach.autoplay = false
    this.speach.loop = false
    this.speach.volume = 1
    this.speach.load()
    this.speach.play()
  }

  public static endSpeach (): void {
    if (this.speach) {
      this.speach.pause()
      delete this.speach
    }
  }

  public static openedDoor (): void {
    this.open.autoplay = true
    this.open.loop = false
    this.open.volume = 1
    this.open.load()
  }

  public static closedDoor (): void {
    const playEnd = this.closePlay ? (this.closePlay + 800) : 0
    const now = Date.now()

    if (now > playEnd) {
      this.closePlay = Date.now()
      this.close.autoplay = true
      this.close.loop = false
      this.close.volume = 1
      this.close.load()
    }
  }
}
