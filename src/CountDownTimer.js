import { useSelector } from 'react-redux';

const CountDownTimer = (props) => {
	const timerType = useSelector((state) => state.timerType);
	const counter = useSelector((state) => state.timerCounter);
	const minutes = parseInt(counter / 60);
	const seconds = parseInt(counter % 60);
	const timerColor = counter <= 60 ? '#d15a60' : '#796465';

	return (
		<div className="count-down-timer">
			<div id="timer-label" style={{ color: timerColor }}>
				{timerType === 'session' ? 'Session' : 'Break'}
			</div>

			<div id="time-left" style={{ backgroundColor: timerColor }}>{`${
				minutes < 10 ? '0' + minutes : minutes
			}:${seconds < 10 ? '0' + seconds : seconds}`}</div>

			<audio id="beep">
				<source src="https://res.cloudinary.com/dvyztjvrj/video/upload/v1643209871/pomodoro-clock-sounds/mixkit-digital-clock-digital-alarm-buzzer-992_yl1i3a.wav" />
			</audio>
		</div>
	);
};

export default CountDownTimer;
