import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#3B82F6] border-[#3B82F6]">RMRP · GTA V</Badge>,
    title: "Законодательство у тебя в руках.",
    showButton: true,
    buttonText: 'Найти закон'
  },
  {
    id: 'about',
    title: 'Что такое RMRP Law?',
    content: 'Единая база законодательства сервера RMRP GTA V. Все нормативные акты, статьи и правила в одном месте — доступны мгновенно.'
  },
  {
    id: 'features',
    title: 'Быстрый поиск по базе.',
    content: 'Введи ключевое слово, номер статьи или название раздела — и система мгновенно найдёт нужный закон, штраф или ограничение.'
  },
  {
    id: 'testimonials',
    title: 'Знай свои права.',
    content: 'Не знание закона не освобождает от ответственности. Будь на шаг впереди — изучай законодательство до того, как оно понадобится.'
  },
  {
    id: 'join',
    title: 'Начни поиск прямо сейчас.',
    content: 'Тысячи статей, нормативов и правил сервера RMRP GTA V. Найди нужный закон за секунды.',
    showButton: true,
    buttonText: 'Открыть поиск'
  },
]