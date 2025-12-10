export type NavItem =
  | {
      key: 'about' | 'experience' | 'certifications'
      targetId: string
    }
  | {
      key: 'resume'
      href: string
      isNewTab?: boolean
    }

export const navItems: NavItem[] = [
  { key: 'about', targetId: 'about' },
  { key: 'experience', targetId: 'experience' },
  { key: 'certifications', targetId: 'certifications' },
  { key: 'resume', href: '/resume.pdf', isNewTab: true },
]
