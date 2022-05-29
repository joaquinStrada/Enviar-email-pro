import { $id } from '../functions'
import * as monaco from 'monaco-editor'

export default class Editor {
	constructor() {
		this.divEditor = $id('editor')
		this.editor = null
		this.pagination = {
			html: $id('page-html'),
			css: $id('page-css'),
			js: $id('page-js')
		}

		this.commonEditorOptions = {
			fontSize: 18,
			theme: 'vs-dark'
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

		// eslint-disable-next-line no-unused-vars
		this.callbackOnChange = e => {}

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
			this.divEditor.classList.contains(key) &&
            this.divEditor.classList.remove(key)
		}

		// hacemos el cambio
		this.pagination[page].classList.add('is-active')
		this.divEditor.classList.add(page)
		this.codeEditor[page].enabled = true

		// seteamos el editor segun corresponda
		const language = page == 'js' ? 'javascript' : page
		this.divEditor.innerHTML = ''
		this.editor = monaco.editor.create(this.divEditor, {
			value: this.codeEditor[page].code,
			language,
			...this.commonEditorOptions
		})
		this.editor.onDidChangeModelContent(() => this.onChange())
	}

	setOnChange(callback) {
		this.callbackOnChange = callback
	}

	onChange() {
		for (const key in this.codeEditor) {
			if (this.codeEditor[key].enabled) {
				this.codeEditor[key].code = this.editor.getValue()
			}
		}

		const event = {}
		event.html = this.codeEditor.html.code
		event.css = this.codeEditor.css.code
		event.js = this.codeEditor.js.code

		this.callbackOnChange(event)
	}

	render() {
		this.editor = monaco.editor.create(this.divEditor, {
			value: '',
			language: 'html',
			...this.commonEditorOptions
		})

		this.editor.onDidChangeModelContent(() => this.onChange())
	}
}