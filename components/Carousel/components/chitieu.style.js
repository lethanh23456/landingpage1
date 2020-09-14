import styled from 'styled-components';

const TestimonialSecWrapperCT = styled.section`
	padding: 0;
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	z-index: 1;
	margin-top: -130px;
	@media (min-width: 1600px) {
		margin-top: -180px;
	}
	@media (max-width: 1200px) {
		margin-top: -80px;
	}
	@media (max-width: 990px) {
		margin-top: -40px;
	}
	@media (max-width: 575px) {
		padding: 60px 0;
	}
	@media (max-width: 575px) {
		padding-left: 15px;
		padding-right: 15px;
		padding: 60px 0 0;
	}
	.glide--carousel {
		display: flex;
		flex-direction: column;
		.glide__track {
			order: 2;
		}
		.glide__bullets {
			.glide__bullet {
				border-radius: 50%;
				background-color: #c01718;
				opacity: 0.231;
				transition: all 0.2s ease;
				&.glide__bullet--active {
					background-color: #c01718;
					width: 24px;
					height: 8px;
					border-radius: 15px;
					opacity: 1;
				}
			}
		}
		.glide__slide {
			p {
				@media (max-width: 480px) {
					margin-right: 30px;
					margin-left: 5px;
					max-width: 320px;
				}
			}
		}
	}
	.testimonial_item {
		@media (max-width: 480px) {
			max-width: 100%;
		}
	}
`;

export const TestimonialItemCT = styled.div`
	padding: 30px 0;
	background-color: #fff;
	transition: 0.425s ease;
	@media (max-width: 1300px) {
		padding: 20px 0;
	}
`;

export const TitleCT = styled.div`
	width: 100%;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	line-height: 28px;
	color: #c01718;
`;

export const ContentCT = styled.div`margin: 32px 0;`;

export const DetailTitleCT = styled.div`
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	color: #c01718;
	margin-bottom: 6px;
`;

export const DetailDescriptionCT = styled.div`
	font-size: 16px;
	line-height: 26px;
	color: #202124;
`;

export const DetailNoteCT = styled.div`
	font-size: 16px;
	line-height: 26px;
	color: #202124;
	margin-bottom: 48px;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const TextNote = styled.div`
	width: 100%;
	text-align: center;
`;

export const ContainerCard = styled.div`
	position: relative;
	padding: 4px;
	border: 1px solid transparent;
	border-radius: 3px;
	&:hover {
		border-color: #c01718;
		box-shadow: 0px 8px 20px -6px rgba(235, 77, 75, 0.6);
		.container-link {
			display: block;
		}
	}
`;

export const ContainerLink = styled.div`
	text-align: right;
	position: absolute;
	bottom: 4px;
	right: 4px;
	display: none;
`;

export const LinkText = styled.a`
	width: 100%;
	color: #c01718;
	&:hover {
		color: #c01718;
	}
`;

export default TestimonialSecWrapperCT;
