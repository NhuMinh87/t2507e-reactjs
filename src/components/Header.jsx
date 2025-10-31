import "./../assets/css/Header.css"

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/fpt-logo.png" alt="FPT Aptech" />
        <span>FPT Aptech</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Booking</a></li>
        <li><a href="#">Locations</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="btn signin">Sign In</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </header>
  )
}

export default Header
