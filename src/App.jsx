import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useRef } from "react";
import Divider from "./components/Divider";
import ReceptionVenue from "./sections/ReceptionVenue";
import WeddingVenue from "./sections/WeddingVenue";
import WeddingTimeline from "./sections/WeddingTimeline";
import Celebration from "./sections/Celebration";







// floating particles
const FloatingParticles = () => {

  const symbols = ["❀", "❁", "✿"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {[...Array(50)].map((_, i) => {

        const size = Math.random() * 20 + 12;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 12;
        const delay = Math.random() * 5;
        const symbol =
          symbols[Math.floor(Math.random() * symbols.length)];

        return (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: "120vh",
              x: [0, 40, -30, 20, 0],
              rotate: [0, 180, 360],
              opacity: [0, .8, .9, .7, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
            }}
            className="absolute top-0 text-[#f5deb3] drop-shadow-[0_0_8px_rgba(255,255,255,.4)]"
          >
            {symbol}
          </motion.div>
        );
      })}

    </div>
  );
};
// end

// floating pedals
const RealisticPetals = () => {

  const petals = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {petals.map((_, i) => {

        const startX = Math.random() * window.innerWidth;
        const duration = 12 + Math.random() * 10;
        const delay = Math.random() * 8;
        const size = 18 + Math.random() * 20;

        return (
          <motion.img
            key={i}
            src="/petal.png"
            alt=""
            initial={{
              y: -200,
              x: startX,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 200,

              x: [
                startX,
                startX + 40,
                startX - 30,
                startX + 20,
              ],

              rotate: [0, 120, 240, 360],

              opacity: [0, 1, 1, 1, 0.7],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${size}px`,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        );
      })}

    </div>
  );
};
// 

export default function App() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);


  const weddingDate = new Date("2026-06-25T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});
  const [opened, setOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  const BarLoader = () => {
    return (
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-2"
      >
        <motion.div variants={variants} className="h-14 w-2 bg-[#d4af37]" />
        <motion.div variants={variants} className="h-14 w-2 bg-[#d4af37]" />
        <motion.div variants={variants} className="h-14 w-2 bg-[#d4af37]" />
        <motion.div variants={variants} className="h-14 w-2 bg-[#d4af37]" />
        <motion.div variants={variants} className="h-14 w-2 bg-[#d4af37]" />
      </motion.div>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen  flex flex-col items-center justify-center">

        <BarLoader />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-[#d4af37] tracking-[6px] uppercase text-sm"
        >
          Opening Invitation
        </motion.p>

      </div>
    );
  }
  if (!opened) {

    return (

      <div className="relative h-screen overflow-hidden  flex items-center justify-center px-6">

        {/* floating orbs */}
        <div className="animated-bg"></div>

        <div className="floating-orbs">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Background Glow */}
        <div className="opening-glow"></div>

        {/* Floating Lights */}
        <div className="particles-bg"></div>

        {/* Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: .9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="
          relative
          z-10
          max-w-2xl
          w-full
          rounded-[40px]
          border
          border-[#d4af37]/20
          bg-[#07131b]/70
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(0,0,0,.6)]
          px-10
          py-20
          text-center
        "
        >

          {/* Top Text */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "2px" }}
            animate={{ opacity: 1, letterSpacing: "8px" }}
            transition={{ delay: .5, duration: 1 }}
            className="uppercase text-xs tracking-[8px] text-[#d4af37] mb-8"
          >
            New Beginings Together
          </motion.p>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7, duration: 1 }}
            className="
            text-6xl
            md:text-8xl
            font-bold
            gold-text
            leading-tight
          "
          >
            Gifty
          </motion.h1>

          <div className="flex items-center justify-center gap-5 my-8">

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]"></div>

            <div className="text-[#fff] text-xl">
              ✝
            </div>

            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]"></div>

          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .9, duration: 1 }}
            className="
            text-6xl
            md:text-8xl
            font-bold
            gold-text
            leading-tight
          "
          >
            Geo
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="
            mt-10
            text-gray-300
            text-lg
            leading-8
            max-w-xl
            mx-auto
          "
          >
            Together we and our families invite you to celebrate
            our wedding ceremony with love, joy and blessings.
          </motion.p>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="
            mt-10
            text-[#d4af37]
            tracking-[6px]
            uppercase
            text-sm
          "
          >
            25 • June • 2026
          </motion.p>

          {/* Open Button */}
          <motion.button

            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1.5,
              duration: 1,
            }}

            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 40px rgba(212,175,55,.45)",
            }}

            whileTap={{
              scale: .96,
            }}

            onClick={() => {

              setLoading(true);

              setTimeout(() => {

                setLoading(false);
                setOpened(true);

                setTimeout(() => {

                  if (audioRef.current) {
                    audioRef.current.play();
                  }

                }, 300);

              }, 3000);

            }}

            className="
    relative
    overflow-hidden
    mt-14
    px-14
    py-5
    rounded-full
    text-lg
    font-semibold
    tracking-[3px]
    uppercase
    border
    border-[#d4af37]/30
    bg-[#0b1620]/70
    text-[#f8e7b0]
    backdrop-blur-xl
    transition-all
    duration-500
  "
          >

            {/* Animated Shine */}
            <span className="shine"></span>

            {/* Glow Pulse */}
            <span className="button-glow"></span>

            <span className="relative z-10">
              Open Invitation
            </span>

          </motion.button>

        </motion.div>

      </div>

    );
  }

  return (
      <div className="main-background text-white overflow-hidden relative">

        <div className="fog"></div>

      {/* Music */}
      <audio
        ref={audioRef}
        loop
        src="/bg-music.mp3"
      />

      <button
        onClick={() => {

          if (!audioRef.current) return;

          if (isMuted) {
            audioRef.current.muted = false;
            audioRef.current.play();
          } else {
            audioRef.current.muted = true;
          }

          setIsMuted(!isMuted);
        }}
        className="
    fixed
    top-4
    right-4
    z-50
    h-14
    w-14
    rounded-2xl
    border
    border-[#d4af37]/40
    bg-[#08141d]/80
    backdrop-blur-md
    flex
    items-center
    justify-center
    text-[#d4af37]
    transition-all
    duration-300
    hover:scale-105
    hover:border-[#d4af37]
    hover:shadow-[0_0_20px_rgba(212,175,55,.25)]
    music-glow
  "
      >
        {isMuted ? (
          <VolumeX size={22} />
        ) : (
          <Volume2 size={22} />
        )}
      </button>

      {/* Hero */}
      <section className="hero-section h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <RealisticPetals />
        <FloatingParticles />

        <div className="hero-light"></div>

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 float-animation"
        >

          <p className="uppercase tracking-[2px] text-sm text-gray-300 mb-8">
            "So they are no longer two but one flesh. What therefore God has joined together, let not man separate." <br></br><span className="white-heading right-float pt-3">— Matthew 19:6</span>
          </p>

          <h1 className="text-6xl pt-4 md:text-9xl font-bold gold-text">
            Gifty
          </h1>

          <h1 className="text-6xl mt-2 md:text-7xl font-bold white-heading">
            &
          </h1>


          <h1 className="text-6xl md:text-9xl font-bold gold-text">
            Geo
          </h1>

          <p className="mt-10 text-lg tracking-[5px] text-gray-200">
            25 • 06 • 2026
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="luxury-btn mt-10 px-10 py-5 rounded-full text-lg font-semibold"
          >
            Save The Date
          </motion.button>

        </motion.div>

      </section>

      {/* Countdown */}
      <section className="section-padding text-center px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl gold-text mb-6"
        >
          Countdown To Forever
        </motion.h2>

        <Divider />

        <div className="flex justify-center gap-6 flex-wrap mt-14">

          {Object.entries(timeLeft).map(([key, value]) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={key}
              className="countdown-box rounded-3xl w-32 p-8"
            >
              <div className="text-5xl gold-text font-bold">
                {value}
              </div>

              <div className="uppercase text-sm tracking-[3px] text-gray-300 mt-3">
                {key}
              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Story */}
      {/* <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          className="text-5xl mb-8 white-heading"
        >
          Our Story
        </motion.h2>

        <p className="text-gray-300 leading-8 text-lg white-heading">
          A beautiful journey of love, faith and destiny that brought us together forever.
        </p>
      </section> */}


      {/* Wedding Timeline */}
      <WeddingTimeline />


      {/*Wedding Venue */}
      <WeddingVenue />

      {/* Reception Venue */}
      <ReceptionVenue />

      {/* Celebration */}
      <Celebration/>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 bg-[#041116]">
        Made with love for Gifty & Geo
      </footer>
    </div>
  );
}