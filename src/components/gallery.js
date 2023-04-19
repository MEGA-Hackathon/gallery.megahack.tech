import { Composition } from "atomic-layout";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	margin-top: 40px;
	text-align: center;
`;
const Header = styled.h1`
	font-size: 1.1rem;
	font-weight: 500;
	text-align: center;
`;
const BigImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;
const GalleryImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

const headerLayout = `Image Description`;
const galleryLayout = `
	Image1 Image2 Image3
	Image4 Image5 Image6
	Image7 Image8 Image9
`;

export const Gallery = (props) => {
	const { title, image, description, gallery } = props;
	return (
		<>
			<Title>{title}</Title>
			<Composition areas={headerLayout} gap={20}>
				{({ Image, Description }) => (
					<>
						<Image>
							<BigImage src={image} />
						</Image>
						<Description>{description}</Description>
					</>
				)}
			</Composition>

			<Header>Gallery</Header>
			<Composition areas={galleryLayout} gapCol={10} gapRow={3}>
				{({ Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 }) => (
					<>
						<Image1>
							<GalleryImage src={gallery[0]} />
						</Image1>
						<Image2>
							<GalleryImage src={gallery[1]} />
						</Image2>
						<Image3>
							<GalleryImage src={gallery[2]} />
						</Image3>
						<Image4>
							<GalleryImage src={gallery[3]} />
						</Image4>
						<Image5>
							<GalleryImage src={gallery[4]} />
						</Image5>
						<Image6>
							<GalleryImage src={gallery[5]} />
						</Image6>
						<Image7>
							<GalleryImage src={gallery[6]} />
						</Image7>
						<Image8>
							<GalleryImage src={gallery[7]} />
						</Image8>
						<Image9>
							<GalleryImage src={gallery[8]} />
						</Image9>
					</>
				)}
			</Composition>
		</>
	);
};
