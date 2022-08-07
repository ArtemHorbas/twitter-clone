import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
)
