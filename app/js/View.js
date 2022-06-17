import Editor from './components/Editor'
import Preview from './components/Preview'
import SweetAlert from './components/SweetAlert'

import { $id, validateSendEmail, createHtml } from './functions/functions'
import { setState, getState } from './state'

export default class View {
	constructor() {
		this.model = null

		this.btnConfig = $id('btn-settings')
		this.btnSendEmail = $id('btn-send-email')

		this.editor = new Editor()
		this.preview = new Preview()
		this.sweetAlert  = new SweetAlert()

		this.editor.setOnChange(e => this.onChangeEditor(e))

		this.btnConfig.addEventListener('click', e => this.onClickSettings(e))
		this.btnSendEmail.addEventListener('click', e => this.onClickSendEmail(e))

	}

	setModel(model) {
		this.model = model
	}

	onChangeEditor(e) {
		const { html, css, js } = e

		this.preview.render(html, css, js)
	}

	async onClickSettings(e) {
		e.preventDefault()

		try {
			const data = await this.sweetAlert.showConfig()

			setState(data)
			getState().saveSettings(data)
		} catch (err) {
			if (err.message != 'Se ha cancelado la configuracion') {
				console.error(err)
			}
		}
	}

	async onClickSendEmail(e) {
		e.preventDefault()

		try {
			const { from, to, subject } = await this.sweetAlert.showSendEmail()
			const { smtpServer, smtpPort, secure, userEmail, userPass } = getState()
			const { html, css, js } = this.editor.getData()

			const { error, message } = validateSendEmail(from, to, subject, smtpServer, smtpPort, secure, userEmail, userPass,
				html, css, js)

			if (error) {
				return this.sweetAlert.showNotificationMessage(error, message, 'Enviar email')
			}

			const pageHtml = createHtml(html, css, js)
			const data = {
				from, 
				to, 
				subject,
				smtpServer, 
				smtpPort, 
				secure, 
				userEmail, 
				userPass,
				pageHtml
			}

			this.model.sendEmail(data)
		} catch (err) {
			if (err.message != 'Se ha cancelado el envio del email') {
				console.error(err)
			}
		}
	}

	onSendEmail(data) {
		const { error, message } = data

		this.sweetAlert.showNotificationMessage(error, message, 'Email enviado')
	}
}