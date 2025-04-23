const express = require('express');
const router = express.Router();
const { getContact, createContact, getContactId, updateContact, deleteContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
//because the routes are same depending upone the restful functions the logic will be choosed
router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getContactId).put(updateContact).delete(deleteContact);

module.exports = router;