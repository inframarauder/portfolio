import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},

	tls: {
		rejectUnauthorized: false,
	},
});

export default async (req, res) => {
	try {
		if (req.method === "POST") {
			const { name, email, subject, message } = req.body;
			if (!name || !email || !subject) {
				return res
					.status(400)
					.json({ error: "name, email and subject are required!" });
			} else {
				const mailOptions = {
					to: process.env.TO_EMAIL,
					subject: `Mail from portfolio - ${subject}`,
					html: `
          <p><strong> Sender :${name} ( ${email} ) </strong></p>
          <p>
            ${message}
          </p>
          `,
				};

				await transport.sendMail(mailOptions);
				return res.status(200).json({
					message: "Your message has been sent! You will hear from me soon!",
				});
			}
		} else {
			return res.status(400).json({ error: "Unsupported request!" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Something went wrong!" });
	}
};
