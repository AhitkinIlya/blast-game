import {sceneActions} from './sceneActions'
class gameScene {
    constructor() {
        this.scene = null
        this.replay = null
        this.nextLevel = null
        this.initialization()
    }

    initialization() {
        this.getElements()
        this.setEvents()
    }

    getElements() {
        this.scene = document.getElementById('scene')
        this.sceneTitle = document.getElementById('sceneTitle')
        this.replay = document.getElementById('replay')
        this.nextLevel = document.getElementById('nextLevel')
    }

    setEvents() {
        this.replay.addEventListener('click', () => {
            this.callback(this.lvl)
            this.sceneStatusOut()
        })
        this.nextLevel.addEventListener('click', () => {
            if (this.lvl == 3) {
                this.lvl = 1
                this.callback(this.lvl)
                this.sceneStatusOut()
            } else {
                this.callback(++this.lvl)
                this.sceneStatusOut()
            }
        })
    }

    sceneStatus(status, callback, lvl) {
        this.callback = callback
        this.lvl = lvl
        if(status == 'lose') {
            this.sceneTitle.innerHTML = sceneActions['lose'].title
            this.replay.innerHTML = sceneActions['lose'].replay
            this.nextLevel.style.display = 'none'
        } else if(status == 'nextLevel') {
            this.sceneTitle.innerHTML = sceneActions['nextLevel'].title
            this.replay.innerHTML = sceneActions['nextLevel'].replay
            this.nextLevel.style.display = 'block'
            this.nextLevel.innerHTML = sceneActions['nextLevel'].nextLevel
        } else {
            this.sceneTitle.innerHTML = sceneActions['win'].title
            this.replay.innerHTML = sceneActions['win'].replay
            this.nextLevel.style.display = 'block'
            this.nextLevel.innerHTML = sceneActions['win'].nextLevel
        }
        this.scene.style.display = 'flex'
    }

    sceneStatusOut() {
        this.scene.style.display = 'none'
    }
}

export default new gameScene()