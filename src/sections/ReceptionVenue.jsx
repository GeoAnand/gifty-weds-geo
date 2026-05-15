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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.227934234569!2d77.23332029382638!3d8.206994163298209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fe64116b923d%3A0x92ed7ef3ae5ccc9d!2sC.S.I%20Community%20Hall!5e1!3m2!1sen!2sin!4v1778847301954!5m2!1sen!2sin"
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