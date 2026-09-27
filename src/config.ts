export const page = {
  name: 'Жанибек',
  introduction: 'Мой сайт, код и связь со мной.',
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
    description: 'Личные ссылки Жанибека: портфолио, GitHub, Телеграм и почта.',
    imageAlt: 'Жанибек. Мой сайт, код и связь со мной.',
    previewLines: ['Мой сайт, код', 'и связь со мной.'],
    // После публикации укажите полный адрес ЭТОЙ страницы, со слешем в конце.
    // Используется для canonical, og:url и абсолютного адреса картинки превью.
    publishedUrl: null as string | null,
  },
}
