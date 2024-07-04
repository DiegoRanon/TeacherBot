function Header() {
  function home() {}
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src="img/bot.jpg" alt="bot" className="logo" />
        </a>
        <nav className="nav">
          <a href="/create-quiz">Create a quiz</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
