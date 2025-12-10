import { IconType } from 'react-icons'
import {
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa'

import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK } from './link'

type SocialLink = {
  icon: IconType
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  { icon: FaGithubAlt, href: GITHUB_LINK, label: 'GitHub' },
  { icon: FaTelegramPlane, href: TELEGRAM_LINK, label: 'Telegram' },
  {
    icon: FaLinkedinIn,
    href: LINKEDIN_LINK,
    label: 'LinkedIn',
  },
  { icon: FaEnvelope, href: EMAIL_LINK, label: 'Email' },
]
