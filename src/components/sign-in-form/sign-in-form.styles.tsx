import styled from 'styled-components';

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;

	h2 {
		margin: 10px 0;
	}

	@media screen and (max-width: 1024px) {
		width: 350px;
		margin-bottom: 50px;
		border-bottom: 2px solid black;
		text-align: center;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 1024px) {
		margin-bottom: 50px;
		white-space: nowrap;
		gap: 10px;
	}
`;
