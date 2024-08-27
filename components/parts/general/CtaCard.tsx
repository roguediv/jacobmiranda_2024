import Image from "next/image"
import BtnForm from "@/components/popups/BtnForm"
type props = {
  className?: string;
  type ?: number;
}

const CtaCard : React.FC<props> = ({className = '', type = 1}) => {
  switch (type) {
    case 1:
      return (
        <section className="CtaCard v1">
          <div className="sct-content">
            <div className="card">
              <div className="background">
                <Image 
                  src={`/images/assets/robodeal.png`}
                  width={500}
                  height={500}
                  alt="Robotic hands shaking as if they made a deal."/>
              </div>
              <div className="content">
                <h2>Eager to make an impact with you</h2>
                <p>If you like what you've seen and believe I can add value to your team, let's connect! I'm passionate about creating innovative solutions and am eager to contribute to your company's success. </p>
                <BtnForm form='ContactForm' text='Contact Me' />
              </div>
            </div>
          </div>
        </section>
        )
    case 2: 
      return (
        <div className="review CtaCard v2">
          <h4>Go on, hit that contact button! Your project deserves a champion and that's me.</h4>
          <div className="featured-review">
            <svg preserveAspectRatio="none" viewBox="0 0 1026 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1026 0.5H679.28L658.691 13H345.736L325.146 0.5H0V298H1026V0.5Z" fill="url(#paint0_linear_473_17753)"/><defs><linearGradient id="paint0_linear_473_17753" x1="514.569" y1="-333.426" x2="672.985" y2="314.695" gradientUnits="userSpaceOnUse"><stop stop-color="#40C997"/><stop offset="1" stop-color="#116661"/></linearGradient></defs></svg>
            <div className="content">
              <p>If you like what you've seen and believe I can add value to your team, let's connect! I'm passionate about creating innovative solutions and am eager to contribute to your company's success.</p>
              <p className="v2">I'm eager to make an impact with you <br /> - Jacob</p>
              <BtnForm form='ContactForm' text='Contact Me' />
            </div>
            <div className="img-hldr">
              <Image className="imgPrev" src="/images/assets/robot.png" width={700} height={700} alt="Robot Holding Phone" />
            </div>
          </div>
        </div>
      )
  }

}

export default CtaCard