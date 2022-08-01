import styled from 'styled-components';

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	row-gap: 50px;

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const CategoryTitle = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
	text-transform: capitalize;
	letter-spacing: 2px;

	@media screen and (max-width: 1024px) {
		font-size: 30px;
		letter-spacing: 1.5px;
	}
`;
