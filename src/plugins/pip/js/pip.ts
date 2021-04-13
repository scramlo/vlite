import svgPip from 'shared/assets/svgs/pip.svg'
import { Options, pluginParameter } from 'shared/assets/interfaces/interfaces'

export default class PiP {
	player: any
	pipButton!: HTMLElement

	providers = ['html5']
	types = ['video']

	/**
	 * @constructor
	 * @param {Object} options
	 * @param {Class} options.player Player instance
	 */
	constructor({ player }: pluginParameter) {
		this.player = player

		this.onClickOnPipButton = this.onClickOnPipButton.bind(this)
		this.onEnterPip = this.onEnterPip.bind(this)
		this.onLeavePip = this.onLeavePip.bind(this)
	}

	/**
	 * Initialize
	 */
	init() {
		if (this.isPipApiAvailable() && this.player.options.controls) {
			this.render()

			this.pipButton = this.player.elements.container.querySelector('.v-pipButton') as HTMLElement

			this.addEvents()
		}
	}

	/**
	 * Check if the PIP API is available and not disabled
	 * @returns {Boolean} PIP API status
	 */
	isPipApiAvailable(): Boolean {
		return (
			'pictureInPictureEnabled' in document &&
			!this.player.media.hasAttribute('disablePictureInPicture')
		)
	}

	/**
	 * Render the plugin DOM
	 */
	render() {
		const template = `<button class="v-pipButton v-controlButton">${svgPip}</button>`
		const controlBar = this.player.elements.container.querySelector('.v-controlBar')
		const fullscreenButton = this.player.elements.container.querySelector(
			'.v-fullscreenButton'
		) as HTMLElement

		if (controlBar) {
			if (fullscreenButton) {
				fullscreenButton.insertAdjacentHTML('beforebegin', template)
			} else {
				controlBar.insertAdjacentHTML('beforeend', template)
			}
		}
	}

	/**
	 * Add event listeners
	 */
	addEvents() {
		this.pipButton.addEventListener('click', this.onClickOnPipButton)
		this.player.media.addEventListener('enterpictureinpicture', this.onEnterPip)
		this.player.media.addEventListener('leavepictureinpicture', this.onLeavePip)
	}

	/**
	 * On click on the PIP button
	 * @param {Event} e Event data
	 */
	async onClickOnPipButton(e: Event) {
		e.preventDefault()

		try {
			if (this.player.media !== document.pictureInPictureElement) {
				// @ts-ignore
				await this.player.media.requestPictureInPicture()
			} else {
				await document.exitPictureInPicture()
			}
		} catch (error) {
			console.warn(`vlitejs :: ${error}`)
		}
	}

	/**
	 * On enter the PIP
	 * @param {Event} e Event data
	 */
	onEnterPip(e: Event) {
		this.player.dispatchEvent('enterpip')
	}

	/**
	 * On leave the PIP
	 * @param {Event} e Event data
	 */
	onLeavePip(e: Event) {
		this.player.dispatchEvent('leavepip')
	}
}
