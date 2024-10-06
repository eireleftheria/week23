import "./header.css";

function Header({ title = "To Do List" }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
