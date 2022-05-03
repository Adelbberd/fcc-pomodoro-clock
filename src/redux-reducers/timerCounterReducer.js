const initialState = 25 * 60;

function timerCounterReducer(state = initialState, action) {
	switch (action.type) {
		case 'COUNTER':
			return action.payload;
		default:
			return state;
	}
}

export default timerCounterReducer;
