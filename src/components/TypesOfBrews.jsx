const brews = [
  {
    title: 'Velvet Latte',
    tag: 'Signature',
    text: 'Espresso, steamed milk, and a silky caramel finish.',
    price: '$6.50',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
  },
  {
    title: 'Cinnamon Cappuccino',
    tag: 'Popular',
    text: 'A bold espresso with foamy milk and warm spice.',
    price: '$6.20',
    img: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=900&q=80',
  },
  {
    title: 'Cold Brew Bloom',
    tag: 'Fresh',
    text: 'Slow-steeped, extra smooth, and naturally sweet.',
    price: '$5.80',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=80',
  },
  {
    title: 'Hazelnut Mocha',
    tag: 'Best Seller',
    text: 'Rich chocolate, toasted hazelnut, and creamy espresso.',
    price: '$7.10',
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80',
  },
]

export default function TypesOfBrews() {
  return (
    <section className="brews" id="brews">
      <div className="brews-header">
        <p className="section-kicker">Our Menu</p>
        <h2>Freshly crafted coffee & favorites</h2>
      </div>

      <div className="brews-grid">
        {brews.map((b) => (
          <article className="brew-card" key={b.title}>
            <div className="brew-card-image">
              <img src={b.img} alt={b.title} />
              <span className="brew-tag">{b.tag}</span>
            </div>

            <div className="brew-card-body">
              <div className="brew-card-head">
                <h3>{b.title}</h3>
                <span>{b.price}</span>
              </div>
              <p>{b.text}</p>
              <button className="brew-btn">Add to cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
