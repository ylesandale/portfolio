import { getBasePath } from './get-base-path'

export const getStaticPath = (path: string): string => {
  const basePath = getBasePath()
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${basePath}/${cleanPath}`
}
