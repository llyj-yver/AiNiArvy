const express = require('express');
const router = express.Router();
const gptController = require('../controllers/gptController');

router.get('/quiz', (req, res) => res.render('quiz-form', { title: 'Create Quiz' }));
router.post('/quiz', gptController.generateQuiz);

module.exports = router;
