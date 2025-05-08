import pool from "../../db/config.js";

const getDataCart = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM cartWomen");
        return res.status(200).json({
            status: "success",
            data: rows
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
        const connection = await pool.getConnection();
        
        try {
            await connection.beginTransaction();
            
            // Usamos Promise.all para esperar todas las inserciones
            await Promise.all(req.body.map(async (e) => {
                const { id, category, name, new_price } = e;
                await connection.query(
                    "INSERT INTO cartWomen (codigo_producto, category, name, new_price) VALUES (?, ?, ?, ?)",
                    [id, category, name, new_price]
                );
            }));
            
            await connection.commit();
            return res.status(200).json({
                message: "Data inserted successfully"
            });
        } catch (err) {
            await connection.rollback();
            throw err;
        } finally {
            connection.release();
        }
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
        const connection = await pool.getConnection();
        
        try {
            await connection.beginTransaction();
            
            await Promise.all(req.body.map(async (e) => {
                const { id, category, name, new_price, codigo_producto } = e;
                await connection.query(
                    "UPDATE cartWomen SET category = ?, name = ?, new_price = ?, codigo_producto = ? WHERE id = ?",
                    [category, name, new_price, codigo_producto, id]
                );
            }));
            
            await connection.commit();
            return res.status(200).json({
                message: "Data updated successfully"
            });
        } catch (err) {
            await connection.rollback();
            throw err;
        } finally {
            connection.release();
        }
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
        const connection = await pool.getConnection();
        
        try {
            await connection.beginTransaction();
            
            await Promise.all(req.body.map(async (e) => {
                const { id } = e;
                await connection.query(
                    "DELETE FROM cartWomen WHERE id = ?",
                    [id]
                );
            }));
            
            await connection.commit();
            return res.status(200).json({
                message: "Data deleted successfully"
            });
        } catch (err) {
            await connection.rollback();
            throw err;
        } finally {
            connection.release();
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

export { getDataCart, postDataCart, putDataCart, deleteDataCart };