import Img1 from '../assets/laferrari002.jpg';
import Img2 from '../assets/porscheGT3.jpg';
import Img3 from '../assets/bugatti-mistral.jpg';
import Img4 from '../assets/huracanCabrio.png';
import '../styles/Carousel.css';

export const carouselItems = [
	{
		className: "d-block w-100 carousel-image",
		src: Img1,
		alt: "First slide",
		captionTitle: "Welcome with Us",
		captionDescription: "Here you can find your satisfaction",
		id: 1,
	},
	{
		className: "d-block w-100 carousel-image",
		src: Img2,
		alt: "Second slide",
		captionTitle: "Enjoy to stay here",
		captionDescription: "Let your eyes shine",
		id: 2,
	},
	{
		className: "d-block w-100 carousel-image",
		src: Img3,
		alt: "Third slide",
		captionTitle: "Choose your car",
		captionDescription: "A lot of various model for your pleasure",
		id: 3,
	},
	{
		className: "d-block w-100 carousel-image",
		src: Img4,
		alt: "Fourth slide",
		captionTitle: "Take away your dream",
		captionDescription: "Don't miss this chance!",
		id: 4,
	},
];