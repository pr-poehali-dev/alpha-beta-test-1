import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Engineer {
  name: string;
  specialty: string;
  years: string;
  nationality: string;
  portrait: string;
  image: string;
  bio: string;
  famousWorks: string;
}

const engineers: Engineer[] = [
  {
    name: "Аркадий Швецов",
    specialty: "Авиационные поршневые двигатели",
    years: "1892–1953",
    nationality: "Советский конструктор",
    portrait: "/portrait-of-leonardo-da-vinci-renaissance-artist.jpg",
    image: "/leonardo-da-vinci-renaissance-painting-style.jpg",
    bio: "Главный конструктор завода № 19 в Перми. Создал семейство двигателей М-11, М-62, М-82 и АШ-82, ставших основой советской боевой авиации в годы Великой Отечественной войны. Дважды Герой Социалистического Труда.",
    famousWorks: "М-11, М-62, АШ-82ФН, АШ-73ТК",
  },
  {
    name: "Павел Соловьёв",
    specialty: "Турбореактивные двигатели",
    years: "1917–1996",
    nationality: "Советский конструктор",
    portrait: "/portrait-of-vincent-van-gogh-with-red-beard.jpg",
    image: "/vincent-van-gogh-starry-night-style-painting.jpg",
    bio: "Генеральный конструктор Пермского моторного завода. Создал двигатели Д-20П, Д-30 и Д-30КУ, которые устанавливались на самолёты Ту-124, Ту-134 и Ил-62. Разработал двигатель Д-30КП для военно-транспортной авиации.",
    famousWorks: "Д-20П, Д-30, Д-30КУ, Д-30КП",
  },
  {
    name: "Александр Иноземцев",
    specialty: "Гражданские и военные ГТД",
    years: "1953–н.в.",
    nationality: "Российский конструктор",
    portrait: "/portrait-of-pablo-picasso-spanish-artist.jpg",
    image: "/pablo-picasso-cubist-portrait-style.jpg",
    bio: "Генеральный конструктор АО «ОДК-Авиадвигатель». Под его руководством созданы двигатели ПС-90А для самолётов Ил-96 и Ту-214, а также перспективный ПД-14 для новейшего лайнера МС-21.",
    famousWorks: "ПС-90А, ПС-90А2, ПД-14",
  },
  {
    name: "Николай Кузнецов",
    specialty: "Ракетные и авиационные двигатели",
    years: "1911–1995",
    nationality: "Советский конструктор",
    portrait: "/portrait-of-frida-kahlo-with-flowers-in-hair.jpg",
    image: "/frida-kahlo-self-portrait-mexican-folk-art.jpg",
    bio: "Создатель двигателей для лунной ракеты Н-1 и стратегического бомбардировщика Ту-160. Его НК-12 — до сих пор самый мощный турбовинтовой двигатель в мире. Трижды Герой Социалистического Труда.",
    famousWorks: "НК-12, НК-32, НК-93",
  },
  {
    name: "Фёдор Лукин",
    specialty: "Промышленные газотурбинные установки",
    years: "1929–2007",
    nationality: "Советский инженер",
    portrait: "/portrait-of-claude-monet-with-white-beard-impressi.jpg",
    image: "/claude-monet-water-lilies-impressionist-painting.jpg",
    bio: "Главный конструктор газотурбинных установок для нефтяной и газовой промышленности. Разработал серию приводных ГТУ на базе авиационных двигателей, что позволило обеспечить газом миллионы советских семей.",
    famousWorks: "ГТ-750, ГТ-6-750, ГТУ-12П",
  },
  {
    name: "Вячеслав Чупраков",
    specialty: "Испытания авиационных двигателей",
    years: "1940–2015",
    nationality: "Советский инженер",
    portrait: "/portrait-of-michelangelo-renaissance-sculptor.jpg",
    image: "/michelangelo-david-sculpture-renaissance.jpg",
    bio: "Руководитель испытательного стенда Пермского моторного завода на протяжении более 30 лет. Лично участвовал в испытаниях более 200 двигателей. Почётный работник авиационной промышленности России.",
    famousWorks: "Испытания Д-30, ПС-90А, ПД-14",
  },
  {
    name: "Евгений Марчуков",
    specialty: "Вертолётные двигатели",
    years: "1946–н.в.",
    nationality: "Российский конструктор",
    portrait: "/portrait-of-rembrandt-van-rijn-dutch-baroque-paint.jpg",
    image: "/rembrandt-portrait-painting-baroque-style.jpg",
    bio: "Генеральный конструктор АО «Климов». Создал семейство двигателей ТВЗ-117 и ВК-2500, которые устанавливаются на вертолёты Ми-8, Ми-24 и Ка-52. Его двигатели эксплуатируются в 80 странах мира.",
    famousWorks: "ТВЗ-117, ВК-2500, ВК-800",
  },
  {
    name: "Борис Стечкин",
    specialty: "Теория тепловых двигателей",
    years: "1891–1969",
    nationality: "Советский учёный",
    portrait: "/portrait-of-salvador-dali-with-iconic-mustache.jpg",
    image: "/salvador-dali-surrealist-melting-clocks-painting.jpg",
    bio: "Основоположник отечественной школы теории авиационных двигателей. Его учебник «Теория воздушно-реактивных двигателей» стал настольной книгой нескольких поколений конструкторов. Академик АН СССР.",
    famousWorks: "Теория ВРД, учебник по тепловым двигателям",
  },
  {
    name: "Иван Изотов",
    specialty: "Морские газотурбинные двигатели",
    years: "1917–1990",
    nationality: "Советский конструктор",
    portrait: "/portrait-of-georgia-o-keeffe-american-modernist-pa.jpg",
    image: "/georgia-o-keeffe-flower-painting-modernist.jpg",
    bio: "Главный конструктор корабельных газотурбинных установок. Его двигатели обеспечивали ход крейсеров и эсминцев советского военно-морского флота. Лауреат Государственной премии СССР.",
    famousWorks: "М-3, М-8, М-15",
  },
  {
    name: "Сергей Люлька",
    specialty: "Первые советские ТРД",
    years: "1908–1984",
    nationality: "Советский конструктор",
    portrait: "/portrait-of-andy-warhol-with-white-wig-pop-art.jpg",
    image: "/andy-warhol-pop-art-campbell-soup-can-style.jpg",
    bio: "Создатель первого советского турбореактивного двигателя С-18. Его КБ разработало двигатели для МиГ-21, Су-27 и Су-57. Один из отцов-основателей советской реактивной авиации.",
    famousWorks: "АЛ-7Ф, АЛ-21Ф, АЛ-31Ф",
  },
  {
    name: "Владимир Лотарев",
    specialty: "Гражданские турбовентиляторные двигатели",
    years: "1929–2005",
    nationality: "Советский конструктор",
    portrait: "/portrait-of-johannes-vermeer-dutch-baroque-painter.jpg",
    image: "/johannes-vermeer-girl-with-pearl-earring-baroque.jpg",
    bio: "Генеральный конструктор ЗМКБ «Прогресс». Создал двигатели Д-36, Д-136 и Д-18Т — одни из наиболее экономичных в советской авиации. Его Д-136 установлен на самом грузоподъёмном вертолёте в мире Ми-26.",
    famousWorks: "Д-36, Д-136, Д-18Т",
  },
  {
    name: "Михаил Флисский",
    specialty: "Промышленные ГТУ для энергетики",
    years: "1938–2010",
    nationality: "Российский инженер",
    portrait: "/portrait-of-edvard-munch-norwegian-expressionist-p.jpg",
    image: "/edvard-munch-the-scream-expressionist-painting.jpg",
    bio: "Руководитель направления энергетических газотурбинных установок Пермского завода. Создал ГТУ-16П и ГТУ-25П, широко применяемые на электростанциях России. Лауреат премии Правительства РФ.",
    famousWorks: "ГТУ-16П, ГТУ-25П, ГТЭ-110",
  },
];

export function FeaturedArtists() {
  return (
    <section id="artists" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Выдающиеся конструкторы</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Люди, чей инженерный гений создал пермскую школу моторостроения
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {engineers.map((engineer) => (
            <Dialog key={engineer.name}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={engineer.portrait}
                      alt={engineer.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-light leading-snug mb-1">{engineer.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{engineer.specialty}</p>
                    <p className="text-xs text-muted-foreground">{engineer.years}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl font-light">{engineer.name}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={engineer.image}
                      alt={engineer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{engineer.nationality}</p>
                      <p className="text-sm text-muted-foreground">{engineer.years}</p>
                    </div>
                    <p className="text-sm leading-relaxed">{engineer.bio}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-medium mb-1">Ключевые разработки:</p>
                      <p className="text-xs text-muted-foreground">{engineer.famousWorks}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
