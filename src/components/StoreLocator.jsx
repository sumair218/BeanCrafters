const details = [
  { title: 'Sustainability', text: 'Committed to eco-friendly roasting practices.' },
  { title: 'Direct Trade', text: 'Supporting farmers with fair prices.' },
  { title: 'Local Favorite', text: 'Voted best coffee shop in town.' },
  { title: 'Workshops', text: 'Learn the art of coffee making.' },
  { title: 'Cafe Events', text: 'Live music, poetry nights, and more.' },
  { title: 'Quiet Corners', text: 'Your nook for work or relaxation.' },
]

export default function StoreLocator() {
  return (
    <section className="store" id="store">
      <h2>Find a store nearby</h2>
      <p>Join us in our cozy corner of warmth.</p>
      <div className="store-image">
        <img
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200&q=80"
          alt="Latte art in a ceramic cup surrounded by coffee beans"
        />
      </div>
      <div className="store-details">
        {details.map((d) => (
          <div key={d.title}>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
