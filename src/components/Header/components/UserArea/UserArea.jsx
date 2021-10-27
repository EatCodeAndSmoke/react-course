import {
	Button,
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';

function UserArea() {
	return (
		<div className={'d-flex justify-content-center align-items-center'}>
			<h6 style={{ marginRight: '8px', marginTop: 'auto' }}>TENGO</h6>
			<Button
				buttonColor={ButtonColor.Secondary}
				outline={true}
				buttonSize={ButtonSize.Small}
				buttonText='LOGOUT'
			/>
		</div>
	);
}

export default UserArea;
