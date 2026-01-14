/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'google-sans': ['Google Sans', 'sans-serif'],
				'gravitas': ['Gravitas One', 'monospace'],
				'handjet': ['Handjet', 'monospace'],
				'jetbrains': ['JetBrains Mono', 'monospace'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'rubik-mono': ['Rubik Mono One', 'monospace'],
				'sixtyfour': ['Sixtyfour', 'monospace'],
				'vt323': ['VT323', 'monospace'],
				'workbench': ['Workbench', 'monospace']
			},
			screens: {
				'xs': '375px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px'
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)'
			},
			minHeight: {
				'touch-target': '44px'
			},
			minWidth: {
				'touch-target': '44px'
			}
		}
	},
	plugins: []
}
