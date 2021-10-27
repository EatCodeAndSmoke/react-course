export const TextInputType = {
	Text: 'text',
	Search: 'search',
	Email: 'email',
	Password: 'password',
};

export function TextInput({ textInputType, placeholder, onTextChange }) {
	return (
		<input
			className={'form-control'}
			type={textInputType}
			placeholder={placeholder}
			onChange={onTextChange}
		/>
	);
}

export function TextArea({ placeholder, onTextChange }) {
	return (
		<textarea
			className={'form-control'}
			name=''
			id=''
			cols='30'
			rows='5'
			placeholder={placeholder}
			onChange={onTextChange}
		></textarea>
	);
}
