
export function MainContent() {
  return (
    <section id="Home" className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-12 m-6 md:m-24 pt-24">
      <div className="flex-1 text-left md:text-left text-[#21243D] max-w-xl">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-4">
          Olá, me chamo Luan
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
  Atualmente sou estagiário em desenvolvimento Front End na Sicredi, sou apaixonado por tecnologia e inovação.  
  Curso Engenharia de Software e atuo na criação de aplicações web com foco em interfaces modernas, boa experiência do usuário e performance no backend.  
  <br />  
  <br/>
  Seja bem-vindo ao meu portfólio! 🚀
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
