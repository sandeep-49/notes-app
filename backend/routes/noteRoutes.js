const express = require('express')
const router = express.Router()
const { getNote, createNote, updateNote, deleteNote } = require('../controllers/noteController')

router.route('/').get(getNote).post(createNote)

router.route('/:id').put(updateNote).delete(deleteNote)

module.exports = router