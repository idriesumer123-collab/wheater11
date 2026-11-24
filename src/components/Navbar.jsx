function Navbar() {
  return (
    <nav>
      <h2>MY PORTFOLIO</h2>
      <p className="nav-links">
        <a href="#home">Home</a>
        {' | '}
        <a href="#a">About</a>
        {' | '}
        <a href="#skills">Skills</a>
        {' | '}
        <a href="#projects">Projects</a>
        {' | '}
        <a href="#contact">Contact</a>
      </p>
    </nav>
  )
}

export default Navbar
