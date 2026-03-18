interface Exhibit {
  title: string;
  description: string;
  year: string;
  image: string;
}

const exhibits: Exhibit[] = [
  {
    title: "АШ-82ФН",
    description: "Звездообразный поршневой двигатель",
    year: "1943",
    image: "/abstract-colorful-painting-modern-art.jpg",
  },
  {
    title: "Д-30КУ",
    description: "Турбовентиляторный двигатель для Ил-62",
    year: "1972",
    image: "/contemporary-sculpture-installation.jpg",
  },
  {
    title: "ПС-90А",
    description: "ТРД для Ту-214 и Ил-96",
    year: "1992",
    image: "/mixed-media-collage-art.jpg",
  },
  {
    title: "ПД-14",
    description: "Двигатель нового поколения для МС-21",
    year: "2015",
    image: "/fine-art-portrait-photography.jpg",
  },
  {
    title: "ТВЗ-117",
    description: "Вертолётный ГТД для Ми-8 и Ми-24",
    year: "1965",
    image: "/abstract-minimalist-painting.jpg",
  },
  {
    title: "ГТУ-16П",
    description: "Промышленная газотурбинная установка",
    year: "1998",
    image: "/digital-art-nature-inspired.jpg",
  },
];

export function ArtworkGrid() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Главные экспонаты</h2>
          <p className="text-muted-foreground text-lg">Знаковые двигатели из постоянной коллекции музея</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {exhibits.map((exhibit, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={exhibit.image}
                  alt={exhibit.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light mb-1">{exhibit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {exhibit.description}, {exhibit.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
