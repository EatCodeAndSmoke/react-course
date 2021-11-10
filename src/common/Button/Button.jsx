export const ButtonColor = {
	Primary: 'primary',
	Secondary: 'secondary',
	Danger: 'danger',
	Success: 'success',
};

export const ButtonSize = {
	Big: 'bg',
	Medium: 'md',
	Small: 'sm',
};

export function Button({
	buttonColor,
	outline,
	buttonSize,
	buttonText,
	onClick,
}) {
	const classNames = ['btn '];

	classNames.push(
		`btn${outline === true ? '-outline' : ''}${
			'-' + buttonColor + ' ' ?? '-primary '
		}`
	);

	if (buttonSize && buttonSize !== ButtonSize.Medium)
		classNames.push(`btn-${buttonSize}`);

	const classesStr = classNames.join('');

	return (
		<button
			className={classesStr}
			onClick={(e) => {
				if (onClick) {
					e.preventDefault();
					onClick();
				}
			}}
		>
			<span>{buttonText}</span>
		</button>
	);
}
