import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import sessionLengthAction from './redux-actions/sessionLengthAction';
import breakLengthAction from './redux-actions/breakLengthAction';
import timerCounterAction from './redux-actions/timerCounterAction';

const Decrement = (props) => {
	const dispatch = useDispatch();
	const timerType = useSelector((state) => state.timerType);
	const isTimerRunning = useSelector((state) => state.timerRunning);

	const handleClick = (e) => {
		let btnValue = e.target.value;
		let counter = props.decrement.breakSessionLength;

		if (counter <= 1) return;
		else {
			// Decrement when timer/counter is not running.
			if (!isTimerRunning) {
				if (btnValue === 'session') {
					dispatch(sessionLengthAction(counter - 1));
				} else if (btnValue === 'break') {
					dispatch(breakLengthAction(counter - 1));
				}
				// Decrement TimerCounter only if timerType is equal to btnValue.
				if (timerType === btnValue) {
					dispatch(timerCounterAction((counter - 1) * 60));
				}
			}
		}
	};

	return (
		<div className="div-arrow-down arrows">
			<button
				className="btn-arrows"
				id={`${props.decrement.breakSession}-decrement`}
				value={props.decrement.breakSession}
				onClick={(e) => {
					handleClick(e);
				}}
			>
				<FontAwesomeIcon icon={faArrowDown} className="font-awesome-icon" />
			</button>
		</div>
	);
};

export default Decrement;
