function timerTypeReducer(state = 'session', action) {
	switch (action.type) {
		case 'TIMERTYPE':
			return action.payload;
		default:
			return state;
	}
}

export default timerTypeReducer;
