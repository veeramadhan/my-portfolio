// pages/Work.jsx (or wherever)
import Image from "next/image";
import techm from "../../../public/images/techm.png";
import billimd from "../../../public/images/biilimd.jpg";
import apple from "../../../public/images/aple.jpg";
import StickyCard from "../ui/StickyCard";

const Work = () => (
  <section
    id="work"
    className="w-full overflow-hidden min-h-screen item-center relative bg-[#0f0b1f]"
  >
    <div className="text-center py-8">
      <h1 className="text-3xl py-8 sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        My Works
      </h1>
    </div>

    {/* First Sticky Card */}
    <StickyCard>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 border border-purple-400 rounded-xl p-10 max-w-screen-lg mx-auto shadow-md">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          {/* Title & Date */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-bold">Tech Mahindra</h1>
            <h2 className="text-sm text-purple-400 font-semibold">
              Aug 2021 - Mar 2023
            </h2>
          </div>
          <h2 className="text-xl text-purple-400 font-semibold">
            Associate Software Developer
          </h2>
        
          <p className="text-white text-sm leading-relaxed">
            Developed a comprehensive Health Management application from the
            ground up, progressively integrating various modules using React.js
            for the frontend, Node.js for the backend, and MongoDB for data
            storage. Focused on building a scalable, modular architecture to
            streamline healthcare operations and enhance user experience.
          </p>
          <ul className="list-disc pl-5 text-white text-sm space-y-2">
            <li>
              Developed a Health Management application from scratch and
              progressively integrated different modules.
            </li>
            <li>
              Implemented modules like Patient Encounter History, PHQ9, 5DS,
              Case Notes, USMM, and Summary Module.
            </li>
            <li>Worked on APIs to fetch and manage data from MongoDB.</li>
            <li>
              Modernized legacy codebases to align with current development
              standards.
            </li>
            <li>
              Participated in field testing to validate software functionality
              and performance.
            </li>
            <li>
              Collaborated across the software development lifecycle from
              requirements gathering to production release.
            </li>
            <li>
              Worked with project managers to establish realistic milestones for
              pre-release development.
            </li>
            <li>
              Built robust databases and table structures for web-based
              applications.
            </li>
            <li>
              Designed dynamic, responsive pages using HTML5, CSS3, and
              JavaScript (React & Redux).
            </li>
          </ul>
        </div>
      <div className="hidden md:flex md:w-1/2 justify-center">

          <Image
            src={techm}
            alt="Tech Mahindra"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </StickyCard>

    {/* Second Sticky Card */}
    <StickyCard>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 border border-purple-400 rounded-xl p-10 max-w-screen-lg mx-auto shadow-md">
        <div className="md:w-1/2 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-bold">Apple Holidays</h1>
            <h2 className="text-sm text-purple-400 font-semibold">
              Sep 2023 - May 2024
            </h2>
          </div>
          <h2 className="text-xl text-purple-400 font-semibold">
            Junior Software Developer
          </h2>
          <p className="text-white text-sm leading-relaxed">
            Designed and developed a feature-rich e-commerce website called
            AAahaas...
          </p>
          <p className="text-white text-sm leading-relaxed">
            Designed and developed a feature-rich e-commerce website called
            AAahaas, offering a wide range of products and services across
            different categories, including essential items, non-essential
            goods, lifestyle products, education resources, hotels, and flights.
            The website was built from the ground up, from conceptualization to
            deployment, with a strong focus on user experience and
            functionality.
          </p>
          <ul className="list-disc pl-5 text-white text-sm space-y-2">
            <li>
              Web Application Development: Actively involved in the development
              of a responsive and feature- rich web application.
            </li>
            <li>
              Application Interactivity: Implemented interactive features to
              enhance user engagement and experience.
            </li>
            <li>
              Bug Resolution: Identified and resolved bugs to ensure smooth
              functioning and performance optimization of the application.
            </li>
            <li>
              Team Collaboration: Actively participated in team meetings for
              discussing and implementing new features and enhancements.
            </li>
            <li>
              Admin Dashboard Analytics: Designed and implemented analytical
              graphs for the admin dashboard to provide insights and facilitate
              data- driven decision-making.
            </li>
            <li>
              User-friendly Design: Designed and implemented user-friendly
              software solutions to enhance accessibility and responsiveness,
              adhering to established style guidelines for consistency.
            </li>
          </ul>
        </div>
      <div className="hidden md:flex md:w-1/2 justify-center">

          <Image
            src={apple}
            alt="Apple Holidays"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </StickyCard>

    {/* Third Sticky Card */}
    <StickyCard>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 border border-purple-400 rounded-xl p-10 max-w-screen-lg mx-auto shadow-md">
        <div className="md:w-1/2 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-bold">BilliMd</h1>
            <h2 className="text-sm text-purple-400 font-semibold">
              Sep 2024 - Feb 2025
            </h2>
          </div>
          <h2 className="text-xl text-purple-400 font-semibold">
            Software Developer
          </h2>
          <p className="text-white text-sm leading-relaxed">
            Developed a responsive landing page with Next.js and Tailwind CSS,
            and built an admin dashboard using React.js, FastAPI, and MongoDB
            for BilliMD to streamline healthcare credentialing and provider
            management
          </p>
          <ul className="list-disc pl-5 text-white text-sm space-y-2">
            <li>Ensuring cross-device compatibility and modern UI/UX.</li>
            <li>
              Built a user-friendly web platform for medical credentialing and
              provider enrollment, enhancing operational efficiency.
            </li>
            <li>
              Integrated Python (FastAPI) and MongoDB for a secure and scalable
              backend supporting dynamic healthcare data.
            </li>
            <li>
              Designed and implemented role-based access control and
              authentication flows for enhanced security.
            </li>
            <li>
              Collaborated with cross-functional teams to implement features,
              resolve bugs, and improve application reliability.
            </li>
            <li>
              Participated in agile development cycles, contributing to sprint
              planning, reviews, and deployments
            </li>
          </ul>
        </div>
      <div className="hidden md:flex md:w-1/2 justify-center">

          <Image
            src={billimd}
            alt="BilliMd"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </StickyCard>
  </section>
);

export default Work;
