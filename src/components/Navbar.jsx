import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Programmes', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Partenaires', href: '#partners' },
  { label: 'Actualités', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <a href="#home" className="flex items-center gap-3" onClick={(e)=>scrollTo(e,'#home')}>
              <img src="https://images.unsplash.com/photo-1690683789978-3cf73960d650?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTTkslMjBGb3VuZGF0aW9ufGVufDB8MHx8fDE3NjMxMDk0MzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="SNK Foundation" className="h-9 w-9 rounded-lg object-contain" />
              <span className="text-white/90 font-semibold tracking-wide">SNK Foundation</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e)=>scrollTo(e,item.href)}
                  className="text-sm px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e)=>scrollTo(e,'#contact')}
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors"
              >
                Nous soutenir <ArrowRight size={16} />
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 py-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e)=>scrollTo(e,item.href)}
                    className="text-sm px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e)=>scrollTo(e,'#contact')}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-white/90"
                >
                  Nous soutenir <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
