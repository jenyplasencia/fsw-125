const express = require("express")
const app = express()


app.use(express.json()) 
app.use("/allbounties", require("./router/putDelete.js"))

const port = process.env.PORT || 8500
app.listen(port, () => {
  if (err) console.log(err)
  console.log(`Server is running on localhost: ${port}`)
})