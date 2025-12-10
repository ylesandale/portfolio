export const scrollToSection = (targetId: string) => {
  const element = document.getElementById(targetId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - 50

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
