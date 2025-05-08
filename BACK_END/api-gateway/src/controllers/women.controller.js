const getWomen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4002/api/women", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const postWomen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4002/api/women", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const updateWomen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4002/api/women", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const deleteWomen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4002/api/women", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

export { getWomen, postWomen, updateWomen, deleteWomen }