var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', todosCtrl.index);

router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.delete);


module.exports = router;
