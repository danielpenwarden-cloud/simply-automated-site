'use client'

import { useEffect } from 'react'

const AI_SERVICES = [
  { icon: '🧾', title: 'Document Processing', desc: 'AI reads receipts, invoices, and forms — data extracted and logged automatically. No manual entry, no mistakes.' },
  { icon: '📧', title: 'Email & Communication', desc: 'Sort, respond, and route emails automatically. AI handles common FAQs and flags urgent items for your attention.' },
  { icon: '📊', title: 'Reporting & Insights', desc: 'Weekly summaries and dashboards generated automatically from your existing data. Always know where you stand.' },
  { icon: '📱', title: 'Lead Management', desc: 'Capture leads from any channel, notify your team instantly, and follow up automatically. Zero missed enquiries.' },
  { icon: '🔁', title: 'Workflow Automation', desc: 'Connect Xero, Gmail, Google Sheets and more — so data flows between systems without anyone copying it manually.' },
  { icon: '📅', title: 'Scheduling & Follow-ups', desc: 'Job reminders, invoice follow-ups, appointment confirmations — automated so nothing slips through the cracks.' },
]

const WEEKS = [
  { week: 'Week 1', title: 'AI Opportunity Audit', desc: 'We map your business and identify where AI will have the biggest impact.' },
  { week: 'Week 2', title: 'Process Mapping', desc: 'Document workflows before any tools are built. This is where most programmes fail.' },
  { week: 'Week 3', title: 'AI Tools Introduction', desc: 'Hands-on intro to the tools. No tech background needed — designed for owners.' },
  { week: 'Week 4', title: 'Workflow Building', desc: 'Build your first automations together. You participate, not just watch.' },
  { week: 'Week 5', title: 'Document Automation', desc: 'Receipts, invoices, reports — AI-powered processing set up for your business.' },
  { week: 'Week 6', title: 'Implementation Roadmap', desc: 'A plan to roll automation across your whole business, plus the skills to keep building.' },
]

const PROGRAMME_INCLUDES = [
  '6 weekly sessions (~2hrs each)',
  '3–5 working automations built for your business',
  'Designed for non-technical business owners',
  'Full documentation and reference materials',
  '30-day post-programme support',
]

const WORKSHOPS = [
  {
    icon: '🚀',
    title: 'AI Quick Start',
    duration: 'Half day · 3hrs',
    price: '$750 + GST',
    desc: 'A practical intro to AI for business owners. Walk away knowing exactly where to start and what to automate first.',
    points: ['What AI can and can\'t do for your business', 'Live demonstrations with real examples', 'Your personalised quick-wins action plan'],
  },
  {
    icon: '⚡',
    title: 'Automation Essentials',
    duration: 'Full day · 6hrs',
    price: '$1,500 + GST',
    desc: 'Build your first real automation from scratch — tailored to your specific business and the tools you already use.',
    points: ['Map your highest-value workflows', 'Build a live, working automation', 'Connect your existing tools (Xero, Gmail, Sheets)'],
  },
  {
    icon: '🔨',
    title: 'AI for Tradies',
    duration: 'Half day · 3hrs',
    price: '$750 + GST',
    desc: 'Purpose-built for trades businesses. Leads, job scheduling, and invoice follow-up — all on autopilot.',
    points: ['Lead capture from Facebook & web', 'Automated invoice & payment follow-up', 'Job scheduling and reminder systems'],
  },
]

const CASE_STUDIES = [
  {
    tag: 'Finance Automation',
    title: 'Receipt Processing System',
    problem: 'Manual receipt entry — 30–45 min/week, frequent errors.',
    solution: 'AI reads photo → data extracted → logged to Sheets → image saved to Drive. NZ & AU tax formats.',
    result: '90% reduction in admin time. Zero manual entry.',
  },
  {
    tag: 'Accounts Receivable',
    title: 'Invoice Follow-Up Automation',
    problem: 'Late payments common. Chasing was delayed or forgotten — costing cash flow.',
    solution: 'Xero → AI-drafted tiered reminders on schedule. Polite at 7 days, firmer at 14, final at 21.',
    result: 'Faster payments. Zero missed follow-ups.',
  },
  {
    tag: 'Lead Generation',
    title: 'Tradie Lead Capture',
    problem: 'Leads missed because no-one watched the inbox. Jobs lost to faster competitors.',
    solution: 'All channels monitored → instant Telegram alert → auto-reply sent → lead logged to CRM.',
    result: 'Zero missed leads. Response time: hours → minutes.',
  },
]

const ABOUT_QUALITIES = [
  { title: 'Plain English, no jargon.', desc: 'Everything is explained for business owners, not developers.' },
  { title: 'Practical, not theoretical.', desc: 'Every session ends with something working in your business.' },
  { title: 'You own everything.', desc: "No lock-in. I build it, teach you, and then it's yours." },
]

export default function Training() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navLinks')?.classList.remove('open')
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const btn = form.querySelector('button')
    btn.textContent = 'Sending...'
    btn.disabled = true

    fetch('https://formspree.io/f/xzdjepyo', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          btn.textContent = "Sent! We'll be in touch ✓"
          btn.style.background = '#00c98c'
          form.reset()
        } else {
          btn.textContent = 'Error — try again'
          btn.style.background = '#e05555'
          btn.disabled = false
        }
      })
      .catch(() => {
        btn.textContent = 'Error — try again'
        btn.style.background = '#e05555'
        btn.disabled = false
      })
  }

  function toggleNav() {
    document.getElementById('navLinks')?.classList.toggle('open')
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">simply<span>.</span>automated</a>
        <ul className="nav-links" id="navLinks">
          <li><a href="/#services">Services</a></li>
          <li><a href="#programme">Programme</a></li>
          <li><a href="#workshops">Workshops</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact" className="nav-cta">Get Your Free Audit</a></li>
        </ul>
        <button className="mobile-toggle" onClick={toggleNav} aria-label="Menu">☰</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge"><span className="dot"></span> AI training for NZ small businesses</div>
          <h1>AI Training for<br />NZ <em>Small Business</em></h1>
          <p className="hero-sub">Practical, hands-on programmes that build real AI capability in your business. Not theory — working automations, built for you.</p>
          <div className="hero-actions">
            <a href="#programme" className="btn-primary">See the Programme →</a>
            <a href="#workshops" className="btn-secondary">View Workshops</a>
          </div>
          <p style={{ marginTop: '0.85rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            15-minute call. No tech talk. Just quick wins.
          </p>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-grid">
          <div className="reveal">
            <div className="stat-number">68%</div>
            <div className="stat-label">of NZ SMEs have no AI adoption plans</div>
          </div>
          <div className="reveal">
            <div className="stat-number">15+</div>
            <div className="stat-label">hours per week saved with automation</div>
          </div>
          <div className="reveal">
            <div className="stat-number">6 weeks</div>
            <div className="stat-label">to a fully automated business</div>
          </div>
        </div>
      </div>

      {/* AI FOR NZ */}
      <section id="ai-for-business" style={{ background: 'var(--bg-primary)' }}>
        <div className="services-header reveal">
          <div className="section-label">AI for NZ Small Business</div>
          <h2 className="section-title">What can AI actually <em>do for you?</em></h2>
          <p className="section-desc">Practical tools any NZ small business can use right now — no tech background needed.</p>
        </div>
        <div className="services-grid">
          {AI_SERVICES.map((s) => (
            <div key={s.title} className="service-card reveal">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" style={{ background: 'var(--bg-secondary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Flagship Programme</div>
          <h2 className="section-title">AI Productivity Programme <em>for SMEs</em></h2>
          <p className="section-desc">6 weeks. Working automations built for your specific business. Designed for non-technical business owners — not developers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto', alignItems: 'start' }}>
          <div>
            {WEEKS.map((w) => (
              <div key={w.week} className="reveal" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ minWidth: '62px', background: 'var(--accent-glow)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '8px', padding: '0.3rem 0.4rem', textAlign: 'center', fontSize: '0.62rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0, marginTop: '3px' }}>{w.week}</div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>{w.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ background: 'var(--accent-glow)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 'var(--radius)', padding: '2rem', position: 'sticky', top: '100px' }}>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Programme Investment</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--text-primary)', lineHeight: 1 }}>$5,000</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+ GST</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Designed for NZ small businesses looking to adopt AI and automation.
            </p>
            {PROGRAMME_INCLUDES.map((f) => (
              <div key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
            <a href="/#contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>Enquire About This Programme →</a>
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section id="workshops" style={{ background: 'var(--bg-primary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Workshops</div>
          <h2 className="section-title">Shorter sessions, <em>immediate results</em></h2>
          <p className="section-desc">Designed for non-technical business owners. A practical, low-commitment way to get started with AI.</p>
        </div>
        <div className="services-grid">
          {WORKSHOPS.map((w) => (
            <div key={w.title} className="service-card reveal" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="service-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem 0 0.85rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.2rem 0.6rem', color: 'var(--text-secondary)' }}>{w.duration}</span>
                <span style={{ fontSize: '0.72rem', background: 'var(--accent-glow)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '6px', padding: '0.2rem 0.6rem', color: 'var(--accent)', fontWeight: 600 }}>{w.price}</span>
              </div>
              <p style={{ flex: 1 }}>{w.desc}</p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                {w.points.map((p) => (
                  <div key={p} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>{p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" style={{ background: 'var(--bg-secondary)' }}>
        <div className="work-header reveal">
          <div className="section-label">Case Studies</div>
          <h2 className="section-title">Real automations, <em>real results</em></h2>
          <p className="section-desc">Every one of these started as a manual process costing someone hours every week.</p>
        </div>
        <div className="work-grid">
          {CASE_STUDIES.map((c) => (
            <div key={c.title} className="work-card reveal">
              <div className="work-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem', marginTop: '0.75rem' }}>Problem</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{c.problem}</p>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem', marginTop: '0.75rem' }}>Solution</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{c.solution}</p>
              <div className="work-result">✓ {c.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--bg-primary)' }}>
        <div className="about-layout">
          <div className="about-text">
            <div className="section-label reveal">About</div>
            <h2 className="section-title reveal">Built by a Kiwi who gets <em>business</em></h2>
            <p className="section-desc reveal">Hi, I&apos;m Daniel. After years running and automating my own businesses, I realised most small companies spend hours every week on tasks that could easily be automated.</p>
            <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Simply Automated helps NZ businesses implement practical AI systems that save time. No jargon. No complicated software projects. Just smarter workflows.</p>
            <div className="about-qualities reveal">
              {ABOUT_QUALITIES.map((q) => (
                <div key={q.title} className="quality">
                  <span className="quality-check">✓</span>
                  <p><strong>{q.title}</strong> {q.desc}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '1.25rem 0 1rem' }}>📍 Based in Tauranga, New Zealand · Working with NZ small businesses</p>
            <a href="/#contact" className="btn-primary reveal">Let&apos;s Talk →</a>
          </div>
          <div className="about-visual reveal">
            <div className="about-card">
              <p className="about-quote">Most of my clients aren&apos;t looking for a tech partner. They just want someone to take the admin off their plate. That&apos;s exactly what this training is designed to do.</p>
              <div className="about-attribution">
                <strong>Dan Penwarden</strong>
                Founder, Simply Automated · Tauranga, NZ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="cta-content">
          <div className="section-label reveal">Enquire Now</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Ready to get started?<br /><em>Let&apos;s talk.</em></h2>
          <p className="section-desc reveal" style={{ textAlign: 'center' }}>Tell us about your business and we&apos;ll recommend the right training option. No obligation, no hard sell.</p>
          <form className="cta-form reveal" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <input type="text" name="business" placeholder="Business name (optional)" />
            <textarea name="message" placeholder="Tell us about your business and what you're hoping to automate..."></textarea>
            <button type="submit" className="btn-primary">Send Enquiry →</button>
          </form>
          <p className="cta-alt reveal">Or email directly at <a href="mailto:dan@simplyautomated.nz">dan@simplyautomated.nz</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            © 2026 Simply Automated Limited · Tauranga, New Zealand · <a href="mailto:dan@simplyautomated.nz">dan@simplyautomated.nz</a>
          </div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#programme">Programme</a>
            <a href="#workshops">Workshops</a>
            <a href="#case-studies">Case Studies</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
