import { $id, createHtml } from '../functions'

export default class Preview {
	constructor() {
		this.iframe = $id('page-iframe')
	}

	render(html, css, js) {
		const pageHtml = createHtml(html, css, js)
		this.iframe.setAttribute('srcdoc', pageHtml)
	}
}