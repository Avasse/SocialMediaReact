const express = require('express');
const router = express.Router();
const db = require('../bin/db');

/* GET users listing. */
router.get('/', (req, res, next) => {
  const query = 'SELECT * FROM users';

  db.get().query(query, (err, result) => {
    if (err) { return next(err); }
    res.status('200').send({
      users : result
    });
  });
});

/* GET user by ID. */
router.get('/:id', (req, res, next) => {
  const query = 'SELECT * FROM users WHERE id = ?';

  db.get().query(query, [req.params.id], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send({
      user : result
    });
  });
});

/* CREATE user */
router.post('/', (req, res, next) => {
  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  const body = req.body;

  db.get().query(query, [body.username, body.email, body.password], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send(result.affectedRows + " record(s) updated");
  });
});

/* UPDATE user by ID. */
router.put('/:id', (req, res, next) => {
  const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
  const id = req.params.id;
  const body = req.body;

  db.get().query(query, [body.username, body.email, body.password, id], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send(result.affectedRows + " record(s) updated");
  });
});

/* DELETE user by ID. */
router.delete('/:id', (req, res, next) => {
  const query = "DELETE FROM users WHERE id = ?";

  db.get().query(query, [req.params.id], (err, result) => {
    if (err) { return next(err); }
    res.status('200').send(result.affectedRows + " record(s) updated");
  });
});

module.exports = router;
