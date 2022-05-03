import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import sessionLengthAction from './redux-actions/sessionLengthAction';
import breakLengthAction from './redux-actions/breakLengthAction';
import timerCounterAction from './redux-actions/timerCounterAction';

const Increment = (props) => {
	/** A component to increment the pomodoro break and session length by 1 **/
	const dispatch = useDispatch();
	const timerType = useSelector((state) => state.timerType);
	const isTimerRunning = useSelector((state) => state.timerRunning);

	const handleClick = (e) => {
		let btnValue = e.target.value;
		let counter = props.increment.breakSessionLength;

		if (counter >= 60) return;
		else {
			// Increment when timer/counter is not running.
			if (!isTimerRunning) {
				if (btnValue === 'session') {
					dispatch(sessionLengthAction(counter + 1));
				} else if (btnValue === 'break') {
					dispatch(breakLengthAction(counter + 1));
				}
				// Increment TimerCounter only if timerType is equal to btnValue.
				if (timerType === btnValue) {
					dispatch(timerCounterAction((counter + 1) * 60));
				}
			}
		}
	};

	return (
		<div className="div-arrow-up arrows">
			<button
				className="btn-arrows"
				id={`${props.increment.breakSession}-increment`}
				value={props.increment.breakSession}
				onClick={handleClick}
			>
				<FontAwesomeIcon icon={faArrowUp} className="font-awesome-icon" />
			</button>
		</div>
	);
};

export default Increment;
