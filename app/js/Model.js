export default class Model {
	constructor() {
		this.view = null
	}

	setView(view) {
		this.view = view
	}

	async sendEmail(data) {
		const configFetch = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}

		try {
			const res = await fetch('/api/send-email', configFetch)
			const dataRes = await res.json()

			this.view.onSendEmail(dataRes)
		} catch (err) {
			console.error(err)
		}
	}
}