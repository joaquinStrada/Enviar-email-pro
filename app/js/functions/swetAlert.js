export const modalConfig = (
	fontSize, 
	lineNumbers, 
	minimap, 
	theme,
	wordWrap,
	fontLigatures,
	tabSize,
	smtpServer,
	smtpPort,
	enableSSL,
	userEmail,
	userPass) => {
	return `
        <h2 class="swal2-title" id="swal2-title" style="display: block;margin-bottom: 10px;">
            Editor
        </h2>
        <hr/>
        <label for="fontSize" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Tamaño de Letra:
        </label>
        <input 
            type="number" 
            class="swal2-input" 
            autocorrect="off" 
            autocapitalize="none" 
            spellcheck="false" 
            wrap="off" 
            value="${fontSize}" 
            min="1" 
            max="100" 
            step="1"
            id="fontSize"
        >

        <label for="tabSize" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Tamaño del Tab:
        </label>
        <input 
            type="number" 
            class="swal2-input" 
            autocorrect="off" 
            autocapitalize="none" 
            spellcheck="false" 
            wrap="off" 
            value="${tabSize}" 
            min="1" 
            max="100" 
            step="1"
            id="tabSize"
        >

        <label for="lineNumbers" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Línea de números:
        </label>
        <select class="swal2-select" id="lineNumbers">
            <option value="" disabled="">Línea de números</option>
            <option value="on" ${lineNumbers == 'on' && 'selected=""'}>On</option>
            <option value="off" ${lineNumbers == 'off' && 'selected=""'}>Off</option>
            <option value="relative" ${lineNumbers == 'relative' && 'selected=""'}>Relative</option>
            <option value="interval" ${lineNumbers == 'interval' && 'selected=""'}>Interval</option>
        </select>

        <input type="checkbox" class="check-sweet" id="miniMap" ${minimap && 'checked=""'}>
        <label for="miniMap" class="label-check-sweet" id="swal2-html-container">
            Mini Mapa
        </label>

        <label for="theme" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Tema:
        </label>
        <select class="swal2-select" id="theme">
            <option value="" disabled="">Tema</option>
            <option value="vs-dark" ${theme == 'vs-dark' && 'selected=""'}>Dark</option>
            <option value="vs" ${theme == 'vs' && 'selected=""'}>Ligth</option>
            <option value="hc-black" ${theme == 'hc-black' && 'selected=""'}>High Contrast Dark</option>
        </select>

        <label for="wordWrap" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Ajuste de línea:
        </label>
        <select class="swal2-select" id="wordWrap">
            <option value="" disabled="">Ajuste de línea</option>
            <option value="on" ${wordWrap == 'on' && 'selected=""'}>On</option>
            <option value="off" ${wordWrap == 'off' && 'selected=""'}>Off</option>
            <option value="wordWrapColumn" ${wordWrap == 'wordWrapColumn' && 'selected=""'}>WordWrapColumn</option>
            <option value="bounded" ${wordWrap == 'bounded' && 'selected=""'}>Bounded</option>
        </select>

        <input type="checkbox" class="check-sweet" id="fontLigatures" ${fontLigatures && 'checked=""'}>
        <label for="fontLigatures" class="label-check-sweet" id="swal2-html-container">
            Fuente de Ligaduras
        </label>

        <h2 class="swal2-title" id="swal2-title" style="display: block;margin-bottom: 10px;">
            Email Proveedor
        </h2>
        <hr/>

        <label for="smtpServer" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Smtp Server:
        </label>
        <input 
            type="text" 
            class="swal2-input" 
            autocapitalize="none" 
            spellcheck="false" 
            wrap="off" 
            value="${smtpServer}" 
            id="smtpServer"
        >

        <label for="smtpPort" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Smtp Port:
        </label>
        <input 
            type="number" 
            class="swal2-input" 
            autocorrect="off" 
            autocapitalize="none" 
            spellcheck="false" 
            wrap="off" 
            value="${smtpPort}" 
            min="1" 
            max="45003" 
            step="1"
            id="smtpPort"
        >

        <input type="checkbox" class="check-sweet" id="enableSSL" ${enableSSL && 'checked=""'}>
        <label for="enableSSL" class="label-check-sweet" id="swal2-html-container">
            Habilitar SSL
        </label>

        <label for="userEmail" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Email:
        </label>
        <input 
            type="text" 
            class="swal2-input" 
            autocapitalize="none" 
            spellcheck="false" 
            wrap="off" 
            value="${userEmail}" 
            id="userEmail"
        >

        <label for="userPass" class="swal2-html-container" id="swal2-html-container" style="display: block;">
            Contraseña:
        </label>
        <input 
            type="password" 
            class="swal2-input" 
            autocapitalize="none" 
            spellcheck="false" 
            wrap="off" 
            value="${userPass}" 
            id="userPass"
        >
    `
}