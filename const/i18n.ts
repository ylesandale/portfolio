import messages from '../messages/en.json'

export const languages = {
  en: 'English',
  ru: 'Русский',
} as const

export type Language = keyof typeof languages

export type Message = keyof typeof messages

export type Messages = Record<Message, string>
