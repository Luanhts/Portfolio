export function SectionTwo() {
  return (
    <section className="bg-[#EDF7FA] py-16 px-6 md:px-24">
      {/* Cabeçalho com título e link */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-[#21243D]">Recent posts</h1>
        <a href="#" className="text-[#00A8CC] hover:underline">
          View all
        </a>
      </div>

      {/* Cards dos posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="font-bold text-xl text-[#21243D] mb-2">
            Making a design system from scratch
          </h2>
          <p className="text-sm text-[#6b7280] mb-4">
            12 Feb 2020 <span className="mx-2">|</span> Design, Pattern
          </p>
          <p className="text-[#6b7280] text-base leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="font-bold text-xl text-[#21243D] mb-2">
            Creating pixel perfect icons in Figma
          </h2>
          <p className="text-sm text-[#6b7280] mb-4">
            12 Feb 2020 <span className="mx-2">|</span> Figma, Icon Design
          </p>
          <p className="text-[#6b7280] text-base leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}
