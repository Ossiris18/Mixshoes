import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`CartMen service is running on http://localhost:${PORT}`);
    }           
);