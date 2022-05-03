function timerRunningAction(payload) {
	return {
		type: 'TIMER_RUNNING',
		payload: payload,
	};
}

export default timerRunningAction;
