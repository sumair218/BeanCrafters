const details = [
  { title: 'Location', text: 'Gilgit, Pakistan' },
  { title: 'Phone', text: '+92 300 1234567' },
  { title: 'Email', text: 'hello@beancrafters.com' },
  { title: 'Hours', text: 'Mon - Sat: 7:00 AM - 8:00 PM' },
  { title: 'Open', text: 'Walk-ins welcome every day' },
  { title: 'Instagram', text: '@beancrafterscoffee' },
]

export default function StoreLocator() {
  return (
    <section className="store" id="store">
      <div className="join-header">
        <p className="section-kicker">Join Us</p>
        <h2>Meet us for your next cup.</h2>
      </div>

      <div className="join-wrap">
        <div className="join-card contact-card">
          <h3>Get in touch</h3>
          <div className="contact-list">
            {details.map((d) => (
              <div key={d.title} className="contact-item">
                <span>{d.title}</span>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <button className="brew-btn join-btn">Book a table</button>
        </div>

        <div className="join-card map-card">
          <a
            className="map-visual"
            href="https://www.google.com/maps/search/Gilgit+Pakistan"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Gilgit location on Google Maps"
          >
            <div className="map-pin">📍</div>
            <div className="map-road road-1" />
            <div className="map-road road-2" />
            <div className="map-road road-3" />
            <div className="map-label">BeanCrafters</div>
          </a>
          <div className="map-caption">
            <strong>Visit our café</strong>
            <span>Gilgit • Fresh brews, handcrafted moments.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
