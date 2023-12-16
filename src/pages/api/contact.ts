import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    const { names, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jeanpiere.virgilio@gmail.com',
        pass: 'jvjk medw tscr gldt',
      },
    });

    const mailOptions = {
      from: email,
      to: 'jeanpiere.virgilio@gmail.com',
      subject: `Mensaje de ${names} (${email})`,
      text: message,
    };

    const responseMailOptions = {
      from: 'jeanpiere.virgilio@gmail.com',
      to: email,
      subject: 'Mensaje recibido',
      text: `Hola ${names}, gracias por contactarme. En breve te responderé.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(responseMailOptions);
      res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      res.status(500).json({ message: 'Hubo un error al enviar el mensaje' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
