class Progress {
    constructor() {
        this.progressBar = null
        this.initialaztion()
    }

    initialaztion() {
        this.progressBar = document.getElementById('progress')
    }

    setValue(scores, target) {
        let width = `${Math.min(scores / target, 1) * 100}%`
        this.progressBar.style.width = width
    }
}

export default new Progress()