import { motion } from "framer-motion";
import Divider from "../components/Divider";

export default function WeddingVenue() {

  return (

      <section className="section-padding px-6 relative z-10">

        <h2 className="text-5xl text-center gold-text mb-6">
          Wedding Venue
        </h2>

        <Divider/>

        <div className="max-w-6xl mx-auto mt-16 overflow-hidden rounded-[30px] video-frame">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.1917598998953!2d77.18934757277312!3d8.362214893927296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ad519652a191%3A0xd73391b8275417cb!2sC.S.I.%20Pastorate%20Church%2C%20Edaicode%20(Kancode)!5e1!3m2!1sen!2sin!4v1778676116356!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          

        </div>

        <div className="text-center mt-10">
          <h3 className="text-3xl gold-text">
            CSI Church, Edaikode
          </h3>

          <p className="text-gray-400 mt-3 font-mono">
            Thursday • June 25 • 2026
          </p>
        </div>

      </section>

        );
}