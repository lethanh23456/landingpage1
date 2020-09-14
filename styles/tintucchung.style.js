/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardTin = styled.a`
	display: block;
	border-radius: 20px;
	box-shadow: 0 6px 12px rgba(163, 177, 191, .40);
	height: 200px;
	margin-bottom: 20px;
	&:hover {
		border-color: #c01718;
		box-shadow: 0px 0px 6px rgb(204, 12, 34);
		// .container-link {
		// 	display: block;
		// }
	}
`;

export const Title = styled.h2`
	font-size: 21px;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
	@media screen and (max-width: 1220px) {
		font-size: 16px;
	}
`;

export const FirstTin = styled.a`
	display: block;
	border-radius: 20px;
	box-shadow: 0 6px 12px rgba(163, 177, 191, .40);
	/* height: 500px; */
	margin-bottom: 20px;
	&:hover {
		border-color: #c01718;
		box-shadow: 0px 0px 6px rgb(204, 12, 34);
		// .container-link {
		// 	display: block;
		// }
	}
`;
