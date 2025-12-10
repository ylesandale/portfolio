import { KARPOV_COURSES_LINK } from './link'

export type Certification = {
  company: string
  name: string
  year: number
  cerficateImage: string
  getUrl: (locale: string) => string
}

export const certificationsItems: Certification[] = [
  {
    company: 'Karpov.courses',
    year: 2023,
    name: 'System Design',
    cerficateImage: '/karpov.png',
    getUrl: (locale) =>
      `${KARPOV_COURSES_LINK}/certificate/1851edd7-2dbe-4044-a150-5d0e3df8dbb3/${
        locale === 'en' ? 'en/' : ''
      }`,
  },
]
