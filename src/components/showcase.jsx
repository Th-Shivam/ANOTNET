"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "showcase_images/7p.png",
    "showcase_images/html5.png",
    "showcase_images/css3.png",
    "showcase_images/js.png",
    "showcase_images/twind.jpeg",
    "showcase_images/cloud.jpg",
    "showcase_images/apis.jpg",
    "showcase_images/vs.jpg",
    "showcase_images/vs.jpg",
    "showcase_images/bootstrap.png",
    "showcase_images/react.png",
    "showcase_images/python.png",
    "showcase_images/cpp1.jpg",
    "showcase_images/github.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "showcase_images/SQL.png",
    "showcase_images/apis.jpg",
    "showcase_images/aws.jpeg",
    "showcase_images/kali.jpg",
    "showcase_images/steal_data.jpg",
    "showcase_images/rudrakali.png",

    "showcase_images/hacker.jpg",

    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "showcase_images/burp.png",
    "showcase_images/burp.png",
    "showcase_images/cmdchat.png",
    "showcase_images/3.png",
  ];
  return (
    <div
      className="hidden sm:block mx-auto h-[600px] sm:h-[700px] lg:h-[800px] w-full overflow-hidden rounded-3xl bg-[#030317] p-2 mb-32">
      <ThreeDMarquee images={images} />
    </div>
  );
}

export default ThreeDMarqueeDemo;

