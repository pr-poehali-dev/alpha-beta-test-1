import { Card, CardContent } from "@/components/ui/card";

interface MuseumSection {
  name: string;
  description: string;
  image: string;
  examples: string;
}

const museumSections: MuseumSection[] = [
  {
    name: "Поршневые двигатели",
    description:
      "Эпоха великой авиации — от первых М-11 до легендарного АШ-82ФН. Здесь можно увидеть двигатели, которые обеспечили победу в Великой Отечественной войне.",
    image: "/oil-painting-canvas-classical-style.jpg",
    examples: "М-11, М-62, М-82, АШ-82ФН, АШ-73ТК",
  },
  {
    name: "Турбореактивные двигатели",
    description:
      "Реактивная революция: двигатели, открывшие эру сверхзвуковых полётов. Серийные ТРД пермского производства для военных и гражданских самолётов.",
    image: "/marble-sculpture-classical-statue.jpg",
    examples: "Д-20П, Д-30, Д-30КУ, Д-30КП",
  },
  {
    name: "Турбовентиляторные ГТД",
    description:
      "Современные высокоэффективные двигатели для магистральной авиации. Низкий расход топлива и высокая надёжность — главные принципы этого поколения.",
    image: "/fine-art-black-white-photography.jpg",
    examples: "ПС-90А, ПС-90А2, ПД-14",
  },
  {
    name: "Вертолётные двигатели",
    description:
      "Силовые сердца самых популярных вертолётов в мире — Ми-8, Ми-24, Ка-52 и Ми-26. Надёжность этих машин проверена в самых тяжёлых условиях эксплуатации.",
    image: "/digital-art-abstract-colorful-design.jpg",
    examples: "ТВЗ-117, ТВ2-117, ВК-2500, Д-136",
  },
  {
    name: "Промышленные ГТУ",
    description:
      "Газотурбинные установки для нефтяной, газовой промышленности и энергетики. Адаптированные авиационные технологии в наземном исполнении.",
    image: "/printmaking-woodblock-print-art.jpg",
    examples: "ГТ-750, ГТУ-12П, ГТУ-16П, ГТУ-25П",
  },
  {
    name: "Ракетные двигатели",
    description:
      "Участие пермских конструкторов в советской и российской космической программе. Двигатели для ракет-носителей и орбитальных аппаратов.",
    image: "/charcoal-drawing-portrait-sketch.jpg",
    examples: "НК-15, НК-33, маршевые ЖРД",
  },
  {
    name: "Морские ГТД",
    description:
      "Газотурбинные установки для военно-морского флота. Быстроходные крейсера и эсминцы, которые вышли в мировой океан с пермскими двигателями.",
    image: "/ceramic-pottery-handmade-vase.jpg",
    examples: "М-3, М-8, М-15, ДТ-59",
  },
  {
    name: "Испытательный стенд",
    description:
      "Интерактивная реконструкция испытательного стенда завода. Посетители могут наблюдать за имитацией процесса огневых испытаний двигателя.",
    image: "/mixed-media-collage-contemporary-art.jpg",
    examples: "Стенд ИС-5, инструменты, приборы контроля",
  },
  {
    name: "Архив и документы",
    description:
      "Уникальный архив чертежей, фотографий, личных дел конструкторов и документов эпохи. Живая история через подлинные свидетельства.",
    image: "/textile-art-woven-tapestry.jpg",
    examples: "Чертежи, фотографии, грамоты, письма",
  },
];

export function ArtTypes() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Разделы экспозиции</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Путешествие через десятилетия — от первых поршневых моторов до новейших авиационных двигателей будущего
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {museumSections.map((section) => (
            <Card key={section.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <img
                  src={section.image}
                  alt={section.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-3">{section.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{section.description}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Экспонаты раздела:</p>
                  <p className="text-sm text-muted-foreground">{section.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
