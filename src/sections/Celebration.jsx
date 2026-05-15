import { motion } from "framer-motion";
import Divider from "../components/Divider";

export default function Celebration() {

  return (

<section className="section-padding px-6 text-center relative z-10">

        <h2 className="text-5xl gold-text mb-6">
          Join Our Celebration
        </h2>

        <Divider/>

        <p className="text-gray-300 mt-8 text-lg font-mono">
          Your presence is the greatest blessing to us.
        </p>

        <p className="text-gray-300 mt-8 text-lg font-mono">
          With hearts full of love and joy, we invite you to celebrate this beautiful beginning with us. Your prayers, laughter, and presence will make our special day even more memorable as we step into a new chapter together.
        </p>


        {/* <a
          href="https://wa.me/919025342877"
          target="_blank"
          className="luxury-btn inline-block mt-10 px-10 py-5 rounded-full text-lg font-semibold"
        >
          RSVP On WhatsApp
        </a> */}

      </section>

    );
}