import { type Message } from './i18n'

export type Project = {
  title: string
  description: Message
  githubProjectName: string
  previewImageUrl: string
  tags: string[]
}

export const projectsItems: Project[] = [
  {
    title: 'Keep secrets',
    description: 'keep-secret-description',
    githubProjectName: 'keep-secrets',
    previewImageUrl: '/keep-secrets.png',
    tags: [
      'Nuxt',
      'Vue',
      'Typescript',
      'Nuxt UI',
      'Tailwind',
      'TanStack Vue Query',
      'Axios',
      'Eslint',
      'AES-256-GCM',
      'Encryption',
      'Go',
      'SQLite',
      'Gorilla Mux',
      'Docker',
    ],
  },
  {
    title: 'Portfolio',
    description: 'portfolio-description',
    githubProjectName: 'portfolio',
    previewImageUrl: '/portfolio.png',
    tags: [
      'Next.js',
      'Typescript',
      'React',
      'Typescript',
      'Tailwind',
      'Shadcn UI',
      'i18n',
      'Eslint',
      'CI/CD',
    ],
  },
]
