import { RevealOnScroll } from "../RevealOnScroll";

export const Publication = () => {
  return (
    <section
      id="publication"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Publication
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> An Authentication System using Neurological Responses to Music</h3>
              <p className="text-gray-400 mb-4">
                We created an authentication mechanism that depends on the participant&apos;s neurological responses
                to chosen pieces of music measured using electroencephalographic (EEG) signals.
                Volunteers listened to individually selected music and music selected by other participants
                during an EEG reading. The change in the Alpha and Beta band frequencies across seven
                electrodes served as the input to a user-specific K-Nearest Neighbors (KNN).
                The classifier attempts to determine if we can identify a user based on their EEG response to music.
                The pilot data collection and analysis have shown promise of this authentication system with an accuracy rate between 76.4%-92.3%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://ieeexplore.ieee.org/document/9006491"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Paper →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
