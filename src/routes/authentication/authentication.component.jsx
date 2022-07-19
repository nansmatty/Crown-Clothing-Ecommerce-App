import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import SignUp from '../../components/sign-up-form/signup-form.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
	const navigate = useNavigate();

	const currentUser = useSelector(selectCurrentUser);

	useEffect(() => {
		if (currentUser) {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<AuthenticationContainer>
			<SignIn />
			<SignUp />
		</AuthenticationContainer>
	);
};

export default Authentication;
