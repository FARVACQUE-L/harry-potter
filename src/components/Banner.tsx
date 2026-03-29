import bannerTitle from "../assets/ban-harry-potter.png";
import bannerHouse from "../assets/house.png";
import bannerVif from "../assets/vifOr.png";

import "./Banner.css";

function Banner() {
	return (
		<section className="banner-Global">
			<img
				src={bannerHouse}
				alt="Le blason des maisons"
				className="banner-house"
			/>
			<img
				src={bannerTitle}
				alt="Le titre Harry Potter"
				className="banner-title"
			/>
			<img src={bannerVif} alt="Vif d'or" className="banner-vif" />
		</section>
	);
}

export default Banner;
