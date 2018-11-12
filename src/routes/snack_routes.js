const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/snack_controller');

router.get('/', ctrl.fetchSnack);
router.get('/:id', ctrl.findSnack);
router.delete('/:id', ctrl.removeSnack);
router.post('/', ctrl.addSnack);
router.put('/:id', ctrl.modifySnack);

module.exports = router;