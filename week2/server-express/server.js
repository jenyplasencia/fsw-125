const express = require("express")
const app = express()
const visual = 
[
    {
        name: "Prisma Light",
        description: "diplays tree colors",
        Price: 9
    },
    {
        name: "Mini Plasma Ball",
        description: "Lisghts that flows from your fingers",
        Price: 17
    }
]
const auditory = 
[
    {
        name: "Rainstick",
        description: "Sounds just like a rain!",
        Price: 29
    },
    {
        name: "Wooden Acoustic Eggs",
        description: "Does acustic sounds",
        Price: 19
    }
]

const tactile =
[
    {
        name: "Fklex Rings",
        description: "Very strong. Brighty colors",
        Price: 4
    },
    {
        name: "Massage Ball Pack",
        description: "For cuious mind",
        Price: 45
    }
]

app.get("/toys/visual", (req, res) => {
    res.send(visual)
})
app.get("/toys/auditory", (req, res) => {
    res.send(auditory)
})
app.get("/toys/tactile", (req, res) => {
    res.send(tactile)
})

app.listen(8500, () => {
console.log("My first Server is running on port 8500")
})
