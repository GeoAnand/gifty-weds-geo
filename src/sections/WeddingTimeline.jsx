import { motion } from "framer-motion";
import Divider from "../components/Divider";

export default function WeddingTimeline() {

  return (

    <section className="section-padding px-6 bg-[#041116]">
    
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto"
            >
    
              <h2 className="text-5xl text-center mb-6 white-heading">
                Wedding Timeline
              </h2>
              <Divider/>
              <div className="relative border-l border-[#7f6424] ml-6">
    
                {[
                  {
                    title: "Guest Arrival",
                    time: "Jun 25, 2026 • 4:00 PM",
                  },
    
                  {
                    title: "Wedding Ceremony",
                    time: "Jun 25, 2026 • 5:00 PM",
                  },
    
                  {
                    title: "Holy Communion",
                    time: "Jun 25, 2026 • 6:00 PM",
                  },
    
                  {
                    title: "Dinner Reception",
                    time: "Jun 25, 2026 • 7:00 PM",
                  },
    
                  {
                    title: "Dance & Celebration",
                    time: "Jun 25, 2026 • 9:00 PM",
                  },
    
                ].map((event, index) => (
    
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                    className="mb-20 ml-10 relative"
                  >
    
                    {/* Golden Dot */}
                    <div className="absolute -left-[54px] top-2 w-5 h-5 rounded-full bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,.7)]"></div>
    
                    {/* Content */}
                    <div className="glass-card p-6 rounded-3xl">
    
                      <h3 className="text-3xl gold-text font-semibold">
                        {event.title}
                      </h3>
    
                      <p className="mt-3 text-gray-300 text-lg tracking-wide">
                        {event.time}
                      </p>
    
                    </div>
    
                  </motion.div>
    
                ))}
    
              </div>
    
            </motion.div>
    
          </section>
        );
}