const features = [
  {
    title: 'Select Beans',
    text: 'We source the finest beans for perfect roasting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 11.5a8.5 8.5 0 1 1-8.5-8.5 4 4 0 0 1 4 4 4 4 0 0 0 4 4.5Z" />
      </svg>
    ),
  },
  {
    title: 'Precise Roasting',
    text: 'Balanced heat and timing for the best flavor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 3.5h6M12 7v-3.5" />
      </svg>
    ),
  },
  {
    title: 'Unique Blends',
    text: 'From bold to smooth, find your perfect cup.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" strokeDasharray="6 4" />
      </svg>
    ),
  },
  {
    title: 'Taste Quality',
    text: 'Every sip holds the promise of excellence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="10" width="18" height="8" rx="1.5" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
      </svg>
    ),
  },
]

export default function RoastingExcellence() {
  return (
    <>
      <section className="roasting">
        <div className="roasting-grid">
          <div className="roasting-copy">
            <h2>Roasting Excellence</h2>
            <p>Every step in our roast is steeped in care.</p>
            <a className="btn-outline" href="#brews">
              Explore Blends
            </a>
          </div>
          <div className="roasting-image">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80"
              alt="Barista carefully pouring water over coffee in a glass carafe"
            />
          </div>
        </div>
      </section>

      <div className="features">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}
