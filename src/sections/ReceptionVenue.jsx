import { motion } from "framer-motion";
import Divider from "../components/Divider";

export default function ReceptionVenue() {

  return (

      <section className="section-padding px-6 bg-[#041116]">

        <h2 className="text-5xl text-center gold-text mb-6">
          Reception Venue
        </h2>

        <Divider/>

        <div className="max-w-6xl mx-auto mt-16 overflow-hidden rounded-[30px] video-frame">

          <iframe
            src="https://maps.google.com/maps?q=CSI%20Church%20Edaikode&t=&z=13&ie=UTF8&iwloc=&output=embed"
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

          <p className="text-gray-400 mt-3">
            Thursday • June 25 • 2026
          </p>
        </div>

      </section>

        );
}