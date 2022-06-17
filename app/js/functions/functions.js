export const $id = id => document.getElementById(id)

export const $ = selector => document.querySelector(selector)

export const $$ = selector => document.querySelectorAll(selector)

export const createHtml = (html, css, js) => (
	`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style type="text/css">
            ${css}
        </style>
    </head>
    <body>
        ${html}
        <script type="text/javascript">
            ${js}
        </script> 
    </body>
    </html>
    `
)

export const getLocalStorage = key => JSON.parse(localStorage.getItem(key))

export const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const createOptionsEditor = (state, fontFamily) => {
	return {
		fontSize: state.fontSize,
		theme: state.theme,
		lineNumbers: state.lineNumbers,
		minimap: {
			enabled: state.minimap
		},
		tabSize: state.tabSize,
		wordWrap: state.wordWrap,
		fontLigatures: state.fontLigatures,
		fontFamily
	}
}

export const validateSendEmail = (from, to, subject, 
	smtpServer, smtpPort, secure, userEmail, userPass,
	html, css, js) => {
	if (from == '' || to == '' || subject == '') {
		return {
			error: true,
			message: 'Porfavor complete correctamente el formulario'
		}
	} else if (smtpServer == '' || smtpPort == '' || secure == null || userEmail == '' || userPass == '') {
		return {
			error: true,
			message: 'Porfavor configure correctamente el email del proveedor'
		}
	} else if (html == '' && css == '' && js == '') {
		return {
			error: true,
			message: 'Porfavor cree una pagina web para enviar'
		}
	} else {
		return {
			error: false,
			message: ''
		}
	}
}