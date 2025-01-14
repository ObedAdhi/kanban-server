if (process.env.NODE_ENV === "development") {
  require("dotenv").config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const router = require("./routes")
const cors = require("cors") 
const errorHandler = require("./middlewares/errorHandlers")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log("listening to port: " + port);
})