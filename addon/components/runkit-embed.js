import Ember from 'ember'
import layout from '../templates/components/runkit-embed'

export default Ember.Component.extend({
	layout,
	init() {
		this.evaluate = this.evaluate.bind(this)
		this._super(...arguments)
	},
	evaluate() {
		this.get('notebook').evaluate()
	},
	didInsertElement() {
		const props = this.getProperties([
			'source',
			'readOnly',
			'mode',
			'nodeVersion',
			'env',
			'title',
			'minHeight',
			'packageTimestamp',
			'preamble',
			'onLoad',
			'onURLChanged',
			'onEvaluate'
		])

		const element = this.$('.embed')[0]
		const notebook = window.RunKit.createNotebook(Object.assign({ element }, props))
		this.set('notebook', notebook)
	}
})

