import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//funciones get
app.get("/cart", async(req, res) => {
    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
})
app.get("/women", async(req, res) => {
    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
})
app.get("/men", async(req, res) => {
    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
})
app.get("/shop", async(req, res) => {
    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
})
//funciones post
app.post("/cart", async(req, res) => {
    
    console.log(req.body)

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
app.put("/cart", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.put("/women", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.put("/men", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.put("/shop", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
//funciones delete
app.delete("/cart", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.delete("/women", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.delete("/men", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.delete("/shop", async(req, res) => {
    
    console.log(req.body)

    const respuesta = await fetch("http://localhost:4000/api/cart", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
        
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
    
})
app.listen(PORT, () => {
    console.log(`Cart service is running on http://localhost:${PORT}`);
    }           
);

