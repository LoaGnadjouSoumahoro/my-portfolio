import About from "./About";
import Container from "./Container";
import Navbar from "./Navbar";
import Projets from "./Projets";
import Tools from "./Tools";

export default function Home() {
  return (
    <div>
      <div className="w-10/12 mx-auto pt-4">
        <Navbar />
      </div>
      <Container />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"></div>
      <About />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"></div>
      <Projets />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"></div>
      <Tools />
      <div className="w-10/12 mx-auto my-10">
        <div className="flex items-start text-2xl text-neutral-300">
          <p className="text-5xl mr-2 mt-[2px]">&#169;</p>Perfect Code
          <small className="mt-[2px] ml-2">2024</small>
        </div>
      </div>
    </div>
  );
}
