import Editor from './components/Editor'
import Preview from './components/Preview'
import SweetAlert from './components/SweetAlert'

import { $id } from './functions/functions'
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
			console.log(err.message)
		}
	}
}