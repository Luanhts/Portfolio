export function SectionThree() {
    return (
      <section className="px-4 md:px-20 py-16">
        <h1 className="text-2xl font-semibold text-[#21243D] mb-8">Featured works</h1>
  
        <div className="space-y-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-6 border-b pb-10">
            <img
              src="/path/to/image1.jpg"
              alt="Designing Dashboards"
              className="w-full md:w-60 h-auto rounded"
            />
            <div>
              <h2 className="text-xl font-bold text-[#21243D]">Designing Dashboards</h2>
              <div className="flex items-center gap-4 my-2">
                <span className="bg-[#142850] text-white text-sm px-3 py-1 rounded font-bold">
                  2020
                </span>
                <span className="text-[#8695A4] text-sm">Dashboard</span>
              </div>
              <p className="text-[#21243D] text-base leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="flex flex-col md:flex-row gap-6 border-b pb-10">
            <img
              src="/path/to/image2.jpg"
              alt="Vibrant Portraits of 2020"
              className="w-full md:w-60 h-auto rounded"
            />
            <div>
              <h2 className="text-xl font-bold text-[#21243D]">Vibrant Portraits of 2020</h2>
              <div className="flex items-center gap-4 my-2">
                <span className="bg-[#142850] text-white text-sm px-3 py-1 rounded font-bold">
                  2018
                </span>
                <span className="text-[#8695A4] text-sm">Illustration</span>
              </div>
              <p className="text-[#21243D] text-base leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="/path/to/image3.jpg"
              alt="36 Days of Malayalam type"
              className="w-full md:w-60 h-auto rounded"
            />
            <div>
              <h2 className="text-xl font-bold text-[#21243D]">36 Days of Malayalam type</h2>
              <div className="flex items-center gap-4 my-2">
                <span className="bg-[#142850] text-white text-sm px-3 py-1 rounded font-bold">
                  2018
                </span>
                <span className="text-[#8695A4] text-sm">Typography</span>
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
  