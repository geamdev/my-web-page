import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
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

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      res.status(500).json({ message: 'Hubo un error al enviar el mensaje' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
