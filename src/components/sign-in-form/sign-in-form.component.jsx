import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	emailSignInStart,
	googleSignInStart,
} from '../../store/user/user.action';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignIn = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);

	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user asoociated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={submitHandler}>
				<FormInput
					label='Email'
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					required
				/>
				<FormInput
					label='Password'
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					required
				/>
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPES_CLASSES.google}
						onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
