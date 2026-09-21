import image1 from '../images/image.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

export default function ImageCollage() {
  return (
    <section className="collage" aria-label="Coffee craft gallery">
      <div className="collage-side left tilt-card card-one">
        <img src={image2} alt="Coffee preparation on the left side" />
      </div>

      <div className="collage-main tilt-card main-card card-two">
        <img src={image1} alt="Main coffee brewing setup" />
      </div>

      <div className="collage-side right tilt-card card-three">
        <img src={image3} alt="Coffee equipment on the right side" />
      </div>
    </section>
  )
}
