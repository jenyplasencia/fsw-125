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

bountyRouter.route("/")
    .get((req, res) => { //GET bounty
    res.send(allbounties)
    })

    .post((req, res)=> { // POST bounty
    const bounty = req.body;
    bounty._id = uuid();
    allbounties.push(bounty)
    res.send(`Successfully added ${bounty.firstName} ${bounty.lastName} to the database.`)
})

module.exports = bountyRouter