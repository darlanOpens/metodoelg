'use client'

export function scrollToSection(sectionId: string) {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}