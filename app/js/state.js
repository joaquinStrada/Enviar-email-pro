import create from 'zustand/vanilla'
import { getLocalStorage, setLocalStorage } from './functions/functions'
import { editorConfig, emailConfig } from './data/initialSettings'

const appInitialState = getLocalStorage('appInitialState') || {
	fontSize: editorConfig.fontSize,
	lineNumbers: editorConfig.lineNumbers,
	minimap: editorConfig.minimap,
	theme: editorConfig.theme,
	wordWrap: editorConfig.wordWrap,
	fontLigatures: editorConfig.fontLigatures,
	tabSize: editorConfig.tabSize,
	smtpServer: emailConfig.smtpServer,
	smtpPort: emailConfig.smtpPort,
	secure: emailConfig.secure,
	userEmail: emailConfig.userEmail,
	userPass: emailConfig.userPass,
}

const useStore = create(() => ({
	...appInitialState,
	saveSettings: dataSettings => {
		setLocalStorage('appInitialState', dataSettings)
	}
}))

export const { 
	getState, 
	setState, 
	subscribe, 
	destroy 
} = useStore