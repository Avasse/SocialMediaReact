const express = require('express');
const router = express.Router();
const db = require('../bin/db');

/* GET users listing. */
router.get('/', (req, res, next) => {
  const query = 'SELECT * FROM users';

  db.get().query(query, (err, result) =>{
    res.status('200').send({
      users : result
    });
  });
});

/* GET user by ID. */
router.get('/:id', (req, res, next) => {
  const query = 'SELECT * FROM users WHERE id = ?';

  db.get().query(query, [req.params.id] ,(err, result) =>{
    res.status('200').send({
      user : result
    });
  });
});

/* PUT user by ID. */
router.put('/', (req, res, next) => {
  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  const body = req.body;

  if (body.username, body.email, body.password) {
    db.get().query(query, [body.username, body.email, body.password] ,(err, result) => {
      res.status('200').send(result.affectedRows + " record(s) updated");
    });
  } else {
    res.status('500').send('Requested id, username, email and password to create.');
  }
});

/* UPDATE user by ID. */
router.post('/:id', (req, res, next) => {
  const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
  const id = req.params.id;
  const body = req.body;

  if (body.username, body.email, body.password && id) {
    db.get().query(query, [body.username, body.email, body.password, id] ,(err, result) => {
      res.status('200').send(result.affectedRows + " record(s) updated");
    });
  } else {
    res.status('500').send('Requested id, username, email and password to update.');
  }
});

module.exports = router;
