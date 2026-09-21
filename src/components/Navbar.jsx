export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-mark">☕</span>
          BeanCrafters
        </div>
        <input className="nav-search" placeholder="Explore" />
        <nav className="nav-links">
          <button className="link">Our Blends ▾</button>
          <button className="btn-join">Join Us</button>
        </nav>
      </div>
    </header>
  )
}
