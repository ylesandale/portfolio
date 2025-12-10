import createMiddleware from 'next-intl/middleware'

import { routing } from './const'

export default createMiddleware({
  ...routing,
  // Detect locale from Accept-Language header
  localeDetection: true,
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
