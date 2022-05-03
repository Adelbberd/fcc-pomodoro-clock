function breakLengthReducer(state = 5, action) {
	switch (action.type) {
		case 'BREAK_LENGTH':
			return action.payload;
		default:
			return state;
	}
}

export default breakLengthReducer;
