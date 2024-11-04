import { useMemo, useState } from 'react'

import './App.css'

import { NavigationMenu } from './NavigationMenu'
import { Switch } from './components/ui/switch'
import { Label } from './components/ui/label'

import LogoInst from './assets/logo-inst.svg'
import LogoPragmat from './assets/logo-pragmat.svg'
import LogoRatata from './assets/logo-ratata.svg'
import LogoTG from './assets/logo-tg.svg'
import LogoVK from './assets/logo-vk.svg'
import LogoYT from './assets/logo-yt.svg'
import LogoZim from './assets/logo-zim.png'

const paths = {
  '/episode/1': {
    title: 'Эпизод I',
    video: {
      title: 'Рассвет, надежды и успехи. Империя без автомобилей. Эпизод I',
      src: 'https://vk.com/video_ext.php?oid=-218565915&id=456240589&hd=2',
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
  '/episode/2': {
    title: 'Эпизод II',
    video: {
      title: 'А была ли Империя? Империя без автомобилей. Эпизод II',
      src: 'https://vk.com/video_ext.php?oid=-218565915&id=456240613&hd=2',
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
  '/episode/3': {
    title: 'Эпизод III',
    video: {
      title:
        'Бездна. Как мы все потеряли. Империя без автомобилей. Эпизод III',
      src: 'https://vk.com/video_ext.php?oid=-218565915&id=456240651&hd=2',
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
  '/episode/4': {
    title: 'Эпизод IV',
    video: {
      title: 'Ленин. Идея и месть. Империя без автомобилей. Эпизод IV',
      src: 'https://vk.com/video_ext.php?oid=-218565915&id=456240673&hd=2',
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
} as const

const withLink = (el: string) => {
  const parsedData = el.split(/(https?:\/\/|mailto:)/)

  if (parsedData.length === 1) {
    return <p>{el}</p>
  }

  return (
    <p>
      {parsedData[0]}{' '}
      <a href={`${parsedData[1]}${parsedData[2]}`} target='_blank'>
        {parsedData[2]}
      </a>
    </p>
  )
}

function App() {
  const [vpn, setVPN] = useState(true)

  const data = useMemo(() => {
    if (paths[window.location.pathname as keyof typeof paths]) {
      return paths[window.location.pathname as keyof typeof paths]
    }

    return paths['/episode/1']
  }, [])

  return (
    <div className='h-[100%] flex flex-col justify-between'>
      <div>
        <h1>Империя без автомобилей</h1>

        <div className='flex items-center justify-between mt-4'>
          <NavigationMenu />

          {window.location.pathname === '/about' ? null : <h3>{data.title}</h3>}

          <div className='flex items-center space-x-2'>
            <Label htmlFor='airplane-mode'>У меня работает YouTube</Label>
            <Switch id='airplane-mode' checked={vpn} onCheckedChange={setVPN} />
          </div>
        </div>
      </div>

      {window.location.pathname === '/about' ? (
        <div className='max-w-[900px] flex justify-center'>
          <div className='w-[600px]'>
            <p>Привет 👋</p>
            <p>Для начала, это не официальный сайт проекта.</p>
            <br />
            <p>Сайт сделан на добровольных началах</p>
            <p>
              Данный сайт, это мой способ сказать спасибо всей команде и лично
              Станислав Александровичу за проделанную работу ❤️
            </p>
            <br />
            <p>
              Я не имею морального права скрыть/обрезать/утаить какую либо
              информацию к видео у столь титанической работы
            </p>
            <p>
              Поэтому под каждым видео аккуратно перенесены все описания вплоть
              до указания ссылок и рекламы
            </p>
            <br />
            <p>
              Если у Станислав Александровича или его команды есть какие-то либо
              замечания/возражения/негатив касательно работы данного сайта,
              просьба незамедлительно написать мне в{' '}
              <a href='https://t.me/vondervuflya' target='_blank'>
                Телеграмм
              </a>{' '}
              для решения вопроса
            </p>
            <br />
          </div>
        </div>
      ) : (
        <div className='my-6 max-w-[900px]'>
          <div className='relative overflow-hidden pt-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-[100%] h-[100%] border-0'
              title={data.video.title}
              src={vpn ? data.video.youtube : data.video.src}
              allow='accelerometer; encrypted-media; gyroscope; fullscreen; picture-in-picture; screen-wake-lock;'
              referrerPolicy='strict-origin-when-cross-origin'
              frameBorder='0'
              allowFullScreen
            />
          </div>

          <div className='border-solid bg-slate-200 p-8 text-left mt-4 rounded-2xl max-h-[320px] overflow-auto'>
            {...data.description.map((line, index) => {
              return (
                <>
                  {index > 0 && <p>_</p>}
                  {line.split('\n').length ? (
                    <div>{line.split('\n').map(withLink)}</div>
                  ) : (
                    withLink(line)
                  )}
                </>
              )
            })}
          </div>
        </div>
      )}

      <div className=' flex justify-between'>
        <p>
          dev with ❤️ by{' '}
          <a href='http://vuflya.com' target='_blank'>
            vuflya.com
          </a>
        </p>

        <p>⚠️NO OFFICIAL⚠️</p>
        <div className='flex gap-2'>
          Ссылочки:
          <ul className='flex space-x-4 items-center'>
            <li>
              <a href='https://www.youtube.com/@AsafevStas' target='_blank'>
                <img
                  src={LogoYT}
                  title='youtube-live'
                  alt='yt'
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@AsafevLife' target='_blank'>
                <img
                  src={LogoYT}
                  title='youtube-live'
                  alt='yt-live'
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/asafevstas/' target='_blank'>
                <img
                  src={LogoInst}
                  title='instagram'
                  alt='instagram'
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href='https://vk.com/asafevstas' target='_blank'>
                <img src={LogoVK} title='vk' alt='vk' width={24} height={24} />
              </a>
            </li>
            <li>
              <a href='https://t.me/asafevstas' target='_blank'>
                <img
                  src={LogoTG}
                  title='telegram'
                  alt='telegram'
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href='https://autopragmat.ru' target='_blank'>
                <img
                  src={LogoPragmat}
                  title='autopragmat'
                  alt='autopragmat'
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href='https://ratata.ru' target='_blank'>
                <img
                  src={LogoRatata}
                  title='ratata'
                  alt='ratata'
                  width={64}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href='https://zimwerk.ru/msk#rec370714062' target='_blank'>
                <img src={LogoZim} title='zimwerk' alt='zimwerk' width={64} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
