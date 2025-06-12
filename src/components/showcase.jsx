"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "showcase_images/7p.png",
    "showcase_images/html.png",
    "showcase_images/css.png",
    "showcase_images/js.png",
    "showcase_images/twind.jpeg",
    "showcase_images/cloud.jpg",
    "https://assets.aceternity.com/hero-highlight.png",
    "showcase_images/coder.jpg",
    "https://assets.aceternity.com/signup-form.png",
    "showcase_images/bootsrap.png",
    "showcase_images/react.png",
    "showcase_images/python.jpeg",
    "showcase_images/cpp.jpg",
    "showcase_images/github.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "showcase_images/netcat.jpeg",
    "showcase_images/kali.jpg",
    "showcase_images/steal_data.jpg",
    "showcase_images/rudrakali.png",
    
    "showcase_images/hacker.jpg",
    "showcase_images/netcat.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "showcase_images/burp.png",
    "showcase_images/burp.png",
    "showcase_images/cmdchat.png",
    "showcase_images/3.png",
  ];
  return (
    <div
      className="hidden sm:block mx-auto h-[600px] sm:h-[700px] lg:h-[800px] w-full overflow-hidden rounded-3xl bg-[#030317] p-2 mb-20">
      <ThreeDMarquee images={images} />
    </div>
  );
}

export default ThreeDMarqueeDemo;

