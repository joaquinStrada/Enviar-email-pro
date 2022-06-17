import Joi from 'joi'

export const schemaEmail = Joi.object({
	from: Joi.string().min(6).max(1024).required(), 
	to: Joi.string().min(6).max(320).required().email(), 
	subject: Joi.string().min(6).max(255).required(), 
	smtpServer: Joi.string().min(10).max(68).required(), 
	smtpPort: Joi.number().integer().min(0).max(65536).required(), 
	secure: Joi.boolean().required(), 
	userEmail: Joi.string().min(6).max(320).required().email(), 
	userPass: Joi.string().min(6).max(20).required(),
	pageHtml: Joi.string().min(357).required()
})