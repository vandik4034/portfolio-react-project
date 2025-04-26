import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://hardik-rathod-portfolio.netlify.app'
];

app.use(express.json());
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Request:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hardikrathod8153@gmail.com',
        pass: 'onjt inab whfx jfrx'
      }
    });

    await transporter.sendMail({
      from: `${email}`,
      to: `hardikrathod8153@gmail.com`,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email sending failed." });
  }
});


app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  console.log("Subscribe Request:", email);

  
  res.status(200).json({ message: "Subscribed successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
