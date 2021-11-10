import { Button, ButtonSize } from '../../../../../../common/Button/Button';

function AuthorRecord({ author, btnColor, btnText, onAuthorBtnClick }) {
	return (
		<div className='d-flex justify-content-center align-items-center mt-2'>
			<span style={{ marginRight: '7px' }}>{author.name}</span>
			<Button
				buttonColor={btnColor}
				outline={true}
				ButtonSize={ButtonSize.Small}
				buttonText={btnText}
				onClick={() => onAuthorBtnClick(author)}
			/>
		</div>
	);
}

export default AuthorRecord;
