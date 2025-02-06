import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const insuranceContext = `
Insurance Information:
1. Life & Health Insurance:
- Term life insurance provides coverage for a specific period
- Critical illness coverage for cancer, heart attack, and stroke
- Health insurance covers medical expenses and medications

2. Property Insurance:
- Home insurance protects against damage and theft
- Coverage for natural disasters and accidents
- Contents insurance for personal belongings

3. Cyber Insurance:
- Protection against ransomware attacks and data breaches
- Coverage for cybersecurity incidents
- Data recovery and business interruption support

4. Additional Services:
- 24/7 customer support
- Online claims processing
- Flexible payment options
`;

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an insurance assistant. Use only the following information to answer questions. If you can't answer based on this information, say so politely: ${insuranceContext}`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});