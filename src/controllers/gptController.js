require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.API_KEY });

exports.generateQuiz = async (req, res) => {
    try {
        const { topic, numQuestions } = req.body;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful AI that generates quizzes." },
                { role: "user", content: `Create a ${numQuestions}-question quiz on ${topic}.` }
            ],
        });

        const quiz = response.choices[0].message.content;
        res.json({ quiz });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate quiz" });
    }
};
