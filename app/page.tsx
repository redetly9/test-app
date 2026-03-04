import GradientText from "@/components/gradientText";
import { Button } from "@/components/button";
import Image from "next/image";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden bg-black text-white">
        {/* Hero */}
        <section
          className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 pt-[180px] text-center md:pt-[200px] lg:pt-[280px]"
          aria-labelledby="hero-heading"
        >
          <GradientText text="THE BEST WEBSITE EVER" />
          <h1
            id="hero-heading"
            className="font-montserrat mb-3 text-5xl font-medium leading-tight tracking-[0.02em] text-white md:text-7xl lg:text-[80px] lg:leading-[98px]"
          >
            Scalable.
          </h1>
          <p className="font-montserrat mb-10 max-w-[723px] text-base leading-[1.65] tracking-[0.72px] text-white md:text-lg lg:text-[20px]">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-2.5">
            <Button variant="solid">Get started</Button>
            <Button variant="outline">Read more</Button>
          </div>
        </section>

        {/* Hero image */}
        <div className="relative h-[30vh] min-h-[200px] w-full md:h-[40vh]">
          <Image
            src="/home/bg_image.png"
            alt=""
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 768px) 100vw, 1336px"
          />
        </div>

        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
