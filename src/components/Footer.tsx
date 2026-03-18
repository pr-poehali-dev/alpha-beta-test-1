export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-light mb-4">Мотор-Музей Перми</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Хранители инженерного наследия Прикамья. Пермь, Комсомольский проспект, 20.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#artists" className="hover:text-foreground transition-colors">
                  Изобретатели
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-foreground transition-colors">
                  Экспонаты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О музее
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Связаться</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="mailto:info@motor-museum.perm.ru" className="hover:text-foreground transition-colors">
                  info@motor-museum.perm.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Мотор-Музей Перми. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
