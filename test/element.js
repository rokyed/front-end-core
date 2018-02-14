import frontEndCore from './../index.js'

class MyElement extends frontEndCore.Element {
	constructor(config, ...args) {
		super(config, ...args)

		this.on('mouseup', ()=>{})
	}

	brojack (e) {
		if (e.getTarget('[data-yup="meho"]'))
			console.log('works')
		else
			console.log('no element')
	}
}


class MyParentElement extends frontEndCore.Element {
	constructor() {
		super({
			className: 'alinuska',
			renderTo: document.body,
			innerHTML: `
				<div class="my-element-will-go-here" style="display: flex;">
				</div>
				<div data-button="delete-element">
					delete
				</div>
				<div data-button="create-element">
					create
				</div>
			`
		})

		this.on('mouseup', this.onMouseUp.bind(this))

		this.createElement()
	}

	createElement() {
		if (this.myElement)
			this.myElement.destroy()

		this.myElement = new MyElement({
			renderTo: this.element().querySelector('.my-element-will-go-here'),
			className: 'bro jack rick',
			innerHTML: `
			<div class="bob" style="width: 100px; outline: 1px solid #000;">
				<div data-yup="meh" style="width:50px;height: 50px; background: #f0f;">
					help
				</div>
			</div>
			<div class="bobka">
				<div data-yup="meho" style="width:50px;height: 50px; background: #f0f;">
					help
				</div>
			</div>
			`
		})
	}

	onMouseUp(e) {
		if (e.getTarget('[data-button="create-element"]'))
			this.createElement()

		if (e.getTarget('[data-button="delete-element"]'))
			this.myElement.destroy()
	}
}

window.myElement = new MyParentElement()
