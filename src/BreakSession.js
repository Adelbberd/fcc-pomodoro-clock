import Decrement from './Decrement';
import Increment from './Increment';

const BreakSession = (props) => {
	return (
		<div className="break-session">
			<div className="label-length" id={`${props.breakSession}-label`}>
				{`${props.breakSession[0].toUpperCase()}${props.breakSession.slice(1)}`}
			</div>
			<Decrement decrement={props} />
			<Increment increment={props} />
			<div className="label-length" id={`${props.breakSession}-length`}>
				{props.breakSessionLength}
			</div>
		</div>
	);
};

export default BreakSession;
