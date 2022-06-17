import Swal from 'sweetalert2/dist/sweetalert2.all'

import { modalConfig, modalEmail } from '../functions/swetAlert'
import { $id } from '../functions/functions'
import { getState } from '../state'


export default class SweetAlert {
	constructor() {
	}

	showConfig() {
		const { fontSize, lineNumbers, minimap, theme, wordWrap, fontLigatures, tabSize,
			smtpServer, smtpPort, secure, userEmail, userPass } = getState()

		const html = modalConfig(fontSize, lineNumbers, minimap, 
			theme, wordWrap, fontLigatures, tabSize, smtpServer, smtpPort, secure, userEmail, userPass)
		
		return new Promise((resolve, reject) => {
			const swalConfig = new Swal({
				title: 'Configuraciones',
				html,
				icon: 'info',
				confirmButtonText: 'Guardar',
				padding: '1rem',
				backdrop: true,
				position: 'center',
				showCancelButton: true,
				cancelButtonText: 'Cancelar',
				preConfirm: () => {
					return {
						fontSize: $id('fontSize').value, 
						lineNumbers: $id('lineNumbers').value, 
						minimap: $id('miniMap').checked, 
						theme: $id('theme').value,
						wordWrap: $id('wordWrap').value,
						fontLigatures: $id('fontLigatures').checked,
						tabSize: $id('tabSize').value,
						smtpServer: $id('smtpServer').value,
						smtpPort: $id('smtpPort').value,
						secure: $id('enableSSL').checked,
						userEmail: $id('userEmail').value,
						userPass: $id('userPass').value
					}
				}
			})

			swalConfig.then(res => {
				if (res.value) {
					resolve(res.value)
				} else {
					reject(new Error('Se ha cancelado la configuracion'))
				}
			})
		}) 
	}

	showSendEmail() {
		const html = modalEmail()

		return new Promise((resolve, reject) => {
			const swalSendEmail = new Swal({
				title: 'Configuraciones',
				html,
				icon: 'info',
				confirmButtonText: 'Enviar',
				padding: '1rem',
				backdrop: true,
				position: 'center',
				showCancelButton: true,
				cancelButtonText: 'Cancelar',
				preConfirm: () => {
					return {
						to: $id('to').value,
						from: $id('from').value,
						subject: $id('subject').value
					}
				}
			})

			swalSendEmail.then(res => {
				if (res.value) {
					resolve(res.value)
				} else {
					reject(new Error('Se ha cancelado el envio del email'))
				}
			})
		})
	}

	showNotificationMessage(error, message, title) {
		new Swal({
			title,
			icon: error ? 'error' : 'success',
			text: message,
			padding: '1rem',
			toast: true,
			timer: 5000,
			timerProgressBar: true,
			position: 'top-end',
			showConfirmButton: false
		})
	}
}