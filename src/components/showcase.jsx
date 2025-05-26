"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "../src/assets/showcase_images/7p.png",
    "../src/assets/showcase_images/html.png",
    "../src/assets/showcase_images/css.png",
    "../src/assets/showcase_images/js.png",
    "../src/assets/showcase_images/twind.jpeg",
    "../src/assets/showcase_images/cloud.jpg",
    "https://assets.aceternity.com/hero-highlight.png",
    "../src/assets/showcase_images/coder.jpg",
    "https://assets.aceternity.com/signup-form.png",
    "../src/assets/showcase_images/bootsrap.png",
    "../src/assets/showcase_images/react.png",
    "../src/assets/showcase_images/python.jpeg",
  
    "../src/assets/showcase_images/cpp.jpg",
    
    "../src/assets/showcase_images/github.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "../src/assets/3.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "../src/assets/2.png",
    "../src/assets/showcase_images/3.png",
  ];
  return (
    <div
      className="mx-auto h-screen my-10 mt-0 rounded-3xl bg-[#030317] p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}

export default ThreeDMarqueeDemo;

