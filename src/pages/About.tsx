export default function About() {
  return (
    <div>
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3x1 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 mb-6">
            <p className="text-emerald-500">Nossa missão</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
            Revelar a alma da Paraíba
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            O ExploraPB nasceu da paixão por um estado que tem muito a oferecer
            e pouco a se mostrar. Nosso objetivo é colocar a Paraíba no mapa do
            turismo nacional e internacional, valorizando sua cultura, natureza
            e o povo mais acolhedor do Brasil.
          </p>
        </div>
      </section>

      <section className=" bg-foreground">
        <div className="w-full bg-emerald-600 ">
          <div className="grid h-35 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-3x1 sm:text-4xl font-bold ">200+</p>
              <p className="text-white">Destinos mapeados</p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <p className="text-white text-3x1 sm:text-4xl font-bold">50+</p>
              <p className="text-white">Cidades parceiras</p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <p className="text-white text-3x1 sm:text-4xl font-bold">15K+</p>
              <p className="text-white">Exploradores ativos</p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <p className="text-white text-3x1 sm:text-4xl font-bold">98%</p>
              <p className="text-white">Satisfação dos usuários</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Nossos valores</h2>
          <p>
            Cada decisão que tomamos é guiada pelo compromisso com a Paraíba e
            suas comunidades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 w-auto rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow ">
            <h3 className=" font-bold text-xl font-heading text-foreground">
              Turismo sustentável
            </h3>
            <p>
              Promovemos práticas de turismo responsável que preservam o meio
              ambiente e respeitam as comunidades locais
            </p>
          </div>
          <div className="p-8 w-auto rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow ">
            <h3 className=" font-bold text-xl font-heading text-foreground">
              Valorização cultural
            </h3>
            <p>
              Celebramos a riqueza cultural da Paraíba, desde a música e dança
              até a gastronomia e artesanato.
            </p>
          </div>
          <div className="p-8 w-auto rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow ">
            <h3 className=" font-bold text-xl font-heading text-foreground">
              Economia local
            </h3>
            <p>
              Conectamos viajantes a negócios locais, fortalecendo a economia
              das comunidades paraibanas.
            </p>
          </div>
          <div className="p-8 w-auto rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow ">
            <h3 className=" font-bold text-xl font-heading text-foreground">
              Preservação ambiental
            </h3>
            <p>
              Incentivamos o ecoturismo e a conscientização sobre a preservação
              dos ecossistemas únicos da Paraíba.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div>
                <div>
                  <h2 className="font-bold text-3xl font-heading text-foreground">
                    Transformando o turismo regional
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Acreditamos que o turismo pode ser uma força transformadora.
                    Ao conectar viajantes com experiências autênticas, geramos
                    renda para comunidades locais, preservamos tradições
                    culturais e incentivamos a conservação ambiental.
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Nosso compromisso é com um turismo que beneficia a todos:
                    visitantes que vivem experiências inesquecíveis e
                    comunidades que prosperam com dignidade.
                  </p>
                  <a href="" className=""></a>
                </div>
              </div>
            </div>
            <div>imagem</div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-25 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Faça parte dessa história
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Seja um explorador, parceiro ou embaixador da Paraíba. Junte-se a
            nós na missão de revelar os tesouros deste estado incrível.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <button className="">
              <a href="">Criar minha conta</a>
            </button>
            <button>
              <a href="">Explorar destinos</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
