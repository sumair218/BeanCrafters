export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>BeanCraft</h4>
          <a href="#">Our Story</a>
          <a href="#">Join Team</a>
          <a href="#">Latest News</a>
        </div>
        <div className="footer-col">
          <h4>Why Us</h4>
          <a href="#">Freshness</a>
          <a href="#">Blends</a>
          <a href="#">In the Press</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#">@BeanCraftCafe</a>
          <a href="#">@BeanCraftCafe</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-col">
          <h4>Brew Insights</h4>
          <p>Subscribe for brewing guides and cafe news.</p>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@beancraftcafe.com" />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
    </footer>
  )
}
