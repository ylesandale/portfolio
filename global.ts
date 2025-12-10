import type { Messages } from './const/i18n'

declare module 'next-intl' {
  interface AppConfig {
    Messages: Messages
  }
}
