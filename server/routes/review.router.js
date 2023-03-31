const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const review = req.body;
    console.log(`req.body:`, review);
    const sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    values ($1, $2, $3, $4)`;
    pool.query(sqlQuery, [review.feeling, review.understanding, review.support, review.comments])
        .then((result) => {
            console.log(`Adding review to DB`, review);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;