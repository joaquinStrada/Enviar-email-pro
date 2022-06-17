import { schemaEmail } from '../joi/emailSchema.joi'
import nodeMailer from 'nodemailer'

export const sendEmail = async (req, res) => {
	const { 
		from, 
		to, 
		subject, 
		smtpServer, 
		smtpPort, 
		secure, 
		userEmail, 
		userPass,
		pageHtml
	} = req.body

	// validamos todos los campos
	const { error } = schemaEmail.validate({
		from,
		to,
		subject,
		smtpServer,
		smtpPort,
		secure,
		userEmail,
		userPass,
		pageHtml
	})

	if (error) {
		return res.status(400).json({
			error: true,
			message: error.details[0].message
		})
	}

	try {
		const transporter = nodeMailer.createTransport({
			host: smtpServer,
			port: smtpPort,
			secure,
			auth: {
				user: userEmail,
				pass: userPass
			},
			tls: {
				rejectUnauthorized: false
			}
		})

		const info = await transporter.sendMail({
			from,
			to,
			subject,
			html: pageHtml
		})

		res.json({
			error: false,
			message: `Email enviado satisfactoriamente bajo el id: ${info.messageId}`
		})
	} catch (err) {
		console.error(err)
		res.status(500).json({
			error: true,
			message: 'ha ocurrido un error'
		})
	}
}