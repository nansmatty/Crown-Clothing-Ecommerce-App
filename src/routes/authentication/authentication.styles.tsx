import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	display: flex;
	width: 1000px;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;
