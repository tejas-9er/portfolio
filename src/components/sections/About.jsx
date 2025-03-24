import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "Angular",
    "Javascript",
  ];

  const backendSkills = ["Node.js", "Golang/Go", "AWS", "GCP", "Java", "PostgreSQL", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> M.S. in Computer Science </strong> - California State Polytechnic University, Pomona
                  (Jan 2019 - Dec 2020)
                </li>
                {/* <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li> */}
                <li>
                  <strong> B.S. in Computer Science </strong> - Fergusson College
                  (June 2012 - May 2015)
                </li>
                {/* <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li> */}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Google (Feb 2023 - Dec 2024){" "}
                  </h4>
                  <p>
                    During my tenure, I was a part of the CLI horizontal team for Google&apos;s private cloud(GDC air-gapped).
                    My primary responsibilities focused on creating features and utilities that other teams could utilize
                    to develop their features for the CLI. Apart from my primary responsibilities, I also participated in
                    programs to improve product quality by becoming a Principle Pioneer and stress-testing products as required.
                  </p>
                  <p>
                    Primary Tech stack: Golang, Kubernetes, Graphql, Typescript, Angular
                  </p>
                  <p>
                    Key Achievements:
                    <ul>
                      <li> Developed CLI-Trees, using Golang and Cobra, to enhance terminal configuration and enhanced the CLI performance by 10%.</li>
                      <li>Automated end-to-end testing, leading to a 30% reduction in testing time and a substantial improvement in product quality and reliability.</li>
                      <li>Led multi-zone efforts for the GDC-air gapped Command Line Interface team, ensuring timely completion of a billion-dollar contract.</li>
                      <li>Designed and implemented user-friendly utility tools, empowering sister teams to effectively utilize the CLI and create features that led to essential contract completion.</li>
                      <li>Collaborated with UX designers and cross-functional teams to create multiple downloadable CLI versions.</li>
                      <li>Significantly reduced CLI bundle size by 30%, resulting in faster download times and improved user satisfaction.</li>
                      <li>Conducted rigorous code reviews to ensure adherence to best practices, leading to a more robust and maintainable codebase.</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Full Stack Software Developer at IDG (Feb 2021 - Feb 2023){" "}
                  </h4>
                  <p>
                    During my tenure, I focused on converting intent data into human-readable metrics.
                    I was responsible for converting intent data into human-readable data, displaying
                    it on various dashboards, and creating dashboards if they did not exist.
                    I achieved this using Javascript, AngularJs, VueJs, NodeJs, and PostgreSQL Database hosted on AWS.
                  </p>
                  <p>
                    Primary Tech Stack: Javascript, AngularJs, VueJs, NodeJs, PostgreSQL, AWS
                  </p>
                  <p>
                    Key Achievements:
                    <ul>
                      <li>Developed a dashboard for the sales team to track their performance, leading to a 20% increase in sales productivity.</li>
                      <li>Implemented a data visualization tool that improved data interpretation and decision-making processes.</li>
                      <li>Migrated an entire product from AngularJS to VueJS.</li>
                      <li>Collaborated with cross-functional teams to gather requirements and deliver solutions that met business needs.</li>
                      <li>Responsible for custom data retrieval on customer demand.</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer, Research Assistant at California State Polytechnic University, Pomona(Feb 2019 - Dec 2020){" "}
                  </h4>
                  <p>
                    Key Achievements:
                    <ul>
                      <li>Developed a preprocessing model using MNE-Python that will remove the noise such as eyeblinks and muscle movement from the captured EEG signals and improve the sound to noise ratio thereby optimizing the brainprint by 30%.</li>
                      <li>Developing a website using Django, Python, HTML5, and CSS and making the code open source for further development of the EEG-security community.</li>
                      <li>Implemented one-class SVM, KNN model, and non-linear SVM using Python, and Scikit-learn, classifying participants with 96% accuracy based on their brainwaves.</li>
                      <li>Responsible for collecting quality data in a controlled environment.</li>
                      <li>Presented the research in the IEEE Big Data Conference in LA Dec 9-12, 2019</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer Intern at Project Venn(May 2018 - May 2019){" "}
                  </h4>
                  <p>
                    Key Achievements:
                    <ul>
                      <li>Developed a content-based recommender system for social networking purposes, using Python which increased the accuracy of meaningful matches by 15%.</li>
                      <li>Increased the system accuracy by increasing the user database which was achieved by creating dummy profiles with different personalities that would interact among themselves.</li>
                      <li>Collaborated remotely with offshore developers to design the recommender system and create a new graph database with Neo4j.</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer Intern at Triblio(May 2017 - Aug 2017){" "}
                  </h4>
                  <p>
                    Key Achievements:
                    <ul>
                      <li>Developed an automated end-to-end test using JavaScript and Selenium to test the functionality of the website and bypass the two-factor authentication method to automate the test.</li>
                      <li>Researched the customer data using PostgreSQL queries, Python and Java and characterize it. Presented the results to the VCs.</li>
                      <li>Assisted in the design of the machine learning model using Python and Scikit-learn, predicting the possibility of website visitors becoming a paying customer.</li>
                      <li>Helped conduct Security and IT compliance audit and certification process</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
