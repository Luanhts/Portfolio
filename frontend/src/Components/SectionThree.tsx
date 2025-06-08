import projectImg2 from "../assets/imgs/project-img2.png"

export function SectionThree() {
  return (
    <section id="Projetos" className="px-4 md:px-20 py-16 bg-white">
      <h1 className="text-3xl font-semibold text-[#21243D] mb-12 text-center md:text-center">
        Meus Projetos
      </h1>

      <div className="space-y-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-6 border-b border-[#E0E0E0] pb-10">
          <img
            src={projectImg2}
            alt="Designing Dashboards"
            className="w-full md:w-64 h-auto rounded-md object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#21243D]">Sistema Web ( MondeLuxe )</h2>
            <div className="flex items-center gap-4 my-3">
              <span className="bg-[#FF4C61] text-white text-sm px-3 py-1 rounded font-bold">
                2025
              </span>
              <span className="text-[#8695A4] text-sm">Gestão</span>
            </div>
            <p className="text-[#21243D] text-base leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row gap-6 border-b border-[#E0E0E0] pb-10">
          <img
            src={projectImg2}
            alt="Vibrant Portraits of 2020"
            className="w-full md:w-64 h-auto rounded-md object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#21243D]">Controle Fácil</h2>
            <div className="flex items-center gap-4 my-3">
              <span className="bg-[#FF4C61] text-white text-sm px-3 py-1 rounded font-bold">
                2025
              </span>
              <span className="text-[#8695A4] text-sm">Sistema Web</span>
            </div>
            <p className="text-[#21243D] text-base leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row gap-6 border-b border-[#E0E0E0] pb-10 ">
          <img
            src={projectImg2}
            alt="36 Days of Malayalam type"
            className="w-full md:w-64 h-auto rounded-md object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#21243D]">TSW PG ( Save Your Future )</h2>
            <div className="flex items-center gap-4 my-3">
              <span className="bg-[#FF4C61] text-white text-sm px-3 py-1 rounded font-bold">
                2025
              </span>
              <span className="text-[#8695A4] text-sm">Hackathon</span>
            </div>
            <p className="text-[#21243D] text-base leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </div>


        {/* Card 4 */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={projectImg2}
            alt="36 Days of Malayalam type"
            className="w-full md:w-64 h-auto rounded-md object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#21243D]">Smart Report</h2>
            <div className="flex items-center gap-4 my-3">
              <span className="bg-[#FF4C61] text-white text-sm px-3 py-1 rounded font-bold">
                2024
              </span>
              <span className="text-[#8695A4] text-sm">Web App</span>
            </div>
            <p className="text-[#21243D] text-base leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
