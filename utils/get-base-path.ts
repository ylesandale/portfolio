export const getBasePath = (): string => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_BASE_PATH || ''
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}
