import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Credentials from '@/components/Credentials'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  )
}
