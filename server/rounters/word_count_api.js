import express from 'express'
import { WordCounter } from '../src/word_counter.js'

const router = express.Router();

router.post('/contraction', (req, res) => {
    console.log(`server recived request ${typeof req.body}`);
    res.send(JSON.stringify({"data": new WordCounter(req.body.text).wordContainer}));
});

export { router };



