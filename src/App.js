import './Main.scss';

import Deck from './components/Deck/Deck';
import Flashcards from './content/Flashcards';

function App() {
  return (
    <div className="page-wrapper">
		<Deck cards={Flashcards}/>
	</div>
  );
}

export default App;
