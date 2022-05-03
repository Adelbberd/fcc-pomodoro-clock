function sessionLengthReducer(state = 25, action) {
	switch (action.type) {
		case 'SESSION_LENGTH':
			return action.payload;
		default:
			return state;
	}
}

export default sessionLengthReducer;
