
const express = require("express")
const axios = require("axios")
const router = express.Router()
const API = 'https://rickandmortyapi.com/api/character'

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
router.get("/characters/:id",async(req,res)=>{
    const id = req.params.id
    
    try {
        const response = await axios.get(`${API}/${id}`)
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