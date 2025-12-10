import { type Message } from './i18n'

export type Experience = {
  company: string
  position: string
  yearFrom: number
  yearTo?: number
  description: Message
}

export const experienceItems: Experience[] = [
  {
    company: 'Avito tech',
    yearFrom: 2023,
    position: 'Frontend Engineer',
    description: 'avito-description',
  },
  {
    company: 'Ozon tech',
    yearFrom: 2022,
    yearTo: 2023,
    position: 'Frontend Engineer',
    description: 'ozon-description',
  },
  {
    company: 'Citymobil',
    yearFrom: 2021,
    yearTo: 2022,
    position: 'Frontend Engineer',
    description: 'citymobil-description',
  },
  {
    company: 'Brafit',
    yearFrom: 2020,
    yearTo: 2021,
    position: 'Frontend Engineer',
    description: 'brafit-description',
  },
]
