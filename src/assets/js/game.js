import { levels } from './levels'
import gameScene from './gameScene'
import field from './field'
import progress from './progress'

 class Game {
    constructor() {
        this.score = 5
        this.scores = 0
        this.targetScore = 0
        this.level = 1
        this.teleportBonus = null
        this.mixingBonus = null
        this.steps = null
        this.maxLevel = null
        this.bonuses = null
        this.itemScores = null
        this.itemTarget = null
        this.itemLevel = null
        this.itemSteps = null
        this.mixingItem = null
        this.teleporItem = null
        this.mixingCount = null
        this.teleportCount = null
        this.activeGame = false
        this.teleportActive = false
    }

    initialization() {
        let level = levels[this.level - 1]
        this.maxLevel = levels.length
        this.targetScore = level.targetScore
        this.steps = level.steps
        this.teleportBonus = level.bonuses.teleport
        this.mixingBonus = level.bonuses.mixing
        this.getElements()
        this.setValues()
        this.setEvent()
        field.update(level)
        this.startGame()
    }

    startGame() {
        this.activeGame = true
        field.start()
    }

    getElements() {
        this.mixingItem = document.getElementById('mixing')
        this.teleportItem = document.getElementById('teleport')
        this.itemScores = document.getElementById('scores')
        this.itemTarget = document.getElementById('target-scores')
        this.itemLevel = document.getElementById('level')
        this.itemSteps = document.getElementById('steps')
        this.teleportCount = document.getElementById('teleport__count')
        this.mixingCount = document.getElementById('mixing__count')
    }

    setValues() {
        this.itemScores.innerHTML = this.scores
        this.itemTarget.innerHTML = this.targetScore
        this.itemLevel.innerHTML = this.level
        this.itemSteps.innerHTML = this.steps
        this.teleportCount.innerHTML = this.teleportBonus
        this.mixingCount.innerHTML = this.mixingBonus
        progress.setValue(this.scores, this.targetScore)
    }

    setEvent() {
        this.mixingItem.addEventListener('click', (e) => {
            if(this.mixingBonus > 0) {
                this.mixingBonus -= 1
                this.mixingCount.innerHTML = this.mixingBonus
                field.mixField()
            } else return
        })
        this.teleportItem.addEventListener('click', (e) => {
            field.active = !field.active
            this.teleportActive = !this.teleportActive
            this.setTeleportShadow()
        })
    }

    setTeleportShadow() {
        if (this.teleportActive && this.teleportBonus > 0) {
            this.teleportItem.style.boxShadow = '0px 0px 3px 3px #e73feb'
        } else this.teleportItem.style.boxShadow = 'none'
    }

    delete(count) {
        this.scores += count * this.score
        this.steps--
        progress.setValue(this.scores, this.targetScore)
        this.itemScores.innerHTML = this.scores
        this.itemSteps.innerHTML = this.steps
        if (this.steps >= 0 && this.scores >= this.targetScore && this.level == this.maxLevel) {
            this.gameScene('win')
            return
        } else if (this.steps == 0 && this.scores < this.targetScore) {
            this.gameScene('lose')
        } else if (this.steps >= 0 && this.scores >= this.targetScore) {
            this.gameScene('nextLevel')
        }
    }

    gameScene(status) {
        this.activeGame = false
        field.active = false
        gameScene.sceneStatus(status, this.nextLevel.bind(this), this.level)
    }

    nextLevel(lvl) {
        let sameLevel
        lvl == this.level ? sameLevel = true  : sameLevel= false
        let level = levels[lvl - 1]
        this.level = lvl
        this.maxLevel = levels.length
        this.scores = 0
        this.targetScore = level.targetScore
        if (!sameLevel) {
            this.level == 1 ? this.teleportBonus = 2 : ++this.teleportBonus
            this.level == 1 ? this.mixingBonus = 1 : ++this.mixingBonus
        }
        this.steps = level.steps
        this.setValues()
        field.update(level)
        this.startGame()
    }
}

export default new Game()