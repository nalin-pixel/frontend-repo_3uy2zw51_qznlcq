import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, HeartHandshake, Rocket, Globe2, Users, Sparkles, ChevronRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function ProgressRail() {
  const sections = [
    { id: '#home', label: 'Accueil' },
    { id: '#about', label: 'À propos' },
    { id: '#programs', label: 'Programmes' },
    { id: '#impact', label: 'Impact' },
    { id: '#partners', label: 'Partenaires' },
    { id: '#news', label: 'Actualités' },
    { id: '#contact', label: 'Contact' },
  ]

  const go = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="pointer-events-none fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
      <div className="flex flex-col items-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={s.id}
            onClick={(e)=>go(e,s.id)}
            className="pointer-events-auto group"
            aria-label={s.label}
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-white/40 group-hover:bg-white transition-colors shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
          </a>
        ))}
      </div>
    </div>
  )
}

function Nav() {
  const items = [
    { href: '#about', label: 'À propos' },
    { href: '#programs', label: 'Programmes' },
    { href: '#impact', label: 'Impact' },
    { href: '#partners', label: 'Partenaires' },
    { href: '#news', label: 'Actualités' },
    { href: '#contact', label: 'Contact' },
  ]

  const go = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <a href="#home" onClick={(e)=>go(e,'#home')} className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1690683789978-3cf73960d650?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTTkslMjBGb3VuZGF0aW9ufGVufDB8MHx8fDE3NjMxMDk0MzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="SNK Foundation" className="h-9 w-9 rounded-lg object-contain" />
              <span className="text-white/90 font-semibold tracking-wide">SNK Foundation</span>
            </a>
            <nav className="hidden md:flex items-center gap-2">
              {items.map(i => (
                <a key={i.href} href={i.href} onClick={(e)=>go(e,i.href)} className="text-sm px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  {i.label}
                </a>
              ))}
              <a href="#contact" onClick={(e)=>go(e,'#contact')} className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-white/90">
                Nous soutenir <ArrowRight size={16} />
              </a>
            </nav>
            <div className="md:hidden">
              <a href="#contact" onClick={(e)=>go(e,'#contact')} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-black text-sm font-medium">
                Agir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AmbientLayer({ colors = 'from-indigo-600/20 via-purple-600/20 to-transparent', opacity = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      viewport={{ amount: 0.5, once: false }}
      transition={{ duration: 0.8 }}
      className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${colors} blur-3xl`} />
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] snap-start flex items-stretch overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <AmbientLayer colors="from-black/60 via-black/50 to-black/90" opacity={1} />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p variants={container} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/10 backdrop-blur">
              <Sparkles size={16} /> Fondations • Impact • Afrique
            </motion.p>
            <motion.h1 variants={container} className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
              Ensemble, bâtissons des opportunités durables
            </motion.h1>
            <motion.p variants={container} className="mt-6 text-lg text-white/80 max-w-2xl">
              Une expérience immersive pour découvrir la mission, les programmes et l'impact de SNK Foundation. Plongez dans notre univers et rejoignez le mouvement.
            </motion.p>
            <motion.div variants={container} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#programs" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90">
                Explorer nos actions <ChevronRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/15 hover:bg-white/15">
                Nous soutenir
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const cards = [
    {
      icon: <HeartHandshake className="text-pink-300" />,
      title: 'Notre mission',
      desc: "Accélérer l'autonomisation des communautés à travers l'éducation, l'entrepreneuriat et l'innovation.",
    },
    {
      icon: <Rocket className="text-indigo-300" />,
      title: 'Nos leviers',
      desc: 'Programmes de formation, accompagnement des jeunes, projets à fort impact social et environnemental.',
    },
    {
      icon: <Globe2 className="text-emerald-300" />,
      title: 'Notre vision',
      desc: 'Un futur inclusif où chaque talent trouve un terrain pour éclore et rayonner durablement.',
    },
  ]

  return (
    <section id="about" className="relative min-h-[100dvh] snap-start flex items-center py-28 bg-[radial-gradient(1000px_600px_at_10%_-20%,rgba(120,119,198,0.12),transparent),radial-gradient(800px_500px_at_100%_20%,rgba(56,189,248,0.08),transparent)]">
      <AmbientLayer colors="from-purple-500/10 via-sky-500/10 to-transparent" opacity={0.6} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
          <p className="text-sm uppercase tracking-widest text-white/60">Qui sommes-nous ?</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Un moteur d'impact positif</h2>
          <p className="mt-4 text-white/70 max-w-2xl">SNK Foundation conçoit des programmes concrets pour répondre aux défis sociaux avec exigence, humanité et innovation.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-white/20 transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center mb-4">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Programs() {
  const items = [
    {
      title: 'Éducation & Numérique',
      desc: 'Initiation au code, ateliers STEM, inclusion numérique des jeunes et des femmes.',
    },
    {
      title: 'Entrepreneuriat',
      desc: 'Incubation, mentorat, microfinancement et accès à des réseaux d’opportunités.',
    },
    {
      title: 'Communautés',
      desc: 'Programmes locaux, art & culture, sport et engagement citoyen durable.',
    },
    {
      title: 'Environnement',
      desc: 'Sensibilisation, reforestation et projets circulaires à fort impact.',
    },
  ]

  return (
    <section id="programs" className="relative min-h-[100dvh] snap-start flex items-center py-28">
      <AmbientLayer colors="from-emerald-500/10 via-cyan-500/10 to-transparent" opacity={0.6} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
          <p className="text-sm uppercase tracking-widest text-white/60">Nos axes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Des programmes concrets</h2>
          <p className="mt-4 text-white/70 max-w-2xl">Chaque programme est pensé avec le terrain, mesurable et orienté résultats.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={container}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(120,119,198,0.18),transparent)]" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
                  En savoir plus <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Impact() {
  const stats = [
    { label: 'Jeunes impactés', value: '12K+' },
    { label: 'Programmes déployés', value: '60+' },
    { label: 'Partenariats actifs', value: '40+' },
    { label: 'Pays couverts', value: '6' },
  ]
  return (
    <section id="impact" className="relative min-h-[100dvh] snap-start flex items-center py-24">
      <AmbientLayer colors="from-fuchsia-500/10 via-indigo-500/10 to-transparent" opacity={0.6} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
          </div>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: i * 0.05 }}>
                <p className="text-4xl font-semibold">{s.value}</p>
                <p className="text-white/70 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Partners() {
  const logos = [
    'https://snk.foundation/wp-content/uploads/2022/05/cropped-logo-192x192.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/4a/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/BNP_Paribas.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Unesco_logo.svg',
  ]

  return (
    <section id="partners" className="relative min-h-[100dvh] snap-start flex items-center py-24">
      <AmbientLayer colors="from-sky-500/10 via-cyan-500/10 to-transparent" opacity={0.6} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold">Ils nous font confiance</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
              <img src={src} alt="logo partenaire" className="h-10 sm:h-12 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function News() {
  const items = [
    {
      title: 'Lancement d’un nouveau programme pour les jeunes',
      excerpt: "Un parcours d'accompagnement intensif pour révéler des talents et créer des opportunités.",
      img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Retour sur notre dernier événement',
      excerpt: 'Une journée de partages, de rencontres et de solutions concrètes au service des communautés.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section id="news" className="relative min-h-[100dvh] snap-start flex items-center py-24">
      <AmbientLayer colors="from-rose-500/10 via-amber-500/10 to-transparent" opacity={0.6} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold">Actualités</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((n, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={n.img} alt="actualité" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{n.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{n.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
                  Lire <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative min-h-[100dvh] snap-start flex items-center py-28">
      <AmbientLayer colors="from-white/0 via-white/0 to-white/0" opacity={0.4} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Rejoignez l'aventure</h2>
            <p className="mt-4 text-white/70 max-w-xl">Envie de soutenir nos actions, de devenir partenaire ou de lancer un projet avec nous ? Parlons-en.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="mailto:contact@snk.foundation" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90">
                Écrire un message <ChevronRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/15 hover:bg-white/15">
                Découvrir plus
              </a>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Nom</label>
                <input className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="vous@exemple.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Message</label>
              <textarea rows="4" className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Parlez-nous de votre idée" />
            </div>
            <button type="button" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90">
              Envoyer <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 snap-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1690683789978-3cf73960d650?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTTkslMjBGb3VuZGF0aW9ufGVufDB8MHx8fDE3NjMxMDk0MzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="SNK Foundation" className="h-8 w-8 rounded-lg object-contain" />
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} SNK Foundation. Tous droits réservés.</p>
        </div>
        <div className="text-white/60 text-sm">Conçu avec passion pour une expérience immersive.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <ProgressRail />
      <div className="h-[100dvh] overflow-y-auto snap-y snap-mandatory">
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Partners />
        <News />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
