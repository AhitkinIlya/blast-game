import canvas from './canvas.js'
import { Point } from './point.js'
import { Tile } from './tile.js'
import { statuses, actions } from './tileStatus'
import game from './game'

class Field {
    constructor() {
        this.mapField = []
        this.active = true
        this.cols = null
        this.rows = null
        this.minTile = null
        this.superTile = null
        this.colors = null
        this.teleportTiles = []
    }

    start() {
        this.fillCell()
    }

    fillCell() {
        for(let y = 0; y < this.rows; y++) {
            for(let x = 0; x < this.cols; x++) {
                let point = new Point(x, y)
                let color = this.getColorTile()

                let cell = this.mapField[point.y][point.x]

                if (!cell) {
                    let tile = new Tile(color)
                    tile.position = point
                    tile.status = statuses.default
                    this.mapField[point.y][point.x] = tile
                }
            }
        }
        if (this.checkPosition()) {
            canvas.draw(this.mapField, () => this.active = true)
        } else this.mixField()
        
    }

    checkPosition() {
        let counter = 0;
        let availableGroups = false

        let checkPosition = (position, color) => {
            if (counter >= this.minTile) return true
            if (
                position.x < 0 ||
                position.y < 0 ||
                position.x > this.cols - 1 ||
                position.y > this.rows - 1
            ) return

            let currentTile = this.mapField[position.y][position.x]
            if (
                !currentTile || 
                currentTile.checked || 
                currentTile.color !== color 
            ) return

            counter++
            
            currentTile.checked = true

            checkPosition(new Point(position.x - 1, position.y), color)
            checkPosition(new Point(position.x + 1, position.y), color)
            checkPosition(new Point(position.x, position.y - 1), color)
            checkPosition(new Point(position.x, position.y + 1), color)
        }

        stop: for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {

                let tile = this.mapField[y][x]
                
                if (tile.status == statuses.super) return true

                counter = 0;
                checkPosition(tile.position, tile.color)
                if (counter >= this.minTile) {
                    availableGroups = true
                    break stop
                }
            }
        }

        this.clearChecked()

        return availableGroups
    }

    getColorTile() {
        let index = Math.floor(this.colors.length * Math.random())
        return this.colors[index]
    }

    update(level) {
        this.rows = level.rows
        this.cols = level.cols
        this.minTile = level.min
        this.colors = level.colors
        this.superTile = level.superTile

        for (let y = 0; y < this.rows; y++) {
            this.mapField[y] = [];
            for (let x = 0; x < this.cols; x++) {
                this.mapField[y].push(null)
            }
        }
        canvas.update(level)
    }

    getRow(position) {
        let row = this.mapField[position.y];
        return row.map((_, ind) => new Point(ind, position.y))
    }

    getTileNeighbors(position, action) {

        let tile = this.mapField[position.y][position.x]
        let color = tile.color

        let neighborsTiles = []

        let checkPosition = (position) => {
            if ( 
                position.x < 0 ||
                position.y < 0 ||
                position.x > this.cols - 1 ||
                position.y > this.rows - 1
            ) return

            let currentTile = this.mapField[position.y][position.x]
            
            if (
                !currentTile || 
                currentTile.checked || 
                currentTile.color !== color 
            ) return

            if (action) currentTile.action = action

            neighborsTiles.push(position)
            currentTile.checked = true

            checkPosition(new Point(position.x - 1, position.y))
            checkPosition(new Point(position.x + 1, position.y))
            checkPosition(new Point(position.x, position.y - 1))
            checkPosition(new Point(position.x, position.y + 1))
        }
        
        checkPosition(position)

        this.clearChecked()

        return neighborsTiles
    }

    clearChecked() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let position = new Point(x, y)
                this.mapField[position.y][position.x].checked = false
            }
        }
    }

    teleport() {
        let teleportTileOne = this.teleportTiles[0]
        let teleportTileTwo = this.teleportTiles[1]
        let colorOne = teleportTileOne.color
        let colorTwo = teleportTileTwo.color
        if (colorOne !== colorTwo) {
            this.mapField[teleportTileOne.position.y][teleportTileOne.position.x].color = colorTwo
            this.mapField[teleportTileTwo.position.y][teleportTileTwo.position.x].color = colorOne
            canvas.drawTeleport(this.teleportTiles)
            game.teleportActive = false
            game.setTeleportShadow()
            game.teleportBonus--
            game.setValues()
            this.teleportTiles = []
            this.active = true
        } else {
            game.teleportActive = false
            game.setTeleportShadow()
            this.teleportTiles = []
            this.active = true
        }
    }

    click(position) {
        if(game.teleportActive) {
            this.teleportTiles.push(this.mapField[position.y][position.x])
            if(this.teleportTiles.length == 2) {
                this.teleport()
            } else return
        }
        if (!this.active) return
        this.active = false

        let tileTargets = []
        
        let tile = this.mapField[position.y][position.x]
        if (!tile) {
            this.active = true
            return
        }

        if (tile.status == statuses.super) {
            let row = this.getRow(position)
            tile.action = actions.default;
            this.targetChecked = true
            tileTargets = [...tileTargets, ...row]
        }

        if (!tileTargets.length) {
            tileTargets = this.getTileNeighbors(position, actions.default)

            if (tileTargets.length < this.minTile) {
                this.active = true
                return
            };

            if (tileTargets.length >= this.superTile) {
                tile.status = statuses.super;
                tile.action = actions.super;
            }
        } 

        this.clearChecked()
        tileTargets.forEach(cell => {
            if (cell.x == position.x && cell.y == position.y) return
            let tile = this.mapField[cell.y][cell.x]
            if (tile.status == statuses.super) {
                if (tile.action == actions.super) tile.action = actions.default;
                let row = this.getRow(tile.position)
                tileTargets = [...tileTargets, ...row]
            }
        })

        canvas.delete(this.mapField, tileTargets, () => {
            tileTargets.forEach(point => {
                let tile = this.mapField[point.y][point.x]
                if (!tile) return
                if (tile.action !== actions.super) this.mapField[point.y][point.x] = null
            })
            canvas.draw(this.mapField)
            this.moveField()
            game.delete(tileTargets.length)
        })
    }

    moveField() {
        let cols = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let point = new Point(x, y)
                if (!cols[point.x]) cols[point.x] = []
                cols[point.x][point.y] = this.mapField[point.y][point.x]
            }
        }

        cols = cols.map((col, x) => {
            let nullCount = 0
            col = col.filter(cell => {
                if (!cell) {
                    nullCount++
                    return false;
                }
                cell.from = cell.position
                return cell
            })
            for(let i = 0; i < nullCount; i++) {
                col.unshift(null)
            }
            
            for (let i = 0; i < this.rows; i++) {
                if (!col[i]) {
                    continue
                }
                col[i].position = new Point(x, i)
            }

            
            return col

        })

        cols.forEach((col, x) => {
            col.forEach((cell, y) => {
                this.mapField[y][x] = cell
            })
        })

        canvas.move(this.mapField, () => this.fillCell())
    }


    mixField() {

        this.mapField.sort(this.randomSort)


        for (let y = 0; y < this.rows; y++) {
            let row = this.mapField[y];
            this.mapField[y].sort(this.random)

            for (let x = 0; x < this.cols; x++) {
                row[x].position = new Point(x, y)
            }
        }

        if (this.checkPosition()) {
            canvas.draw(this.mapField, () => this.active = true)
        } else this.mixField()
    }

    random(a, b) {
        return Math.random() - 0.5
    }
}


export default new Field()
