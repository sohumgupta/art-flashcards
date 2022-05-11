import * as React from 'react';
import './Flashcard.scss';

class Flashcard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { flipped: false };
	}

	flip() {
		if (!this.props.active) { return; }
		this.setState({flipped: !this.state.flipped});
	}

	handleKeyPress(e) {
		var key = e.key;
		console.log(key);
        if (key == " ") { this.flip(); }
	}

	render() {
		if (!this.props.active && this.state.flipped) { this.setState({flipped: false})};

		let activeStyle = (this.props.active) ? "" : " inactive ";
		let flippedStyle = (this.state.flipped) ? " flipped " : "";
		return (
			<div className={"flashcard" + activeStyle + flippedStyle} onClick={this.flip.bind(this)} onKeyDown={this.handleKeyPress.bind(this)} tabIndex="0">
				<div className="flashcard-inner">
					<div className="image">
						<img src={this.props.image}/>
					</div>
					<div className="info">
						<p class="title">{this.props.title}</p>
						<p class="artist">{this.props.artist} ({this.props.date})</p>
						{/* <p class="date">{this.props.date}</p> */}
					</div>
				</div>
			</div>
		)
	}
}

export default Flashcard;