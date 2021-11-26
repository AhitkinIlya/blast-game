import {assets} from './assets'
import canvas from './canvas'
import { statuses, actions } from './tileStatus.js';

class TileViewer {
    constructor() {
        this.width = 0
        this.height = 0
        this.assetsReady = false
        this.assets = []
        this.t = false
        this.initialization()
    }

    initialization() {
        for (let asset in assets) {
            let img = new Image()
            let setting = assets[asset]
            img.src = setting.src
            img.onload = () => {
                this.assets[asset] = {
                    src: img
                }
                this.assetsReady = true
            }
        }
    }

    setTileWidth(width) {
        let sizes = this.getTileSizes(width)
        this.width = sizes.width
        this.height = sizes.height
        this.radius = sizes.radius
    }

    getTileSizes(width) {
        return {
            width: width,
            height: width * 1.15,
            radius: width * 0.23
        }
    }

    draw(tile, coords, size) {
        if (!tile) return
        size = size || size === 0 ? size : this.width
        if (this.t) {
            this.drawTile(tile, coords, size)
        } else {
            setTimeout(() => this.drawTile(tile, coords, size), 200)
        }
    }

    drawTile(tile, coords, size) {
        this.t = true
        let ctx = canvas.ctx
        size = size || this.width
        let difference = this.width - size
        let newSizes = difference ? this.getTileSizes(size) : null

        let x = coords.x1 + difference / 2
        let y = coords.y2 - size - difference / 2
        let width = size
        let height = width
        let radius = difference ? newSizes.radius : this.radius
        let colors = this.getTileColors(x, y, tile.color)

        let TileTop = () => {
            let top = this.assets.top
            let topWidth = width * 0.95
            let topHeight = 0.2 * topWidth
            let topX = x + (width - topWidth) / 2
            let topY = y + radius / 4 - topHeight
            ctx.beginPath()
            ctx.drawImage(top.src, topX, topY, topWidth, topHeight)
            ctx.globalCompositeOperation = 'source-atop'
            ctx.fillStyle = colors.dark
            ctx.fillRect(topX, topY, topWidth, topHeight)
            ctx.globalCompositeOperation = 'source-over'
        }

        let TileFront = () => {
            ctx.fillStyle = colors.background
            ctx.beginPath()
            ctx.moveTo(x + radius, y)
            ctx.lineTo(x + width - radius, y)
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
            ctx.lineTo(x + width, y + height - radius)
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
            ctx.lineTo(x + radius, y + height)
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
            ctx.lineTo(x, y + radius)
            ctx.quadraticCurveTo(x, y, x + radius, y)
            ctx.closePath()
            ctx.fill()
            
        };

        let TileStar = () => {
            let star = this.assets.star
            let starWidth = width * 0.58
            let starHeight = starWidth * 1
            let starX = x + (width - starWidth) / 2
            let starY = y + (height - starHeight) / 2
            ctx.globalCompositeOperation = "destination-out"
            ctx.drawImage(star.src, starX, starY, starWidth, starHeight)
            ctx.globalCompositeOperation = "destination-over"
            ctx.fillStyle = tile.status == statuses.super ? colors.bright : colors.star
            ctx.fillRect(starX - 2, starY - 2, starWidth + 4, starHeight + 4)
            ctx.globalCompositeOperation = 'source-over'
        };

        TileTop()
        TileFront()
        TileStar()
    }

    getTileColors(x, y, color) {
        this.ctx = canvas.ctx
        let darkColor = `hsl(${color}, 100%, 40%)`

        let x1 = x
        let x2 = x
        let y1 = y
        let y2 = y + this.width

        let background = this.ctx.createLinearGradient(x1, y1, x2, y2)
        background.addColorStop(0, `hsl(${color}, 100%, 80%)`)
        background.addColorStop(0.5, `hsl(${color}, 90%, 60%)`)
        background.addColorStop(0.8, `hsl(${color}, 70%, 30%)`)
        background.addColorStop(1, `hsl(${color}, 30%, 30%)`)

        let star = this.ctx.createRadialGradient(
            x1 + this.width * 0.5, y2 - this.width * 0.25, this.width * 0.5,
            x1 + this.width * 0.5, y2, this.width * 0.25
            )
        star.addColorStop(0, `hsl(${color + 9}, 40%, 40%)`)
        star.addColorStop(1, `hsl(${color - 9}, 100%, 50%)`)

        let bright = `hsl(${color + 180}, 100%, 70%)`

        return {
            background: background, 
            star: star,
            dark: darkColor,
            bright: bright
        };
    }

        deleteTile(tile, coords, callback) {
            let start = performance.now()
            let stop = 600
    
            let step = timestamp => {
                let progress = timestamp - start
                this.clear(coords)
                let size = this.getDeleteSize(tile.action, progress)
                this.draw(tile, coords, size)
    
                if (progress < stop) {
                    window.requestAnimationFrame(step)
                } else {
                    callback()
                }
            }
    
            window.requestAnimationFrame(step)
        }
    
        getDeleteSize(action, time) {
            if (time < 0) time = 0
            let size
            if (action == actions.super) { 
                size = this.width
            } else {
                if (time >= 600) size = 0
                else {
                    let difference = this.width / 600
                    size = this.width - difference * time
                }    
            }
    
            return size
        }

        clear(coords) {
            if (!coords) return
            canvas.ctx.clearRect(
                coords.x1, coords.y1, 
                coords.x2 - coords.x1, 
                coords.y2 - coords.y1
            )
        }
}

export default new TileViewer()