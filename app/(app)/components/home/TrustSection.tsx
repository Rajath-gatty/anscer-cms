import Image from "next/image";
import { FadeUp } from "../animation";
import { imagePath, videoPath } from "./assets";
import { clientLogos } from "./home-data";

export function TrustSection() {
  return (
    <section
      id="client-section"
      className="relative flex flex-col justify-between overflow-hidden bg-white pb-[clamp(16px,4vw,24px)] pt-[clamp(24px,7vw,40px)] md:block md:min-h-[720px] md:pb-0 md:pt-16 lg:min-h-[840px] 2xl:min-h-[900px] 3xl:min-h-[1000px] 4xl:min-h-[1100px] 5xl:min-h-[1200px] lg:pt-28"
    >
      <FadeUp className="site-container relative z-10">
        <div className="mx-auto max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight md:text-[clamp(60px,3.5vw,73px)] 4xl:text-[clamp(60px,4vw,80px)]">
            Engineered in India.
            <br />
            Built for the <span className="text-[#005ead] font-montserrat">World.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[120%] text-[#4d4d4d]   md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)]">
            Designed, engineered and validated in India, ANSCER’s Autonomous Mobile Robots are built for reliable, scalable material movement across global industrial operations.
          </p>
        </div>
      </FadeUp>
      <div className="relative mt-[clamp(8px,2vw,16px)] aspect-[1.64] w-full overflow-hidden md:absolute md:inset-0 md:mt-0 md:h-full md:aspect-auto">
        <video
          className="h-[165%] w-full -translate-y-[36%] object-cover object-center md:h-full md:translate-y-0"
          autoPlay
          muted
          loop
          playsInline
          poster={`${videoPath}clients-video_poster.0000000.jpg`}
        >
          <source src={`${videoPath}clients-video-new.mp4`} type="video/mp4" />
          <source
            src={`${videoPath}clients-video_webm.webm`}
            type="video/webm"
          />
        </video>
      </div>
      <div className="relative z-10 mt-[clamp(14px,4vw,24px)] overflow-hidden py-3 md:absolute md:inset-x-0 md:bottom-3 md:mt-0">
        <div className="logo-marquee flex w-max items-center gap-20 contrast-[1.4] brightness-75">
          {[...clientLogos, ...clientLogos, ...clientLogos].map(
            (logo, index) => (
              <Image
                key={`${logo}-${index}`}
                src={`${imagePath}${logo}`}
                alt=""
                width={210}
                height={82}
                className="h-16 w-auto object-contain md:h-20 3xl:h-24 4xl:h-28"
              />
            ),
          )}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full bg-linear-to-b from-[#005EAD]/70 via-[#005EAD]/40 to-white/0 h-22 opacity-60"></div>
    </section>
  );
}

// export function TrustSection() {
//   return (
//     <section
//       id="client-section"
//       className="relative flex flex-col justify-between overflow-hidden bg-white"
//     >
//       <FadeUp className="site-container relative z-10 md:absolute md:top-24 md:left-1/2 md:-translate-x-1/2">
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-[36px] font-bold leading-tight tracking-tight md:text-[60px]">
//             Engineered in India.
//             <br />
//             Trusted <span className="text-[#005ead]">Everywhere.</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#4d4d4d]    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)]">
//             Born in India, for the world, we deliver precision-engineered
//             automation trusted by industry leaders. Our homegrown innovation
//             powers global performance with reliability, intelligence, and
//             impact.
//           </p>
//         </div>
//       </FadeUp>
//       <div className="relative mt-[clamp(8px,2vw,16px)] aspect-[1.64] w-full overflow-hidden md:aspect-auto">
//         <video
//           className="h-[165%] w-full -translate-y-[36%] object-cover object-center md:h-full md:translate-y-0"
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster={`${videoPath}clients-video_poster.0000000.jpg`}
//         >
//           <source src={`${videoPath}clients-video-latest.mp4`} type="video/mp4" />
//           {/* <source
//             src={`${videoPath}clients-video_webm.webm`}
//             type="video/webm"
//           /> */}
//         </video>
//       </div>
//       <div className="relative z-10 mt-[clamp(14px,4vw,24px)] overflow-hidden py-3 md:absolute md:bottom-0">
//         <div className="logo-marquee flex w-max items-center gap-20 grayscale contrast-[1.4] brightness-75">
//           {[...clientLogos, ...clientLogos, ...clientLogos].map(
//             (logo, index) => (
//               <Image
//                 key={`${logo}-${index}`}
//                 src={`${imagePath}${logo}`}
//                 alt=""
//                 width={210}
//                 height={82}
//                 className="h-16 w-auto object-contain md:h-20"
//               />
//             ),
//           )}
//         </div>
//       </div>

//       <div className="absolute top-0 left-0 w-full bg-linear-to-b from-[#005EAD]/70 via-[#005EAD]/40 to-white/0 h-22 opacity-60"></div>
//     </section>
//   );
// }