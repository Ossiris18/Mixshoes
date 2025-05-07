const getMen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4001/api/men", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const postMen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4001/api/men", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const updateMen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4001/api/men", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

const deleteMen = async(req, res) => {
  const respuesta = await fetch("http://localhost:4001/api/men", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })

  const data = await respuesta.json();
  return res.status(200).json(data);
}

export { getMen, postMen, updateMen, deleteMen }