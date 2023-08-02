import express from 'express';
import {router} from './rounters/word_count_api.js';

import cors from 'cors'; 
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`the port was started in the port ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
