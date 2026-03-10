'use client'

import { useEffect } from 'react'

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
          <div className="service-card reveal">
            <div className="service-icon">🧾</div>
            <h3>Document Processing</h3>
            <p>AI reads receipts, invoices, and forms — data extracted and logged automatically. No manual entry, no mistakes.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">📧</div>
            <h3>Email &amp; Communication</h3>
            <p>Sort, respond, and route emails automatically. AI handles common FAQs and flags urgent items for your attention.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">📊</div>
            <h3>Reporting &amp; Insights</h3>
            <p>Weekly summaries and dashboards generated automatically from your existing data. Always know where you stand.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">📱</div>
            <h3>Lead Management</h3>
            <p>Capture leads from any channel, notify your team instantly, and follow up automatically. Zero missed enquiries.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🔁</div>
            <h3>Workflow Automation</h3>
            <p>Connect Xero, Gmail, Google Sheets and more — so data flows between systems without anyone copying it manually.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">📅</div>
            <h3>Scheduling &amp; Follow-ups</h3>
            <p>Job reminders, invoice follow-ups, appointment confirmations — automated so nothing slips through the cracks.</p>
          </div>
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
          {/* WEEK BY WEEK */}
          <div>
            {[
              ['Week 1', 'AI Opportunity Audit', 'We map your business and identify where AI will have the biggest impact.'],
              ['Week 2', 'Process Mapping', 'Document workflows before any tools are built. This is where most programmes fail.'],
              ['Week 3', 'AI Tools Introduction', 'Hands-on intro to the tools. No tech background needed — designed for owners.'],
              ['Week 4', 'Workflow Building', 'Build your first automations together. You participate, not just watch.'],
              ['Week 5', 'Document Automation', 'Receipts, invoices, reports — AI-powered processing set up for your business.'],
              ['Week 6', 'Implementation Roadmap', 'A plan to roll automation across your whole business, plus the skills to keep building.'],
            ].map(([week, title, desc]) => (
              <div key={week} className="reveal" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ minWidth: '62px', background: 'var(--accent-glow)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: '8px', padding: '0.3rem 0.4rem', textAlign: 'center', fontSize: '0.62rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0, marginTop: '3px' }}>{week}</div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PRICING CARD */}
          <div className="reveal" style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 'var(--radius)', padding: '2rem', position: 'sticky', top: '100px' }}>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Programme Investment</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--text-primary)', lineHeight: 1 }}>$5,000</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+ GST</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Designed for NZ small businesses looking to adopt AI and automation.
            </p>
            {[
              '6 weekly sessions (~2hrs each)',
              '3–5 working automations built for your business',
              'Designed for non-technical business owners',
              'Full documentation and reference materials',
              '30-day post-programme support',
            ].map(f => (
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
          {[
            ['🚀', 'AI Quick Start', 'Half day · 3hrs', '$750 + GST', 'A practical intro to AI for business owners. Walk away knowing exactly where to start and what to automate first.', ['What AI can and can\'t do for your business', 'Live demonstrations with real examples', 'Your personalised quick-wins action plan']],
            ['⚡', 'Automation Essentials', 'Full day · 6hrs', '$1,500 + GST', 'Build your first real automation from scratch — tailored to your specific business and the tools you already use.', ['Map your highest-value workflows', 'Build a live, working automation', 'Connect your existing tools (Xero, Gmail, Sheets)']],
            ['🔨', 'AI for Tradies', 'Half day · 3hrs', '$750 + GST', 'Purpose-built for trades businesses. Leads, job scheduling, and invoice follow-up — all on autopilot.', ['Lead capture from Facebook & web', 'Automated invoice & payment follow-up', 'Job scheduling and reminder systems']],
          ].map(([icon, title, dur, price, desc, points]) => (
            <div key={title} className="service-card reveal" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem 0 0.85rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.2rem 0.6rem', color: 'var(--text-secondary)' }}>{dur}</span>
                <span style={{ fontSize: '0.72rem', background: 'var(--accent-glow)', border: '1px solid rgba(0,229,160,0.25)', borderRadius: '6px', padding: '0.2rem 0.6rem', color: 'var(--accent)', fontWeight: 600 }}>{price}</span>
              </div>
              <p style={{ flex: 1 }}>{desc}</p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                {points.map(p => (
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
          {[
            ['Finance Automation', 'Receipt Processing System', 'Manual receipt entry — 30–45 min/week, frequent errors', 'AI reads photo → data extracted → logged to Sheets → image saved to Drive. NZ & AU tax formats.', '90% reduction in admin time. Zero manual entry.'],
            ['Accounts Receivable', 'Invoice Follow-Up Automation', 'Late payments common. Chasing was delayed or forgotten — costing cash flow.', 'Xero → AI-drafted tiered reminders on schedule. Polite at 7 days, firmer at 14, final at 21.', 'Faster payments. Zero missed follow-ups.'],
            ['Lead Generation', 'Tradie Lead Capture', 'Leads missed because no-one watched the inbox. Jobs lost to faster competitors.', 'All channels monitored → instant Telegram alert → auto-reply sent → lead logged to CRM.', 'Zero missed leads. Response time: hours → minutes.'],
          ].map(([tag, title, problem, solution, result]) => (
            <div key={title} className="work-card reveal">
              <div className="work-tag">{tag}</div>
              <h3>{title}</h3>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem', marginTop: '0.75rem' }}>Problem</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{problem}</p>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem', marginTop: '0.75rem' }}>Solution</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{solution}</p>
              <div className="work-result">✓ {result}</div>
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
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>Plain English, no jargon.</strong> Everything is explained for business owners, not developers.</p>
              </div>
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>Practical, not theoretical.</strong> Every session ends with something working in your business.</p>
              </div>
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>You own everything.</strong> No lock-in. I build it, teach you, and then it&apos;s yours.</p>
              </div>
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

