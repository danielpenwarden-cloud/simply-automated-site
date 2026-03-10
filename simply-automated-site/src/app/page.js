'use client'

import { useEffect } from 'react'

export default function Home() {
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
        <a href="#" className="nav-logo">simply<span>.</span>automated</a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#services">Services</a></li>
          <li><a href="#automation">Automation</a></li>
          <li><a href="/training">Training</a></li>
          <li><a href="#work">Case Studies</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact" className="nav-cta">Get Your Free Audit</a></li>
        </ul>
        <button className="mobile-toggle" onClick={toggleNav} aria-label="Menu">☰</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge"><span className="dot"></span> AI automation for NZ small businesses</div>
          <h1>Stop doing tasks a<br />machine could <em>handle</em></h1>
          <p className="hero-sub">Practical AI automation for New Zealand small businesses.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Request a Free Audit →</a>
            <a href="#work" className="btn-secondary">See Our Work</a>
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
            <div className="stat-number">100%</div>
            <div className="stat-label">of audits identify quick-win automations</div>
          </div>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <section id="who" style={{ background: 'var(--bg-secondary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Who we work with</div>
          <h2 className="section-title">Built for <em>NZ business owners</em></h2>
          <p className="section-desc">We specialise in practical AI automation for the businesses that need it most.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', maxWidth: '760px', margin: '0 auto 2.5rem' }}>
          {['Small business owners', 'Tradies & service businesses', 'Professional services', 'Retailers & hospitality', 'Businesses drowning in admin', 'Anyone chasing invoices manually'].map(w => (
            <span key={w} className="reveal" style={{ display: 'inline-flex', padding: '0.4rem 1rem', borderRadius: '100px', background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{w}</span>
          ))}
        </div>
        <div className="reveal" style={{ background: 'rgba(0, 229, 160, 0.08)', border: '1px solid rgba(0, 229, 160, 0.2)', borderRadius: 'var(--radius)', padding: '1.5rem 2rem', maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>If your business runs on spreadsheets, email, and manual follow-ups — <strong style={{ color: 'var(--accent)' }}>you&apos;re exactly who we built this for.</strong></p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Sound familiar?</div>
          <h2 className="section-title">Spending too much time on <em>admin?</em></h2>
          <p className="section-desc">Most NZ small business owners lose 10–15 hours every week to tasks that could run on autopilot.</p>
        </div>
        <div className="services-grid">
          {[
            ['🧾', 'Manually entering receipts and invoices'],
            ['📧', 'Chasing overdue payments by hand'],
            ['📋', 'Copying data between systems that don\'t talk'],
            ['📱', 'Missing leads due to slow response times'],
            ['📊', 'Building reports that should build themselves'],
            ['🔁', 'Same admin tasks, every single week'],
          ].map(([icon, pain]) => (
            <div key={pain} className="service-card reveal">
              <div className="service-icon">{icon}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>{pain}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ background: 'rgba(0, 229, 160, 0.08)', border: '1px solid rgba(0, 229, 160, 0.2)', borderRadius: 'var(--radius)', padding: '1.5rem 2rem', maxWidth: '560px', margin: '2.5rem auto 0', textAlign: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>AI automation can eliminate most of this — with tools that already exist. <strong style={{ color: 'var(--accent)' }}>We set it all up for you.</strong></p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: 'var(--bg-secondary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Services</div>
          <h2 className="section-title">Everything you need to <em>automate</em></h2>
          <p className="section-desc">From initial audit to ongoing support — we handle the tech so you don&apos;t have to.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon">🔍</div>
            <h3>AI Automation Audit</h3>
            <p>We sit down, learn your business, and find the tasks costing you the most time and money. You get a clear, plain-English report with exactly what to automate first.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">⚡</div>
            <h3>Custom Workflow Builds</h3>
            <p>Automated invoicing, lead capture, receipt processing, job scheduling — built end-to-end, tailored to the tools you already use like Xero, email, and spreadsheets.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🤖</div>
            <h3>AI Integration</h3>
            <p>Smart document reading, auto-generated responses, intelligent data extraction — we plug AI into your business where it makes a real, measurable difference.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">📊</div>
            <h3>Data &amp; Reporting</h3>
            <p>Daily briefings, market updates, and business dashboards delivered automatically — so you always know where things stand without lifting a finger.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🔗</div>
            <h3>System Integration</h3>
            <p>Connect the apps you already use — accounting, CRM, marketing, scheduling — into one seamless flow. No more copying between systems.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🛡️</div>
            <h3>Ongoing Support &amp; Retainers</h3>
            <p>Monthly maintenance, new automations as your business grows, and priority support. We&apos;re in your corner for the long haul.</p>
          </div>
        </div>
      </section>

      {/* RECEIPT TRACKER */}
      <section id="automation" style={{ background: 'var(--bg-primary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Ready-to-Run Product</div>
          <h2 className="section-title">Smart Receipt Tracking <em>from $19/month</em></h2>
          <p className="section-desc">Snap a photo, send to Telegram — AI reads the store, total, GST, and payment method, then logs everything automatically to Google Sheets and saves the image to Google Drive.</p>
        </div>
        <div className="work-grid reveal" style={{ marginBottom: '2rem' }}>
          <div className="work-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src="/receipt-telegram.png" alt="Telegram receipt confirmation" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}>📱 Telegram confirmation</div>
          </div>
          <div className="work-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src="/receipt-sheets.png" alt="Google Sheets log" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}>📊 Google Sheets log</div>
          </div>
          <div className="work-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src="/receipt-drive.png" alt="Google Drive folder" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}>📁 Google Drive folder</div>
          </div>
          <div className="work-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src="/receipt-workflow.png" alt="n8n workflow" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}>⚙️ n8n workflow</div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }} className="reveal">
          <a href="#contact" className="btn-primary">Get Receipt Tracker — $19/month →</a>
          <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Full setup included · NZ &amp; AU tax formats · Cancel anytime</p>
        </div>
      </section>

      {/* PRICING */}
      <div id="pricing" className="stats-bar" style={{ borderTop: 'none' }}>
        <div className="stats-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
          <div className="reveal">
            <div className="stat-number" style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>Automations start from just $19/month</div>
            <div className="stat-label" style={{ maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>Every business is different. We&apos;ll tailor a package to your needs — from a single automation to a full system overhaul. Your free audit will show you exactly what&apos;s possible.</div>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>Get Your Free Audit →</a>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="process">
        <div className="process-header reveal">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Simple from <em>day one</em></h2>
          <p className="section-desc">No jargon, no complexity. We do the work — you get the results.</p>
        </div>
        <div className="process-steps">
          <div className="step reveal">
            <div className="step-num">1</div>
            <h3>Free Automation Audit</h3>
            <p>We meet, learn your business, and identify the highest-value automation opportunities.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">2</div>
            <h3>Identify Quick Wins</h3>
            <p>We prioritise the 2–3 workflows that will save you the most time immediately.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">3</div>
            <h3>Build &amp; Implement</h3>
            <p>We build, test, and go live — connected to the tools you already use.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">4</div>
            <h3>Ongoing Optimisation</h3>
            <p>We monitor, improve, and add new automations as your business grows.</p>
          </div>
        </div>
      </section>

      {/* WORK / CASE STUDIES */}
      <section id="work">
        <div className="work-header reveal">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Built, tested, <em>delivering</em> results</h2>
          <p className="section-desc">Real automation systems built for NZ and Australian businesses.</p>
        </div>
        <div className="work-grid">
          <div className="work-card reveal">
            <div className="work-tag">Finance Automation</div>
            <h3>Smart Receipt Extraction</h3>
            <p>AI reads receipts, extracts GST and totals, then pushes everything straight into Google Sheets. Handles both NZ (15% GST) and Australian (10% GST) tax formats.</p>
            <div className="work-result">✓ 90% reduction in admin time. Zero manual entry.</div>
            <div className="work-tools">
              <span className="tool-badge">📱 Telegram</span>
              <span className="tool-badge">🤖 Claude AI</span>
              <span className="tool-badge">📊 Google Sheets</span>
              <span className="tool-badge">📁 Google Drive</span>
            </div>
          </div>
          <div className="work-card reveal">
            <div className="work-tag">Accounts Receivable</div>
            <h3>Invoice Follow-Up Automation</h3>
            <p>Overdue invoices trigger AI-drafted reminders on a schedule — polite at 7 days, firmer at 14. Runs automatically without you thinking about it.</p>
            <div className="work-result">✓ Faster payments. Zero missed follow-ups.</div>
            <div className="work-tools">
              <span className="tool-badge">📒 Xero</span>
              <span className="tool-badge">✉️ Gmail</span>
              <span className="tool-badge">📊 Google Sheets</span>
              <span className="tool-badge">🤖 Claude AI</span>
            </div>
          </div>
          <div className="work-card reveal">
            <div className="work-tag">Lead Generation</div>
            <h3>Lead Capture Automation</h3>
            <p>Leads arrive via website, Facebook, and email — responses were slow and jobs were lost. Now every enquiry triggers an instant alert, auto-reply, and CRM entry.</p>
            <div className="work-result">✓ Zero missed enquiries. Response time: hours → minutes.</div>
            <div className="work-tools">
              <span className="tool-badge">📘 Facebook</span>
              <span className="tool-badge">📱 Telegram</span>
              <span className="tool-badge">📊 Google Sheets</span>
              <span className="tool-badge">✉️ Gmail</span>
            </div>
          </div>
          <div className="work-card reveal">
            <div className="work-tag">Business Intelligence</div>
            <h3>Weekly Business Reports</h3>
            <p>Owners spending hours every week manually pulling data from Xero, Sheets, and CRM to build reports. Now it all happens automatically — delivered every Monday morning.</p>
            <div className="work-result">✓ Hours saved each week. Always know where you stand.</div>
            <div className="work-tools">
              <span className="tool-badge">📒 Xero</span>
              <span className="tool-badge">📊 Google Sheets</span>
              <span className="tool-badge">🤖 Claude AI</span>
              <span className="tool-badge">📱 Telegram</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--bg-secondary)' }}>
        <div className="about-layout">
          <div className="about-text">
            <div className="section-label reveal">About</div>
            <h2 className="section-title reveal">Built by a Kiwi who gets <em>business</em></h2>
            <p className="section-desc reveal">Hi, I&apos;m Daniel. After years running and automating my own businesses, I realised most small companies spend hours every week on tasks that could easily be automated.</p>
            <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Simply Automated helps NZ businesses implement practical AI systems that save time. No jargon. No complicated software projects. Just smarter workflows.</p>
            <div className="about-qualities reveal">
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>Plain English, no jargon.</strong> I explain everything so it makes sense to a business owner, not a developer.</p>
              </div>
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>Face-to-face first.</strong> I meet you in person to properly understand your business before building anything.</p>
              </div>
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>You own everything.</strong> No lock-in contracts. Your systems, your data, your control.</p>
              </div>
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>Real ROI focus.</strong> Every automation has a clear, measurable return. If it won&apos;t save you time or money, I won&apos;t recommend it.</p>
              </div>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '1.25rem 0 1rem' }}>📍 Based in Tauranga, New Zealand · Working with NZ small businesses</p>
            <a href="#contact" className="btn-primary reveal">Let&apos;s Talk →</a>
          </div>
          <div className="about-visual reveal">
            <div className="about-card">
              <p className="about-quote">I built these systems because I saw how much time Kiwi business owners waste on things a computer could handle in seconds.</p>
              <div className="about-attribution">
                <strong>Dan Penwarden</strong>
                Founder, Simply Automated · Tauranga, NZ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY & COMPLIANCE */}
      <section id="privacy" style={{ background: 'var(--bg-primary)' }}>
        <div className="services-header reveal">
          <div className="section-label">Privacy &amp; Compliance</div>
          <h2 className="section-title">Your data, your control — <em>always</em></h2>
          <p className="section-desc">We build every automation with the NZ Privacy Act 2020 in mind. Your business data never touches our servers.</p>
        </div>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="service-card reveal">
            <div className="service-icon">🔒</div>
            <h3>Your Data Stays Yours</h3>
            <p>Every automation runs through your own accounts — your Google Workspace, your Xero, your CRM. We build the connections, but your data lives in your systems. Nothing is stored on our servers.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🇳🇿</div>
            <h3>Privacy Act 2020 Compliant</h3>
            <p>All automations are designed with the 13 Information Privacy Principles baked in — from how data is collected and stored, to who can access it and how long it&apos;s kept.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">📋</div>
            <h3>Audit Trails &amp; Logging</h3>
            <p>Every automation includes built-in logging so you know exactly what happened, when, and why. If you ever need to demonstrate compliance or investigate an issue, the records are there.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🛡️</div>
            <h3>Breach-Ready Systems</h3>
            <p>The Privacy Act requires notification of serious breaches within 72 hours. Our systems are built with monitoring and alerts so you&apos;re never caught off guard.</p>
          </div>
        </div>
        <div style={{ maxWidth: '700px', margin: '3rem auto 0' }}>
          <h3 className="reveal" style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>Common Privacy Questions</h3>
          {[
            ['Where is my data stored?', 'In your own accounts. We connect tools you already use — Google Sheets, Google Drive, Xero, Telegram — and your data stays in those platforms. We don\'t host or store any of your business data.'],
            ['Does AI process my sensitive information?', 'AI is used for tasks like reading receipts or extracting data from documents. The data is processed in real-time and sent directly to your own systems. We follow the Privacy Commissioner\'s guidance on AI use.'],
            ['What happens if there\'s a data breach?', 'Under the Privacy Act 2020, serious breaches must be reported to the Privacy Commissioner and affected individuals. Our automations include monitoring and alerts to help you detect and respond quickly.'],
            ['Can I stop or remove an automation at any time?', 'Absolutely. You own everything we build. No lock-in contracts, no vendor dependency. If you want to pause, modify, or remove any automation, you have full control.'],
            ['Do you send data overseas?', 'Some tools like Google and AI services operate globally. Where data crosses borders, we ensure it\'s handled in line with the Privacy Act\'s cross-border disclosure rules.'],
          ].map(([q, a]) => (
            <div key={q} className="service-card reveal" style={{ marginBottom: '0.75rem', padding: '1.5rem 1.75rem' }}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{q}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact">
        <div className="cta-content">
          <div className="section-label reveal">Get Started</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Request your free<br /><em>automation audit</em></h2>
          <p className="section-desc reveal" style={{ textAlign: 'center' }}>Tell us about your business and we&apos;ll show you exactly where automation can save you time and money. Packages start from just $19/month. No obligation, no hard sell.</p>
          <form className="cta-form reveal" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <input type="text" name="business" placeholder="Business name (optional)" />
            <textarea name="message" placeholder="Tell us briefly what your business does and your biggest time-wasters..."></textarea>
            <button type="submit" className="btn-primary">Request Free Audit →</button>
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
            <a href="#services">Services</a>
            <a href="#automation">Automation</a>
            <a href="/training">Training</a>
            <a href="#work">Case Studies</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
