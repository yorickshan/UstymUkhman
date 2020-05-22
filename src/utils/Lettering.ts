export default class Lettering {
  private readonly letters: HTMLElement[] = []
  private lastLetter: HTMLElement | undefined
  private callback: Function | undefined

  private readonly timeout: number = 1000
  private readonly message: HTMLElement
  private readonly slowly: number = 0

  private last: HTMLElement | null
  private nextTiming: number = 0
  private word: string[] = []
  private index: number = 0
  private frame: number = 0

  constructor (message: HTMLElement, slowTyping?: number, timeout?: number) {
    this.timeout = timeout || 1000
    this.slowly = slowTyping || 0
    this.message = message
    this.last = null
  }

  public animate (callback: Function | undefined): HTMLElement[] | void {
    if (this.message && this.message.textContent) {
      this.word = this.message.textContent?.split('')
    }

    if (this.word && this.word.length) {
      this.callback = callback
      this.getLetters()

      while (this.message.firstChild) {
        this.message.removeChild(this.message.firstChild)
      }

      this.lastLetter = this.letters[this.letters.length - 1]
      this.lettersAnimation()
      return this.letters
    }
  }

  private getLetters (): void {
    this.word.forEach((char) => {
      if (char === '#') {
        return this.letters.push(document.createElement('br'))
      }

      const letter = document.createElement('span')
      letter.textContent = char

      if (char === '%') {
        letter.style.marginLeft = '50px'
        letter.textContent = ''
      }

      this.letters.push(letter)
    })
  }

  private lettersAnimation (): void {
    if (!this.letters[this.index]) return
    const typeLetter = Date.now() >= this.nextTiming

    if (!this.slowly || (this.slowly && typeLetter)) {
      this.showLetter(this.letters[this.index++])
      this.nextTiming = Date.now() + this.slowly
    }

    if (this.last === this.lastLetter) {
      this.stopLettering()

      if (this.callback) {
        setTimeout(this.callback, this.timeout)
      }

      return
    }

    this.frame = requestAnimationFrame(this.lettersAnimation.bind(this))
  }

  private showLetter (letter: HTMLElement): void {
    const delay = `${this.getAnimationDelay()}ms`

    letter.style.transitionDelay = delay
    letter.style.visibility = 'visible'
    letter.classList.add('lettering')
    this.message.appendChild(letter)
    this.last = letter
  }

  private getAnimationDelay (): number {
    return Math.floor(Math.random() * 2001)
  }

  private stopLettering (): void {
    cancelAnimationFrame(this.frame)
  }

  public skipLettering (): void {
    if (!this.letters) return
    this.stopLettering()

    for (let i = this.index; i < this.letters.length;) {
      this.showLetter(this.letters[i])
      this.index = ++i
    }

    if (this.callback) setTimeout(this.callback)
  }

  public disposeAll (words: HTMLElement[][]): void {
    for (const w in words) {
      for (const l in words[w]) {
        words[w][l].classList.add('dissolve')
      }
    }
  }

  public dispose (): void {
    for (const l in this.letters) {
      this.letters[l].classList.add('dissolve')
    }
  }
}
