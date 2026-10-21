'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  ExternalLink,
  Instagram,
  Menu,
  Search,
  Send,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const projects = [
  { title: 'Riali Consult', type: 'Marketing', tag: 'Exhibition marketing', summary: 'Freelance support for event visibility, visitor engagement and lead capture.', visual: 'bg-gradient-to-br from-[#d9f4ec] via-[#8edfc8] to-[#267f7b]' },
  { title: 'CE Digital / DIZROPT', type: 'Content', tag: 'Internship · Social analytics', summary: 'Content brainstorming, TikTok metrics and behind-the-scenes production.', visual: 'bg-gradient-to-br from-[#ffdfcf] via-[#ee997c] to-[#9f3e48]' },
  { title: 'MRD FLOWERS', type: 'Web', tag: 'Website · SEO · Social', summary: 'A digital foundation for a floral brand with product content and search in mind.', visual: 'bg-gradient-to-br from-[#f9e8d4] via-[#e8c29b] to-[#7f5540]' },
  { title: 'Kantanka Automobile', type: 'Strategy', tag: 'Digital marketing capstone', summary: 'A proposed digital strategy developed through MEST / Generation Ghana training.', visual: 'bg-gradient-to-br from-[#dbe4f3] via-[#8098c3] to-[#263957]' },
  { title: 'Pyteline', type: 'SEO', tag: 'SEO · Blogging', summary: 'Search-friendly content and indexing support for a growing digital presence.', visual: 'bg-gradient-to-br from-[#e9e4ff] via-[#b4a4e8] to-[#594a9c]' },
]
const services = [
  ['01', 'Digital presence audits', 'A clear-eyed review of your website, content, search visibility and conversion path.', ['Website and channel review', 'Opportunity map', 'Prioritized action plan']],
  ['02', 'Content & social strategy', 'Build a consistent point of view that gives the right people a reason to pay attention.', ['Content pillars', 'Platform direction', 'Campaign concepts']],
  ['03', 'SEO & website optimization', 'Make your digital home easier to discover, understand and act on.', ['On-page SEO', 'Content briefs', 'UX recommendations']],
  ['04', 'Digital marketing strategy', 'Turn scattered activity into a focused growth system with goals you can actually track.', ['Audience and positioning', 'Channel strategy', 'Measurement framework']],
  ['05', 'Websites & landing pages', 'Simple, credible digital experiences that support your marketing instead of slowing it down.', ['Landing page direction', 'Website development', 'Conversion-minded content']],
]

function Mark() { return <span className="flex size-9 items-center justify-center rounded-full bg-[#42E0BB] text-[#101A2C]"><Sparkles className="size-4" /></span> }
function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#42E0BB]"><span className="size-1.5 rounded-full bg-[#42E0BB]" />{children}</p> }

export function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [formState, setFormState] = useState<'idle' | 'sent'>('idle')
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((p) => p.type === filter), [filter])
  const nav = ['About', 'Services', 'Work', 'Insights', 'Contact']

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('sent')
  }

  return <div className="min-h-screen bg-[#f7f9fc] text-[#101a2c]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101a2c]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#top" className="flex items-center gap-3 text-sm font-bold tracking-tight text-white"><Mark /><span>DevLife<span className="text-[#42E0BB]">Fly</span></span></Link>
        <nav className="hidden items-center gap-8 md:flex">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition-colors hover:text-[#42E0BB]">{item}</a>)}<a href="#contact" className="rounded-full bg-[#42E0BB] px-5 py-2.5 text-sm font-semibold text-[#101a2c] transition-transform hover:-translate-y-0.5">Start a project <ArrowUpRight className="ml-1 inline size-4" /></a></nav>
        <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 text-white md:hidden">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#101a2c] px-5 py-6 md:hidden">{nav.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-200">{item}</a>)}</nav>}
    </header>

    <main id="top">
     
<section className="overflow-hidden bg-[#101a2c] px-5 pb-24 pt-36 text-white lg:px-8 lg:pb-32 lg:pt-48">
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end">

    {/* LEFT SIDE: HEADLINE */}
    <div>
      <SectionLabel>
        Digital marketing strategist & creative technologist
      </SectionLabel>

      <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-[clamp(4.5rem,7.6vw,7.8rem)]">
        Helping brands get{" "}
        <span className="text-[#42E0BB]">discovered</span>,
        connect with customers, and grow.
      </h1>
    </div>

    {/* RIGHT SIDE: PHOTO, INTRODUCTION & BUTTONS */}
    <div className="max-w-md lg:pb-2">

      {/* PROFILE PHOTO */}
      <div className="mb-8">
        <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[#42E0BB] shadow-[0_0_35px_rgba(66,224,187,0.2)] sm:h-52 sm:w-52">
          <Image
            src="/images/derrick-profile.jpeg"
            alt="Derrick Alberto-Darku, Digital Marketing Strategist"
            fill
            priority
            sizes="(max-width: 640px) 176px, 208px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* INTRODUCTION */}
      <p className="text-lg leading-relaxed text-slate-300">
        I&apos;m Derrick Alberto-Darku, a Digital Marketing
        Strategist with a background in Computer Engineering.
        I combine creative storytelling, digital strategy,
        SEO, analytics, and technology to help businesses
        strengthen their online presence.
      </p>

      {/* CALL TO ACTION BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-full bg-[#42E0BB] px-5 py-3 text-sm font-semibold text-[#101a2c] transition-transform hover:-translate-y-0.5"
        >
          View my work
          <ArrowUpRight className="ml-1 inline size-4" />
        </a>

        <a
          href="#contact"
          className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#42E0BB] hover:text-[#42E0BB]"
        >
          Discuss your project
        </a>
      </div>

    </div>
  </div>

  {/* BOTTOM HIGHLIGHTS */}
  <div className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-8 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:grid-cols-4">
    <span>Strategy-led</span>
    <span>Evidence-minded</span>
    <span>Technology-aware</span>

    <span className="flex items-center gap-2 sm:justify-end">
      <span className="size-2 animate-pulse rounded-full bg-[#42E0BB]" />
      Available for select projects
    </span>
  </div>
</section>


      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-36"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><SectionLabel>01 / About</SectionLabel><h2 className="max-w-sm text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Where marketing meets the machine.</h2></div><div className="max-w-3xl"><p className="text-2xl leading-snug text-[#18283d] sm:text-3xl">The internet is both a creative canvas and a technical system. My work lives at the intersection — making brands clearer, more discoverable and more useful.</p><p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600">From Computer Engineering and web development to cloud computing, DevOps and cybersecurity, I learned how digital products work under the hood. MEST / Generation Ghana digital marketing training and a CE Digital internship gave that technical foundation a sharper commercial edge. Today, I bring the same curiosity to freelance marketing projects.</p><Link href="/technology" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#18283d] underline decoration-[#42E0BB] decoration-2 underline-offset-4">Explore my technology background <ArrowUpRight className="size-4" /></Link></div></div></section>

      <section id="services" className="scroll-mt-24 bg-[#18283d] px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><SectionLabel>02 / What I do</SectionLabel><h2 className="max-w-sm text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Useful strategy. Beautifully executed.</h2></div><div className="grid gap-px overflow-hidden rounded-2xl bg-slate-600 sm:grid-cols-2">{services.map(([num, title, desc, deliverables]) => <article key={title} className="bg-[#18283d] p-7 transition-colors hover:bg-[#20364e]"><span className="text-sm text-[#42E0BB]">{num}</span><h3 className="mt-10 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p><ul className="mt-6 flex flex-col gap-2 text-sm text-slate-400">{(deliverables as string[]).map((d) => <li key={d} className="flex gap-2"><Check className="mt-0.5 size-4 text-[#42E0BB]" />{d}</li>)}</ul><a href="#contact" className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-[#42E0BB]">Request a quote <ArrowUpRight className="size-4" /></a></article>)}</div></div><div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl border border-slate-600 p-6 sm:flex-row sm:items-center"><div><p className="font-semibold">Learning lab</p><p className="mt-1 text-sm text-slate-400">Paid advertising and email automation are currently in active experimentation.</p></div><span className="rounded-full border border-[#42E0BB]/40 px-4 py-2 text-xs font-semibold text-[#42E0BB]">In progress</span></div></div></section>

      <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-36"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><SectionLabel>03 / Selected work</SectionLabel><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A growing body of work.</h2></div><div className="flex flex-wrap gap-2">{['All', 'Marketing', 'Content', 'SEO', 'Web', 'Strategy'].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${filter === item ? 'border-[#18283d] bg-[#18283d] text-white' : 'border-slate-300 text-slate-600 hover:border-[#18283d]'}`}>{item}</button>)}</div></div><div className="mt-12 grid gap-6 md:grid-cols-2">{visibleProjects.map((project, index) => <article key={project.title} className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}><div className={`relative flex min-h-64 items-end overflow-hidden ${project.visual}`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.45),transparent_35%)] transition-transform duration-500 group-hover:scale-105" /><span className="relative m-6 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#18283d]">{project.type}</span></div><div className="flex flex-col justify-between p-7"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{project.tag}</p><h3 className="mt-4 text-2xl font-bold tracking-tight">{project.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p></div><button className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold">View case study <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button></div></article>)}</div><p className="mt-8 text-sm text-slate-500">Case studies are being expanded with verified evidence. Missing metrics and media will be added as they become available.</p></section>

      <section id="insights" className="bg-[#e9f4f0] px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><SectionLabel>04 / Insights</SectionLabel><h2 className="max-w-sm text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Thinking out loud.</h2><p className="mt-5 max-w-sm leading-relaxed text-slate-600">Notes on SEO, content, analytics, experiments and building something of your own.</p></div><div className="grid gap-4">{['What makes a digital presence feel trustworthy?', 'The first 30 minutes of a useful SEO audit', 'Learning paid ads without wasting the budget'].map((title, i) => <article key={title} className="flex items-center justify-between border-b border-[#b6d4ca] py-5"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{['Strategy', 'SEO', 'Learning lab'][i]} · Coming soon</p><h3 className="mt-2 text-lg font-semibold">{title}</h3></div><ArrowUpRight className="size-5 text-slate-500" /></article>)}</div></div></section>

      <section id="contact" className="scroll-mt-24 bg-[#101a2c] px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>05 / Contact</SectionLabel><h2 className="max-w-lg text-5xl font-bold leading-tight tracking-[-0.05em] sm:text-6xl">Have a growth question? Let&apos;s talk.</h2><p className="mt-6 max-w-md leading-relaxed text-slate-300">Tell me a little about where you are and what you want to make clearer. I&apos;ll get back to you at <a className="text-[#42E0BB] underline" href="mailto:derrickalberto@ymail.com">derrickalberto@ymail.com</a>.</p><p className="mt-12 text-sm text-slate-400">Ghana · Working globally</p></div><form onSubmit={submit} className="rounded-2xl bg-[#f7f9fc] p-6 text-[#101a2c] sm:p-8">{formState === 'sent' ? <div className="flex min-h-80 flex-col items-start justify-center"><span className="flex size-12 items-center justify-center rounded-full bg-[#42E0BB]"><Check /></span><h3 className="mt-5 text-2xl font-bold">Thanks for reaching out.</h3><p className="mt-2 text-slate-600">Your inquiry is ready to send. Connect the server-side email provider before production deployment.</p><button type="button" onClick={() => setFormState('idle')} className="mt-6 text-sm font-semibold underline">Send another inquiry</button></div> : <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input required name="name" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-[#42E0BB] focus:ring-2" placeholder="Your name" /></label><label className="text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-[#42E0BB] focus:ring-2" placeholder="you@company.com" /></label><label className="text-sm font-semibold">Business<input name="business" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-[#42E0BB] focus:ring-2" placeholder="Company or project" /></label><label className="text-sm font-semibold">Service interest<select name="service" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-[#42E0BB] focus:ring-2"><option>Choose a service</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select></label><label className="text-sm font-semibold">Budget range<select name="budget" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-[#42E0BB] focus:ring-2"><option>Not sure yet</option><option>Under $500</option><option>$500 – $1,500</option><option>$1,500+</option></select></label><label className="text-sm font-semibold sm:col-span-2">Project description<textarea required name="description" rows={4} className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-[#42E0BB] focus:ring-2" placeholder="What are you hoping to improve?" /></label><label className="flex gap-3 text-xs font-normal text-slate-600 sm:col-span-2"><input required type="checkbox" className="mt-0.5 accent-[#42E0BB]" />I agree to be contacted about this inquiry.</label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18283d] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:col-span-2 sm:justify-self-start">Send inquiry <Send className="size-4" /></button></div>}</form></div></section>
    </main>
    <footer className="flex flex-col justify-between gap-4 bg-[#101a2c] px-5 pb-8 text-sm text-slate-400 sm:flex-row lg:px-8"><span>© {new Date().getFullYear()} DevLifeFly · Derrick Alberto-Darku</span><span className="flex gap-5"><a href="mailto:derrickalberto@ymail.com" className="hover:text-[#42E0BB]">Email</a><span>LinkedIn link pending</span></span></footer>
  </div>
}
