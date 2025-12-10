import { About } from '@/components/about'
import { Certifications } from '@/components/certifications'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { HeaderControls } from '@/components/header-controls'
import { Hero } from '@/components/hero'
import { LocaleRedirect } from '@/components/locale-redirect'
import { Projects } from '@/components/projects'
import { StickyHeader } from '@/components/sticky-header'
import { TechStack } from '@/components/tech-stack'
import { locales } from '@/const/routing'

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }))
}

const Home = () => {
  return (
    <>
      <LocaleRedirect />
      <div className="min-h-screen relative z-10">
        <StickyHeader />
        <HeaderControls />
        <main className="max-w-4xl mx-auto px-4 relative z-10">
          <Hero />
          <About />
          <Experience />
          <Certifications />
          <Projects />
          <TechStack />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
