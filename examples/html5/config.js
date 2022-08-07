import '../../dist/vlite.css'
import '../../dist/plugins/subtitle.css'
import '../../dist/plugins/chromecast.css'
import Vlitejs from '../../dist/vlite.js'
import VlitejsSubtitle from '../../dist/plugins/subtitle.js'
import VlitejsPip from '../../dist/plugins/pip.js'
import VlitejsChromecast from '../../dist/plugins/chromecast.js'

Vlitejs.registerPlugin('subtitle', VlitejsSubtitle)
Vlitejs.registerPlugin('pip', VlitejsPip)
Vlitejs.registerPlugin('chromecast', VlitejsChromecast, {
	textTrackStyle: {
		backgroundColor: '#21212190'
	},
	metadata: {
		title: 'The Jungle Book',
		subtitle: 'Walt Disney Animation Studios'
	}
})

/* eslint-disable no-unused-vars */
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
		autoHide: true
	},
	plugins: ['subtitle', 'pip', 'chromecast'],
	onReady: function (player) {
		console.log(player)

		// player.on('play', () => console.log('play'))
		// player.on('pause', () => console.log('pause'))
		// player.on('progress', () => console.log('progress'))
		// player.on('timeupdate', () => console.log('timeupdate'))
		// player.on('volumechange', () => console.log('volumechange'))
		// player.on('enterfullscreen', () => console.log('enterfullscreen'))
		// player.on('exitfullscreen', () => console.log('exitfullscreen'))
		// player.on('enterpip', () => console.log('enterpip'))
		// player.on('leavepip', () => console.log('leavepip'))
		// player.on('trackenabled', () => console.log('trackenabled'))
		// player.on('trackdisabled', () => console.log('trackdisabled'))
		// player.on('ended', () => console.log('ended'))
	}
})
window.player = vlite
/* eslint-enable no-unused-vars */
