import banner from "../assets/ban-harry-potter.png";

import "./Banner.css";

function Banner() {
	return (
		<section className="banner-Global">
			<img src={banner} alt="Le titre Harry Potter" className="banner-image" />
		</section>
	);
}

export default Banner;
