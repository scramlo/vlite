import '../../dist/vlite.css'
import Vlitejs from '../../dist/vlite.js'
import VlitejsVimeo from '../../dist/providers/vimeo.js'

Vlitejs.registerProvider('vimeo', VlitejsVimeo)
const vlite = new Vlitejs('#player', {
	options: {
		controls: true,
		autoplay: false,
		playPause: true,
		progressBar: true,
		time: true,
		volume: true,
		fullscreen: true,
		poster: 'https://yoriiis.github.io/cdn/static/vlitejs/demo-poster.jpg',
		bigPlay: true,
		playsinline: true,
		loop: false,
		muted: false,
		autoHide: true,
		providerParams: {}
	},
	provider: 'vimeo',
	onReady: (player) => {
		console.log(player)

		player.on('play', () => console.log('play'))
		player.on('pause', () => console.log('pause'))
		player.on('progress', () => console.log('progress'))
		player.on('timeupdate', () => console.log('timeupdate'))
		player.on('volumechange', () => console.log('volumechange'))
		player.on('enterfullscreen', () => console.log('enterfullscreen'))
		player.on('exitfullscreen', () => console.log('exitfullscreen'))
		player.on('ended', () => console.log('ended'))
	}
})
