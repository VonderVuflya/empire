export type VideoType = {
  title: string
  vk: string
  youtube: string
}

export type EpisodeDataType = {
  title: string
  video: VideoType
  description: string[]
}
type EpisodesType = Record<number, EpisodeDataType>

export const episodes: EpisodesType = {
  1: {
    title: 'Эпизод I',
    video: {
      title: 'Рассвет, надежды и успехи. Империя без автомобилей. Эпизод I',
      vk: 'https://vk.com/video_ext.php?oid=-218565915&id=456240589&hd=2',
      youtube: 'https://www.youtube-nocookie.com/embed/YPoU85YGwG4',
    },
    description: [
      'Контраварийное вождение и дрифт в легендарной школе Ратата — https://clck.ru/3DJ6C4',
      'Шуруповерт Nocord, чтобы жена была довольна https://ya.cc/m/o6aFaiJ?erid=5jtCeReNx12oajqsarxLiF2',
      'Великолепный мерч\nhttps://market.yandex.ru/business--kutezh/84407784?clid=605&utm_source=84407784&_redirectCount=1',
      'Ссылка на скачивание материала — https://disk.yandex.ru/i/5AmtHIvl1NK_-A',
      'Наш Boosty — https://boosty.to/asafevstas\nНаше сообщество в ВК — https://vk.com/asafevstas\nИ канал в Телеграме — https://t.me/asafevstas',
      'Чтобы попасть в нашу команду, смотрите вакансии тут — https://asafev.ru\nА чтобы показать ваш авто в обзоре, заполните данные тут — https://forms.yandex.ru/u/6630b5d2f47e734a79d9e6fd/',
      'Таймкодов нет. Наслаждайтесь ❤️',
      'Подбор автомобилей с пробегом в легендарном Автопрагмате — https://clck.ru/395JJt',
      'Обслуживание авто VAG группы в сервисе Zimwerk — https://clck.ru/394xoB',
      'Размещение рекламы — reklama@asafev.ru',
      '12.07. Реклама. ООО "Ратата" ИНН 9717122834  erid:2SDnjcBrXWJ\n25.38. Реклама. ООО «ЯНДЕКС», ИНН 7736207543, erid: 5jtCeReNx12oajqsarxLiF2',
    ],
  },
  2: {
    title: 'Эпизод II',
    video: {
      title: 'А была ли Империя? Империя без автомобилей. Эпизод II',
      vk: 'https://vk.com/video_ext.php?oid=-218565915&id=456240613&hd=2',
      youtube: 'https://www.youtube-nocookie.com/embed/fmVDXW21qSo',
    },
    description: [
      'Научись водить безопасно и с кайфом в RATATA ➡️ — https://clck.ru/3DbLUB',
      'Зимнюю резину и всё для авто покупаем на Яндекс Маркете https://clck.ru/3DTH9Q',
      'С Алисой так просто справляться с работой и находить занятия для детей. https://clck.ru/3DTLiq',
      'Великолепный мерч\nhttps://market.yandex.ru/business--kutezh/84407784?clid=605&utm_source=84407784&_redirectCount=1',
      'Ссылка на скачивание материала — https://disk.yandex.ru/d/5yk7k9ihrj1EeQ',
      'Ссылка на Эпизод II в YouTube — https://youtu.be/fmVDXW21qSo?si=E0GubX6SOa4Bz3O5',
      'Наш Boosty — https://boosty.to/asafevstas\n',
      'Наше сообщество в ВК — https://vk.com/asafevstas\n',
      'И канал в Телеграме — https://t.me/asafevstas\n',
      'Чтобы попасть в нашу команду, смотрите вакансии тут — https://asafev.ru\nА чтобы показать ваш авто в обзоре, заполните данные тут — https://forms.yandex.ru/u/6630b5d2f47e734a79d9e6fd/',
      'Таймкодов нет. Наслаждайтесь ❤️',
      'Подбор автомобилей с пробегом в легендарном Автопрагмате — https://clck.ru/395JJt',
      'Обслуживание авто VAG группы в сервисе Zimwerk — https://clck.ru/394xoB',
      'Размещение рекламы — reklama@asafev.ru',
      '00.00. Реклама. Рекламодатель ООО «Лаборатория Алисы». ИНН 9705173070. erid: CQH36pWzJqDgGPFD6rpb2pEeTEosMTk8SxZE2zDDPpw8Pt\n06.19. Реклама. ООО "Ратата" ИНН 9717122834. erid:2SDnjdmb2i6\n',
    ],
  },
  3: {
    title: 'Эпизод III',
    video: {
      title: 'Бездна. Как мы все потеряли. Империя без автомобилей. Эпизод III',
      vk: 'https://vk.com/video_ext.php?oid=-218565915&id=456240651&hd=2',
      youtube: 'https://www.youtube-nocookie.com/embed/hkmRI-gPSLQ',
    },
    description: [
      'Научись водить безопасно и с кайфом в RATATA ➡️ — https://clck.ru/3DbLUB',
      'Подбор автомобилей с пробегом в легендарном Автопрагмате — https://clck.ru/395JJt',
      'Наш Бусти с полезными видео - https://boosty.to/asafevstas',
      'Мерч к "Империи без автомобилей" и базовая одежда\nhttps://market.yandex.ru/business--kutezh/84407784?clid=605&utm_source=84407784&_redirectCount=1\nhttps://kutezh.taplink.ws',
      'Ссылка на скачивание материала — https://disk.yandex.ru/d/Y5kVqUc72R8QIA',
      'Наше сообщество в ВК — https://vk.com/asafevstas\nИ канал в Телеграме — https://t.me/asafevstas',
      'Чтобы попасть в нашу команду, смотрите вакансии тут — https://asafev.ru\nА чтобы показать ваш авто в обзоре, заполните данные тут — https://forms.yandex.ru/u/6630b5d2f47e734a79d9e6fd/',
      'Таймкодов нет. Наслаждайтесь ❤️',
      'Обслуживание авто VAG группы в сервисе Zimwerk — https://clck.ru/394xoB',
      'Размещение рекламы — mailto:reklama@asafev.ru',
      '5.42. Реклама. ИП Асафьев С.А. ИНН 532121362971 erid: 2SDnjdoPgMq\n6.24. Реклама. ООО "Ратата" ИНН 9717122834 erid: 2SDnjdhVQe7\n6.48. Реклама. ИП Асафьев С.А. ИНН 532121362971 erid: 2SDnjdPgDLF\n7.15. Реклама. ИП Асафьев С.А. ИНН 532121362971 erid: 2SDnjcKRQTd',
    ],
  },
  4: {
    title: 'Эпизод IV',
    video: {
      title: 'Ленин. Идея и месть. Империя без автомобилей. Эпизод IV',
      vk: 'https://vk.com/video_ext.php?oid=-218565915&id=456240673&hd=2',
      youtube: 'https://www.youtube-nocookie.com/embed/Z2QgF26DYeo',
    },
    description: [
      'Умный робот-пылесос Tuvio по суперцене на Яндекс Маркете https://ya.cc/m/i5Jb19Z?erid=5jtCeReNx12oajt3ZyF1PYw',
      'Портал к низким ценам и распродаже 11.11 на Яндекс Маркете https://ya.cc/m/B6Mpxay?erid=5jtCeReNx12oajt3ZyF1Phr',
      'Ссылка на скачивание материала — https://disk.yandex.ru/d/ZjPai1a0zU4njQ',
      'Великолепный мерч\nhttps://market.yandex.ru/business--kutezh/84407784?clid=605&utm_source=84407784&_redirectCount=1',
      'Наше сообщество в ВК — https://vk.com/asafevstas\nИ канал в Телеграме — https://t.me/asafevstas',
      'Чтобы попасть в нашу команду, смотрите вакансии тут — https://asafev.ru\nА чтобы показать ваш авто в обзоре, заполните данные тут — https://forms.gle/ffDAsTSahBjR3Koy9',
      'Таймкодов нет. Наслаждайтесь ❤️',
      'Подбор автомобилей с пробегом в легендарном Автопрагмате — https://clck.ru/395JJt',
      'Контраварийное вождение и дрифт в не менее легендарной школе Ратата — https://ratata.ru/',
      'Обслуживание авто VAG группы в сервисе Zimwerk — https://clck.ru/394xoB',
      'Размещение рекламы — mailto:reklama@asafev.ru',
      '3.38. Реклама. ООО «ЯНДЕКС», ИНН 7736207543, erid: 5jtCeReNx12oajt3ZyF1PYw\n17.42. Реклама. ООО «ЯНДЕКС», ИНН 7736207543, erid: 5jtCeReNx12oajt3ZyF1Phr',
      'Дисклеймер.\nВсе лица, принимавшие участие в создании и публикации предстоящего видеоролика, прямо и безусловно осуждают любую форму терроризма, который запрещён законом Российской Федерации и международным правом.\nНикакие слова и никакие изображения предстоящего видеоролика не являются и не могут являться какой-либо формой публичных призывов к осуществлению террористической деятельности, публичному оправданию терроризма и (или) пропаганде терроризма, не призывают к осуществлению экстремистской деятельности, не обосновывают или не оправдывают необходимость осуществления экстремистской деятельности.\nСодержание предстоящего видеоролика призвано и нацелено только на формирование у его зрителей негативного отношения к терроризму.',
    ],
  },
}
