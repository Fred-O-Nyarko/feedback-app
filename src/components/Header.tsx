import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface IHeaderProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const Header = ({
  text = "Feedback UI",
  bgColor = "rgba(0,0,0,0.4)",
  textColor = "#ff6a95",
}: IHeaderProps) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "#ff6a95" }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
