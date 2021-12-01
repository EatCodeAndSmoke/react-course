import React from 'react';
import PropTypes from 'prop-types';

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

const Button = ({
	buttonColor,
	isSubmit,
	outline,
	buttonSize,
	buttonText,
	onClick,
	showLoader,
}) => {
	const classNames = ['btn '];
	classNames.push(`btn-${outline ? 'outline-' : ''}${buttonColor} `);
	classNames.push(`btn-${buttonSize}`);
	const classesStr = classNames.join('');
	const loader = showLoader ? (
		<span
			className='spinner-border spinner-border-sm'
			role='status'
			aria-hidden='true'
		/>
	) : null;

	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			className={classesStr}
			onClick={onClick}
			disabled={showLoader}
		>
			{loader}
			<span>{buttonText}</span>
		</button>
	);
};

Button.propTypes = {
	buttonColor: PropTypes.oneOf({ ...ButtonColor }),
	outline: PropTypes.bool,
	buttonSize: PropTypes.oneOf({ ...ButtonSize }),
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	showLoader: PropTypes.bool,
	isSubmit: PropTypes.bool,
};

Button.defaultProps = {
	buttonColor: ButtonColor.Primary,
	outline: false,
	buttonSize: ButtonSize.Medium,
	showLoader: false,
	onClick: (e) => e,
	isSubmit: false,
};

export default Button;
