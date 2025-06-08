
export function MainContent() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-12 m-6 md:m-24">
      <div className="flex-1 text-center md:text-left text-[#21243D] max-w-xl">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-4">
          Hi, I am Luan, <br />
          Developer
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam
  eligendi odio recusandae quaerat nesciunt quidem, eum excepturi
  doloribus commodi id dolore, at eaque dignissimos dicta possimus
  dolores sit enim.
</p>
      </div>

      <div>
        <div className="flex-1 flex justify-center">
          <img src="https://github.com/luanhts.png" alt="" className="w-60 md:w-96 rounded-full shadow-lg object-cover" />
        </div>
      </div>
    </section>
  );
}
