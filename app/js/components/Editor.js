import { $id } from '../functions'

export default class Editor {
	constructor() {
		this.editor = $id('editor')
		this.pagination = {
			html: $id('page-html'),
			css: $id('page-css'),
			js: $id('page-js')
		}

		this.codeEditor = {
			html: {
				enabled: true,
				code: ''
			},
			css: {
				enabled: false,
				code: ''
			},
			js: {
				enabled: false,
				code: ''
			}
		}

		this.pagination.html.addEventListener('click', e => this.onClickPagination(e, 'html'))
		this.pagination.css.addEventListener('click', e => this.onClickPagination(e, 'css'))
		this.pagination.js.addEventListener('click', e => this.onClickPagination(e, 'js'))
		this.render()
	}

	onClickPagination(e, page) {
		e.preventDefault()
		
		if (this.codeEditor[page].enabled) return // si la pagina esta activa retornamos

		// ponemos todo a cero
		for (const key in this.pagination) {
			this.codeEditor[key].enabled = false
			this.pagination[key].classList.contains('is-active') && 
            this.pagination[key].classList.remove('is-active')
			this.editor.classList.contains(key) &&
            this.editor.classList.remove(key)
		}

		// hacemos el cambio
		this.pagination[page].classList.add('is-active')
		this.editor.classList.add(page)
		this.codeEditor[page].enabled = true

		// seteamos el ediotor segun corresponda
		this.editor.value = this.codeEditor[page].code
		this.editor.placeholder = page == 'html' ? 'HTML' :
			page == 'css' ? 'CSS' : 'JS'
	}

	onChange(callback) {
		this.editor.addEventListener('input', () => {
			for (const key in this.codeEditor) {
				if (this.codeEditor[key].enabled) {
					this.codeEditor[key].code = this.editor.value
				}
			}

			const event = {}
			event.html = this.codeEditor.html.code
			event.css = this.codeEditor.css.code
			event.js = this.codeEditor.js.code

			callback(event)
		})
	}

	render() {
		this.editor.value = ''
	}
}