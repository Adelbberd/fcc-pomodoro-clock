import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import timerTypeAction from './redux-actions/timerTypeAction';
import timerCounterAction from './redux-actions/timerCounterAction';
import timerRunningAction from './redux-actions/timerRunningAction';
import breakLengthAction from './redux-actions/breakLengthAction';
import sessionLengthAction from './redux-actions/sessionLengthAction';

const PlayStopReset = (props) => {
	// state
	const dispatch = useDispatch();
	const isTimerRunning = useSelector((state) => state.timerRunning);
	const breakLength = useSelector((state) => state.breakLength);
	const sessionLength = useSelector((state) => state.sessionLength);
	const timerCounter = useSelector((state) => state.timerCounter);
	const timerType = useSelector((state) => state.timerType);
	const [intervalId, setIntervalId] = useState(null);
	const [timer, setTimer] = useState(timerCounter);
	const audioBeepElem = document.getElementById('beep');

	useEffect(() => {
		if (timer <= 0) {
			audioBeepElem.play();
			if (timerType === 'session') {
				setTimer(breakLength * 60);
				dispatch(timerCounterAction(breakLength * 60));
				dispatch(timerTypeAction('break'));
			} else if (timerType === 'break') {
				setTimer(sessionLength * 60);
				dispatch(timerCounterAction(sessionLength * 60));
				dispatch(timerTypeAction('session'));
			}
		} else if (isTimerRunning) {
			dispatch(timerCounterAction(timer));
		}
	}, [
		breakLength,
		sessionLength,
		timerType,
		timer,
		dispatch,
		isTimerRunning,
		audioBeepElem,
	]);

	useEffect(() => {
		setTimer(timerCounter);
	}, [timerCounter]);

	function handlePlayStop() {
		if (isTimerRunning) {
			clearInterval(intervalId);
			setIntervalId(null);
			dispatch(timerRunningAction(false));
			audioBeepElem.pause();
			audioBeepElem.currentTime = 0;
		} else {
			dispatch(timerRunningAction(true));
			const timerIntervalId = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
			setIntervalId(timerIntervalId);
		}
	}

	function reset() {
		clearInterval(intervalId);
		setIntervalId(null);
		dispatch(timerRunningAction(false));
		dispatch(timerTypeAction('session'));
		dispatch(breakLengthAction(5));
		dispatch(sessionLengthAction(25));
		dispatch(timerCounterAction(25 * 60));
		audioBeepElem.pause();
		audioBeepElem.currentTime = 0;
	}

	return (
		<div className="play-stop-reset">
			<div id="start_stop">
				<button className="btn-play-stop-reset" onClick={handlePlayStop}>
					<FontAwesomeIcon icon={faPlay} className="font-awesome-icon" />
					<FontAwesomeIcon icon={faPause} className="font-awesome-icon" />
				</button>
			</div>
			<div id="reset">
				<button className="btn-play-stop-reset" onClick={reset}>
					<FontAwesomeIcon icon={faRedoAlt} className="font-awesome-icon" />
				</button>
			</div>
		</div>
	);
};

export default PlayStopReset;
