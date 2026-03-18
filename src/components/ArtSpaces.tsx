export function ArtSpaces() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Залы музея</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Шесть пространств, каждое из которых рассказывает свою часть великой истории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/modern-contemporary-art-gallery-white-walls.jpg"
                alt="Зал истории"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Зал истории</h3>
              <p className="text-muted-foreground leading-relaxed">
                Хронология пермского моторостроения от 1930-х годов до наших дней. Документы, фотографии и личные истории конструкторов
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/classical-museum-grand-architecture-paintings.jpg"
                alt="Зал поршневых двигателей"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Зал поршневых двигателей</h3>
              <p className="text-muted-foreground leading-relaxed">
                Военные годы и восстановление: двигатели, обеспечившие победу в небе. Подлинные экспонаты эпохи ВОВ
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/artist-studio-workspace-with-paintings-easel.jpg"
                alt="Зал реактивной эпохи"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Зал реактивной эпохи</h3>
              <p className="text-muted-foreground leading-relaxed">
                Турбореактивные двигатели семейства Д-30, открывшие эру массовой реактивной авиации в СССР
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/outdoor-sculpture-garden-with-modern-art.jpg"
                alt="Открытая площадка"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Открытая площадка</h3>
              <p className="text-muted-foreground leading-relaxed">
                Крупногабаритные экспонаты под открытым небом: авиационные двигатели в натуральную величину и промышленные ГТУ
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/luxury-private-art-collection-room.jpg"
                alt="Зал современных технологий"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Зал современных технологий</h3>
              <p className="text-muted-foreground leading-relaxed">
                Двигатель ПД-14 и будущее авиации: интерактивные модели, VR-симуляции и рассказ о разработке МС-21
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/contemporary-exhibition-space-art-show.jpg"
                alt="Детский технопарк"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Детский технопарк</h3>
              <p className="text-muted-foreground leading-relaxed">
                Интерактивная зона для юных инженеров: собери свой двигатель, узнай принципы работы турбины
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
