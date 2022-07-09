import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 300px;
	height: 350px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	button {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.div`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	scrollbar-width: none; // Hide scrollbar Firefox

	//  Hide scrollbar for Chrome, Safari and Opera
	&::-webkit-scrollbar {
		display: none;
	}
`;
