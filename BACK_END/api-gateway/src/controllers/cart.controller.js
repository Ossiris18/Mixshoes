const getCart = async(req, res) => {
  const respuesta = await fetch("http://localhost:4003/api/cart", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const postCart = async(req, res) => {
  const respuesta = await fetch("http://localhost:4003/api/cart", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })
  const data = await respuesta.json();
  return res.status(200).json(data);
}

const updateCart = async(req, res) => {
  const respuesta = await fetch("http://localhost:4003/api/cart", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const deleteCart = async(req, res) => {
    const respuesta = await fetch("http://localhost:4003/api/cart", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
    })
    
    const data = await respuesta.json();
    return res.status(200).json(data);
}

export { getCart, postCart, updateCart, deleteCart }