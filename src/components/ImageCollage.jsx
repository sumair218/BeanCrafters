import { useRef } from 'react'
import image1 from '../images/image.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

export default function ImageCollage() {
  const cardsRef = useRef([])

  const handleMouseMove = (event, card) => {
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    const rotateY = (px - 0.5) * 18
    const rotateX = (0.5 - py) * 18

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`
  }

  const resetCard = (card) => {
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <section className="collage" aria-label="Coffee craft gallery">
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className="collage-side left tilt-card"
        onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
        onMouseLeave={(event) => resetCard(event.currentTarget)}
      >
        <img src={image2} alt="Coffee preparation on the left side" />
      </div>

      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="collage-main tilt-card main-card"
        onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
        onMouseLeave={(event) => resetCard(event.currentTarget)}
      >
        <img src={image1} alt="Main coffee brewing setup" />
      </div>

      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className="collage-side right tilt-card"
        onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
        onMouseLeave={(event) => resetCard(event.currentTarget)}
      >
        <img src={image3} alt="Coffee equipment on the right side" />
      </div>
    </section>
  )
}
