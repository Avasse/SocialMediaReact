const express = require('express');
const router = express.Router();
const db = require('../bin/db');

/* GET posts listing. */
router.get('/', (req, res, next) => {
  const query = 'SELECT * FROM posts';

  db.get().query(query, (err, result) => {
    if (err) { return next(err); }
    res.status('200').send({
      posts : result
    });
  });
});

/* GET post by ID. */
router.get('/:id', (req, res, next) => {
  const query = 'SELECT * FROM posts WHERE id = ?';

  db.get().query(query, [req.params.id], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send({
      post : result
    });
  });
});

/* PUT new post. */
router.put('/', (req, res, next) => {
  const query = "INSERT INTO posts (user, text) VALUES (?, ?)";
  const body = req.body;

  db.get().query(query, [body.user, body.text], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send(result.affectedRows + " record(s) updated");
  });
});

/* UPDATE post by ID. */
router.post('/:id', (req, res, next) => {
  const query = 'UPDATE post SET text = ? WHERE id = ?';
  const id = req.params.id;
  const body = req.body;

  db.get().query(query, [body.text, id], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send(result.affectedRows + " record(s) updated");
  });
});

/* DELETE post by ID. */
router.delete('/:id', (req, res, next) => {
  const query = "DELETE FROM posts WHERE id = ?";

  db.get().query(query, [req.params.id], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send(result.affectedRows + " record(s) updated");
  });
});

module.exports = router;
