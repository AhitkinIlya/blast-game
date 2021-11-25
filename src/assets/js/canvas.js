import { Point } from './point'
import tileViewer from './tileViewer'
import field from './field'

class Canvas {
    constructor() {
        this.width = null
        this.height = null
        this.ctx = null
        this.canvas = null
        this.canvasPosition = null
        this.field = null
        this.rows = null
        this.cols = null
        this.moving = 10
        this.initialization()
    }

    initialization() {
        this.getElement()
        this.setPositon()
    }

    getElement() {
        this.canvas = document.getElementById('game-playground')
        this.ctx = this.canvas.getContext('2d')
        this.setEvent()
    }

    setEvent() {
        this.canvas.addEventListener('click', e => this.click(e) )
    }

    click(e) {
        let x = e.clientX - this.canvasPosition.x
        let y = e.clientY - this.canvasPosition.y
        let position = this.getCoords(new Point(x, y))
        field.click(position)
    }

    setPositon() {
        let canvasPosition = this.canvas.getBoundingClientRect()
        this.canvasPosition = new Point(canvasPosition.left, canvasPosition.top)
    }

    update(level) {
        this.width = this.canvas.offsetWidth

        this.cols = level.cols
        this.rows = level.rows

        tileViewer.setTileWidth(Math.floor(this.width / this.cols))

        this.canvas.height = this.height = tileViewer.height * this.rows
    }

    drawTeleport(tiles) {
        for (let x = 0; x < tiles.length; x++) {
            let tile = tiles[x]
            let coordsPoint =  this.getCoordsPoint(tile.position)
            tileViewer.draw(tile, coordsPoint)
        }
    }

    draw(mapField, callback) {
        this.field = mapField
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let tile = mapField[y][x]
                if (!tile) return
                let coordsPoint =  this.getCoordsPoint(tile.position)
                tileViewer.draw(tile, coordsPoint)
            }
        }
        callback ? callback() : null
    }

    getCoordsPoint(position) {
        let x1 = position.x * tileViewer.width
        let x2 = x1 + tileViewer.width

        let y1 = position.y * tileViewer.height
        let y2 = y1 + tileViewer.height
        
        return {
            x1,
            x2,
            y1,
            y2 
        }
    }

    getCoords(coords) {
        let x = Math.floor(coords.x / tileViewer.width)
        let y = Math.floor(coords.y / tileViewer.height)
        return new Point(x, y)
    }

    delete(field, cells, callback) {
        let deleted = []
        let addDeleted = (index) => {
            deleted.push(index)

            if (deleted.length == cells.length) callback()
        }
        
        cells.forEach(
            (cell, index) => {
                let tile = field[cell.y][cell.x]
                let coords = this.getCoordsPoint(tile.position)
                tileViewer.deleteTile(
                    tile, 
                    coords,
                    () => addDeleted(index)
                )
            }
        );
    }

    move(fieldMap, callback) {
        let moveMap = []
        this.field = fieldMap
        fieldMap.forEach((row, y) => {
            row.forEach((tile, x) => {
                if (!tile || !tile.from) return
                if (tile.from.x !== x || tile.from.y !== y ) {
                    tile.current = this.getCoordsPoint(tile.from)
                    tile.destination = this.getCoordsPoint(tile.position)
                    moveMap.push(tile)
                }
            })
        })
        if (!moveMap.length) {
            callback()
            return
        }
        let start = performance.now()

        let step = (timestamp) => {
            let next = false
            moveMap.forEach(tile => {
                if (!tile.current) return
                tileViewer.clear(tile.current)
                tile.current.y1 += this.moving
                tile.current.y2 += this.moving

                let coords = tile.current

                if (tile.current.y1 >= tile.destination.y1) {
                    tile.current = null
                    coords = this.getCoordsPoint(tile.position)
                } else {
                    next = true
                }
                tileViewer.draw(tile, coords)

            })
            if (next) {
                window.requestAnimationFrame(step)
            } else {
                callback()
            }
        }

        window.requestAnimationFrame(step)
    }


}

export default new Canvas()