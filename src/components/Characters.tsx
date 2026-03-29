import tabCharacters from "../assets/data/TabCharacters";
import Charactercard from "./CharacterCard";
import "./Characters.css";

function Characters() {
	return (
		<div className="Home-characters">
			{tabCharacters.map((character) => {
				return (
					<Charactercard
						imgSrc={character.imgSrc}
						fullname={character.name}
						house={character.house}
						role={character.role}
						key={character.id}
					/>
				);
			})}
		</div>
	);
}
export default Characters;
// function characters.map((character) => {
// 	return (character;
// 	)
// }
