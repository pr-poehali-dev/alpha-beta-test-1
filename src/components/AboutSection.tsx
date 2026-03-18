export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Хранители инженерной памяти Прикамья
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Мотор-Музей Перми создан при поддержке АО «ОДК-Авиадвигатель» и Пермского краевого
                правительства. Мы собираем, сохраняем и популяризируем историю одной из ведущих
                мировых школ авиационного двигателестроения.
              </p>
              <p>
                В наших фондах — более 400 подлинных экспонатов: от двигателей и технической
                документации до личных вещей конструкторов. Каждый год музей посещают свыше
                30 000 человек: школьники, студенты, инженеры и просто любопытные люди.
              </p>
              <p className="text-muted-foreground">
                Мы верим: промышленная история — это не скучные цифры, а захватывающие истории
                о людях, дерзновении и инженерном подвиге. Приходите — и убедитесь сами.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/art-gallery-interior-contemporary.jpg"
              alt="Экспозиция Мотор-Музея Перми"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
