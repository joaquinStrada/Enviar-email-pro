import Editor from './components/Editor'
import Preview from './components/Preview'

export default class View {
	constructor() {
		this.model = null

		this.editor = new Editor()
		this.preview = new Preview()

		this.editor.onChange(e => this.onChangeEditor(e))
	}

	setModel(model) {
		this.model = model
	}

	onChangeEditor(e) {
		const { html, css, js } = e

		this.preview.render(html, css, js)
	}
}