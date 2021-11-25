let levels = [
    {
        rows: 10,
        cols: 10,
        steps: 8,
        targetScore: 150,
        min: 2,
        superTile: 4,
        colors: [0, 25, 68, 155, 200],
        bonuses: {
            teleport: 2,
            mixing: 1
        }
    },
    {
        rows: 10,
        cols: 10,
        steps: 10,
        targetScore: 250,
        min: 3,
        superTile: 5,
        colors: [0, 25, 68, 120, 155, 200]
    },
    {
        rows: 10,
        cols: 10,
        steps: 12,
        targetScore: 375,
        min: 3,
        superTile: 6,
        colors: [0, 155, 68, 25, 200, 120, 180]
    }
]

export { levels }