import BreakSession from './BreakSession';
import CountDownTimer from './CountDownTimer';
import PlayStopReset from './PlayStopReset';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function App() {
	// Global state.
	const sessionLength = useSelector((state) => state.sessionLength);
	const breakLength = useSelector((state) => state.breakLength);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Pomodoro 25 + 5 Clock</h1>
			</header>
			<div className="break-session-timer">
				<div className="app-break">
					<BreakSession breakSession="break" breakSessionLength={breakLength} />
				</div>
				<div className="play-timer">
					<PlayStopReset />
					<CountDownTimer />
				</div>
				<div className="app-session">
					<BreakSession
						breakSession="session"
						breakSessionLength={sessionLength}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;

