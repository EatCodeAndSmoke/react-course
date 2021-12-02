const onInputChangeHandler = (state, setState) => (evt) => {
	const val = evt.target.value;

	setState({
		...state,
		[evt.target.name]: typeof state[evt.target.name] === 'string' ? val : +val,
	});
};

export default onInputChangeHandler;
