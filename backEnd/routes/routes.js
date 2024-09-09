
const express = require("express")
const axios = require("axios")
const router = express.Router()
const API = 'https://rickandmortyapi.com/api/character/?name='

router.get("/characters",async(req,res)=>{
    try {
        const response = await axios.get(API)
        const characters = await response.data.results
        res.json(characters)
    } catch (error) {
        console.error(error.message);
        res.status(404).json({message: `Error fetching characters.`})
        
    }
   
    
})
router.get("/character/:name",async(req,res)=>{
    const name = req.params.name
    
    try {
        const response = await axios.get(`${API}${name}&`)
        const characters = await response.data
        res.json(characters)
    } catch (error) {
        console.error(error.message);
        res.status(404).json({message: `Character not found.`})     
    }
})
router.use((req,res) => {
    res.send(" <h1>Page not found</h1> ")
})

module.exports = router