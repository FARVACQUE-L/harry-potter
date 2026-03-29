import logo from "../assets/logo-hp.png";

import "./Navbar.css";

function Navbar() {
	return (
		<nav className="nav-global">
			<img src={logo} alt="logo harry potter doré" className="nav-logo" />
			<ul className="nav-ul">
				<li className="nav-li">Home</li>
				<li className="nav-li">Contact</li>
			</ul>
		</nav>
	);
}

export default Navbar;
