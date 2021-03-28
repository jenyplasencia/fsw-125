const express = require("express")
const app = express()


app.use(express.json())
app.use("/allbounties", require("./bountyRouter/bountyRouter"))

app.listen(8500, () => {
  console.log("Server is running on localhost: 8500")
})