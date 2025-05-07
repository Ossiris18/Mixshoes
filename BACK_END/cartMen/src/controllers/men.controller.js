import db from "../../db/config.js";

const getDataCart = async (req, res) => {
    try {
        const data = db.prepare("SELECT * FROM cartMen").all();
        return res.status(200).json({
            status: "success",
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

const postDataCart = async (req, res) => {
    console.log("entra a postDataCart");
    try {
        req.body.map(async(e) => {
            const { id, category, name, new_price } = e;
            const stmt = db.prepare(
                "INSERT INTO cartMen (codigo_producto, category, name, new_price) VALUES (?, ?, ?, ?)"
            );
            stmt.run(id, category, name, new_price);
        })
        return res.status(200).json({
            message: "Data inserted successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

const putDataCart = async (req, res) => {
    try {
        req.body.map(async(e) => {
            const { id, category, name, new_price , codigo_producto} = e;
            const stmt = db.prepare(
                "UPDATE cartMen SET category = ?, name = ?, new_price = ?, codigo_producto = ? WHERE id = ?"
            );
            stmt.run(category, name, new_price, codigo_producto, id);
        })
        
        return res.status(200).json({
            message: "Data updated successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

const deleteDataCart = async (req, res) => {
    try {
        req.body.map(async(e) => {
            const { id } = e;
            const stmt = db.prepare("DELETE FROM cartMen WHERE id = ?");
            stmt.run(id);
        })
        return res.status(200).json({
            message: "Data deleted successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

export { getDataCart, postDataCart, putDataCart, deleteDataCart };