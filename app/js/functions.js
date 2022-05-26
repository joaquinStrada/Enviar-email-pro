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