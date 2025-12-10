import { Messages } from './const'

declare module 'next-intl' {
  interface AppConfig {
    Messages: Messages
  }
}
