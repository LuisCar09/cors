const express = require("express")
const cors = require("cors")

const routes = require("./routes/routes")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})    