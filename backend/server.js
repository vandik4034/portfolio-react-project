import express from 'express';
import sql from 'mssql';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;


const allowedOrigins = [
  ' http://localhost:5173',
  'https://hardik-rathod-portfolio.netlify.app'
];

app.use(express.json());
app.use(cors({
  origin: function(origin, callback) {

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },

  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


const config = {

    user: "sa",
    password:"Hardik@8153",
    server:"DESKTOP-EQ55Q8H\\SPART",
    database:"portfolio",

    options:{
        encrypt: false,
        trustServerCertificate: true,
   },
};

const connectToDB = async () => {
    try {
      const pool = await sql.connect(config);
      console.log(" SQL Server connect sucessful");
      return pool;
    } catch (err) {
      console.error(" Error:", err);
      throw err;
    }
  };


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hardikrathod8153@gmail.com',

        pass: 'onjt inab whfx jfrx'
    }
});


app.post('/api/contact', async (req, res) => {
    console.log(" Request received at /api/contact");

    const {name, email, message} = req.body;

    try {

        const pool = await connectToDB(); 
        await pool.request()
      .input("Name", sql.VarChar(100), name)
      .input("Email", sql.VarChar(100), email)
      .input("Message", sql.VarChar(sql.MAX), message)
      .query`INSERT INTO ContactUs (Name, Email, Message) VALUES (${name}, ${email}, ${message})`;

        await transporter.sendMail({
            from: `${email}`,
            to: `hardikrathod8153@gmail.com`,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        res.status(200).json({ message: "Message sent and stored successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving or sending email." });
       
    }
});

app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
  
    try {
        const pool = await connectToDB();   
        await pool.request()
        .input("Email", sql.VarChar(255), email)
        .query`INSERT INTO Subscribers (Email) VALUES (${email})`;
  
      res.status(200).json({ message: "Subscribed successfully!" });
    } catch (error) {
      console.error(" Error in /api/subscribe:", error);
      res.status(500).json({ message: "Something went wrong." });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});