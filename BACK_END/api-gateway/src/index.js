import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//funciones get

//funciones post
app.post("/cart", async(req, res) => {
    
    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.post("/women", async(req, res) => {
    
    const respuesta = await fetch("http://localhost:4001/api/women", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.post("/men", async(req, res) => {
    
    const respuesta = await fetch("http://localhost:4002/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.post("/shop", async(req, res) => {
    
    const respuesta = await fetch("http://localhost:4003/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
//funciones put
//funciones delete
app.listen(PORT, () => {
    console.log(`Cart service is running on http://localhost:${PORT}`);
    }           
);

