import * as React from 'react';
import './Deck.scss';

import Flashcard from '../Flashcard/Flashcard';

class Deck extends React.Component {
	constructor(props) {
		super(props);
		this.state = { cards: [], active: 0, width: 0, windowHeight: 0 };
	}

	renderCards() {
		return this.state.cards.map((c, i) => 
			<Flashcard image={c.image} title={c.title} artist={c.artist} date={c.date} 
				active={i == this.state.active}/>
		)
	}

	handleKeyPress(e) {
		var key = e.key;
		var newActive = this.state.active;
        if (key == "ArrowRight") { newActive += 1; }
        if (key == "ArrowLeft") { newActive -= 1; }

		if (newActive < 0) { newActive = 0; }
		if (newActive >= this.state.cards.length) { newActive = this.state.cards.length - 1; }

		this.setState({active: newActive});
	}

	updateDimensions() {
		const width = this.el.clientWidth;
		this.setState({width});
		const windowHeight = window.innerHeight;
		this.setState({windowHeight});
	}

	componentDidMount() {
		let cards = this.props.cards;
		cards = cards.sort(() => Math.random() - 0.5);
		this.setState({cards});

		this.updateDimensions();
  		window.addEventListener('resize', this.updateDimensions);
	}

	render() {
		const cards = this.renderCards();

		const cardHeight = this.state.width * 0.6 + 40;
		const deckTopMargin = {
			marginTop: (-cardHeight * this.state.active + (this.state.windowHeight - cardHeight) * .5) + "px"
		};

		return (
			<div className="deck" onKeyDown={this.handleKeyPress.bind(this)} tabIndex="0">
				<div className="flashcards" ref={(el) => {this.el = el}} 
					style={deckTopMargin}>
					{cards}
				</div>
			</div>
		)
	}
}

export default Deck;