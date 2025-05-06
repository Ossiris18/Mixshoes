import connection from "../../db/config.js"
const getDataCart = async (req,res)=>{
    try {
        const data=(await connection.promise().query("SELECT * FROM cart"))[0]
        console.log(data)
        return res.status(200).json({
            status: "success",
            data: data
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })
    }
}

const postDataCart = async (req,res)=>{
    const { id, category, name, new_price }= req.body[0]
    console.log(req.body, id, category, name, new_price)
    try {
        (await connection.promise().query("INSERT INTO cart (codigo_producto, category, name, new_price) VALUES (?,?,?,?)",[id, category, name, new_price]))[0]
        return res.status(200).json({
            message: "Data inserted successfully"
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })

    }

}
const putDataCart = async (req,res)=>{
    const { id, category, name, new_price }= req.body[0]
    console.log(req.body, id, category, name, new_price)
    try {
        (await connection.promise().query("UPDATE cart SET category=?, name=?, new_price=? WHERE codigo_producto=?",[category, name, new_price, id]))[0]
        return res.status(200).json({
            message: "Data updated successfully"
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })

    }

}
const deleteDataCart = async (req,res)=>{
    const { id }= req.body[0]
    console.log(req.body, id)
    try {
        (await connection.promise().query("DELETE FROM cart WHERE codigo_producto=?",[id]))[0]
        return res.status(200).json({
            message: "Data deleted successfully"
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })

    }

}
export {getDataCart, postDataCart, putDataCart, deleteDataCart};
