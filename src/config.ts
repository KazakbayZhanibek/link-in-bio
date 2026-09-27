export const page = {
  name: 'Жанибек',
  introduction: 'Учусь, пишу код, пробую новое.',
  about: 'Начал писать код ещё в школе. Больше всего нравится момент, когда задумку уже можно открыть, нажать и попробовать.',
  location: '20 лет · Алматы',
  footer: 'Разбираться, ошибаться и собирать заново.',
  navigationLabel: 'Мои ссылки',
  skipLabel: 'Перейти к ссылкам',
  website: {
    title: 'Мой сайт',
    description: 'Обо мне и моих проектах',
    url: 'https://kazakbayzhanibek.github.io/JanibekPortfolio/' as string | null,
    pendingLabel: 'Скоро здесь',
  },
  contact: {
    title: 'Написать мне',
    description: 'Можно просто сказать привет.',
    pendingLabel: 'Контакты появятся позже',
    telegram: {
      title: 'Телеграм',
      description: '@meechttatel',
      url: 'https://t.me/meechttatel' as string | null,
    },
    email: {
      title: 'Почта',
      description: 'janibekkaz3@gmail.com',
      url: 'mailto:janibekkaz3@gmail.com' as string | null,
    },
  },
  github: {
    title: 'GitHub',
    description: 'Код и то, над чем работаю',
    url: 'https://github.com/KazakbayZhanibek' as string | null,
  },
  meta: {
    title: 'Жанибек — мои ссылки',
    description: 'Жанибек, 20 лет, Алматы. Пишу код со школы, учусь на программного инженера и делаю свои сайты и приложения. Мои ссылки и контакты.',
    imageAlt: 'Жанибек. Учусь, пишу код, пробую новое. Личные ссылки.',
    previewLines: ['Учусь, пишу код,', 'пробую новое.'],
    // После публикации укажите полный адрес ЭТОЙ страницы, со слешем в конце.
    // Используется для canonical, og:url и абсолютного адреса картинки превью.
    publishedUrl: null as string | null,
  },
}
