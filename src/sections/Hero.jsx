import Button from "../components/Button";
import {arrowRight} from "../assets/icons";

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col border-2 justify-center min-h-screen border-red-500 gap-10 max-container p-2">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="">Our Summer collections</p>
      <h1>
        <span>
        The New Arrival
        </span>
        <br />
        <span>Nike</span>
        Shoes
      </h1>
      <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label="Shop now" iconURL = {arrowRight}/>
      </div>
    </section>
  )
}

export default Hero
