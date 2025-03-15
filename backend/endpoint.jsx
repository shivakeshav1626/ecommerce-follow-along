import express from 'express';
import nodemailer from 'nodemailer';
import { getUserData } from './userService'; 

const router = express.Router();

router.post('/send-user-data', async (req, res) => {
    try {
        const userData = await getUserData();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'User Data Information',
            html: `
                <h2>User Data</h2>
                <p><b>Name:</b> ${userData.name}</p>
                <p><b>Email:</b> ${userData.email}</p>
                <p><b>Phone:</b> ${userData.phone}</p>
                <p><b>Address:</b> ${userData.address}</p>
                <img src="${userData.profilePhoto}" alt="Profile Photo" style="max-width: 150px; border-radius: 10px;"/>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

export default router;