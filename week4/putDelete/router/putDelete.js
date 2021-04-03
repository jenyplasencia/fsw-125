const express = require("express")
const bountyRouter = express.Router()
const {v4: uuid} = require('uuid')

const allbounties = [
  {
    firstName: "Dooku",
    lastName: "Courts",
    living: false,
    bounty: 89000,
    type: "Jedi",
    _id: uuid()
  },
  {
    firstName: "Darth",
    lastName: "Maul",
    living: true,
    bounty: 109000,
    type: "Sith",
    _id: uuid()
  },
  {
    firstName: "Darth",
    lastName: "Tyranus",
    living: true,
    bounty: 100000,
    type: "Sith",
    _id: uuid()
  }
]
//GET All bounty
//bountyRouter.route('/')

// GET all
bountyRouter.get("/", (req, res) => {
  res.send(allbounties)
})

bountyRouter.post("/", (req, res)=> { // POST bounty (one)
        const newBounty = req.body
        newBounty._id = uuid()
        allbounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database.`)
})
bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = allbounties.findIndex(bounty => bounty._id === bountyId)
        allbounties.splice(bountyIndex, 1)
        res.send("Bounty was successfully deleted")
})

bountyRouter.put("/:bountyId", (req, res) => {
  const updatedBody = req.body
  const bountyId = req.params.bountyId
  const bountyIndex = allbounties.findIndex(bounty => bounty._id === bountyId)
  const modifiedBounty = Object.assign(allbounties[bountyIndex], updatedBody)
  res.send(modifiedBounty)
})

module.exports = bountyRouter


