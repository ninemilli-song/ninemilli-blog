interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '九毫墨痕',
    description: `这里是宁静的文字空间，这里有原创诗集、风格小说与深度读书笔记。清晰、简约的文档，让阅读回归纯粹，让每一行诗句、每一段故事、每一份思考都能被从容品味。这里是沉淀思想、邂逅文字之美的栖居地。期待与您共游文字海洋。`,
    imgSrc: '/static/images/books.jpg',
    href: 'https://ninemilli-docs.vercel.app/',
  },
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
