import { Link } from "gatsby"
import React from "react"
import classnames from 'classnames'

export default class FaqItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
	}

	handleItemClick () {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render () {
		const {question, answer, link} = this.props;

		return (
			<div className={classnames('faq-item', {'isOpen': this.state.isOpen})} onClick={this.handleItemClick.bind(this)}>
				<div className='faq-question'>{question}</div>
				<div className='faq-answer basic-text'>{answer}{link && <a className='faq-link' href={`mailto:${link}`}>{link}</a>}</div>
			</div>
		)
	}
}
