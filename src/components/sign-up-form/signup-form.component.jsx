import { useState } from 'react';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={submitHandler}>
				<label>Display Name</label>
				<input
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					required
				/>
				<label>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					required
				/>
				<label>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					required
				/>
				<label>Confirm Password</label>
				<input
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default SignUp;
