function timerCounterAction(payload) {
	return {
		type: 'COUNTER',
		payload: payload,
	};
}

export default timerCounterAction;
