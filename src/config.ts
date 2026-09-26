export const page = {
  name: 'Жанибек',
  introduction: 'Пишу код, делаю сайты и иногда выбираюсь в горы',
  location: 'Алматы',
  footer: 'Не всё интересное происходит за экраном',
  navigationLabel: 'Мои ссылки',
  skipLabel: 'Перейти к ссылкам',
  website: {
    title: 'Мой сайт',
    description: 'Обо мне и моих проектах',
    url: null as string | null, // Только публичный https:// адрес. Не localhost.
    pendingLabel: 'Скоро здесь',
  },
  contact: {
    title: 'Написать мне',
    description: 'О коде, горах или просто так',
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
    description: 'Пишу код, делаю сайты и иногда выбираюсь в горы. Мой сайт, GitHub и способы связаться со мной.',
    imageAlt: 'Жанибек. Код, сайты и немного гор. Личные ссылки.',
    previewLines: ['Пишу код, делаю сайты', 'и иногда выбираюсь в горы'],
    // После публикации укажите полный адрес ЭТОЙ страницы, со слешем в конце.
    // Используется для canonical, og:url и абсолютного адреса картинки превью.
    publishedUrl: null as string | null,
  },
}
