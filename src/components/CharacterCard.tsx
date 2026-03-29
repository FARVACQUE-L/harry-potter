import "./CharacterCard.css";

interface CharacterCardProps {
	imgSrc?: string;
	fullname: string;
	house: string;
	role: string;
}

function CharacterCard({ imgSrc, fullname, house, role }: CharacterCardProps) {
	return (
		<div className="characterCard-global">
			<img className="photo" src={imgSrc} alt={fullname} />
			<h2 className="fullname">{fullname}</h2>
			<p className="house">{house}</p>
			<p className="role">{role}</p>
		</div>
	);
}

export default CharacterCard;
