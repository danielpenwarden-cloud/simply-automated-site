'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Nav scroll effect
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Close mobile nav on link click
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

    const data = new FormData(form)

    fetch('https://formspree.io/f/xzdjepyo', {
      method: 'POST',
      body: data,
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
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#contact" className="nav-cta">Get Your Free Audit</a></li>
        </ul>
        <button className="mobile-toggle" onClick={toggleNav} aria-label="Menu">☰</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge"><span className="dot"></span> Now serving New Zealand businesses</div>
          <h1>Stop doing tasks a<br />machine could <em>handle</em></h1>
          <p className="hero-sub">We build AI-powered automation that saves NZ businesses hours every week — so you can focus on the work that actually matters.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Request a Free Audit →</a>
            <a href="#work" className="btn-secondary">See Our Work</a>
          </div>
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
            <div className="stat-number">50%</div>
            <div className="stat-label">govt co-funding available for eligible businesses</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
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
            <p>Automated invoicing, lead capture, receipt processing, job scheduling — we build it end-to-end, tailored to the tools you already use like Xero, email, and spreadsheets.</p>
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

      {/* PRICING ANCHOR */}
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
          <h2 className="section-title">Four steps to a <em>smarter</em> business</h2>
          <p className="section-desc">No jargon, no complexity. We keep it simple and get you results.</p>
        </div>
        <div className="process-steps">
          <div className="step reveal">
            <div className="step-num">1</div>
            <h3>Free Audit</h3>
            <p>We meet, learn your business, and identify where automation will have the biggest impact.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">2</div>
            <h3>Custom Plan</h3>
            <p>You get a clear proposal with costs, timelines, and expected ROI. No surprises.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">3</div>
            <h3>Build &amp; Test</h3>
            <p>We build your automations, test everything thoroughly, and make sure it works with your existing tools.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">4</div>
            <h3>Launch &amp; Support</h3>
            <p>Go live with confidence. We train your team and provide ongoing support as you grow.</p>
          </div>
        </div>
      </section>

      {/* WORK / CASE STUDIES */}
      <section id="work">
        <div className="work-header reveal">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Built, tested, <em>delivering</em> results</h2>
          <p className="section-desc">Real automation systems we&apos;ve built for NZ and Australian businesses.</p>
        </div>
        <div className="work-grid">
          <div className="work-card reveal">
            <div className="work-tag">Finance Automation</div>
            <h3>Smart Receipt Extraction</h3>
            <p>AI-powered system that reads receipts, extracts line items, GST, and totals — then pushes them straight into accounting software. Handles both NZ and Australian tax formats.</p>
            <div className="work-result">✓ Hours of manual data entry eliminated weekly</div>
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
            <p>Automated system that tracks unpaid invoices, sends polite follow-up reminders on a schedule, and escalates overdue accounts — all without you thinking about it.</p>
            <div className="work-result">✓ Faster payments, less awkward chasing</div>
            <div className="work-tools">
              <span className="tool-badge">📒 Xero</span>
              <span className="tool-badge">✉️ Gmail</span>
              <span className="tool-badge">📊 Google Sheets</span>
              <span className="tool-badge">🤖 Claude AI</span>
            </div>
          </div>
          <div className="work-card reveal">
            <div className="work-tag">Lead Generation</div>
            <h3>Tradie Lead Capture System</h3>
            <p>Captures incoming leads from web forms, Facebook, and phone enquiries — instantly notifies the right person and logs everything in one place. No more missed jobs.</p>
            <div className="work-result">✓ Zero missed leads, instant response times</div>
            <div className="work-tools">
              <span className="tool-badge">📘 Facebook</span>
              <span className="tool-badge">📱 Telegram</span>
              <span className="tool-badge">📊 Google Sheets</span>
              <span className="tool-badge">✉️ Gmail</span>
            </div>
          </div>
          <div className="work-card reveal">
            <div className="work-tag">Daily Intelligence</div>
            <h3>Market Briefing Bot</h3>
            <p>Automated daily briefing delivered before you start work — market movements, weather forecasts, key metrics, and anything else you need to know, customised to your business.</p>
            <div className="work-result">✓ Start every day informed and ready</div>
            <div className="work-tools">
              <span className="tool-badge">📈 Yahoo Finance</span>
              <span className="tool-badge">🌤️ Windy API</span>
              <span className="tool-badge">🤖 Claude AI</span>
              <span className="tool-badge">📱 Telegram</span>
            </div>
          </div>
        </div>

        {/* FUNDING MENTION */}
        <div className="funding-banner reveal" style={{ marginTop: '3rem' }}>
          <div className="funding-text">
            <h3>💡 NZ Government AI Co-Funding Available</h3>
            <p>Eligible SMEs can access up to 50% co-funding for AI adoption through the government&apos;s pilot programme. We can help you check eligibility.</p>
          </div>
          <a href="#contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Check Eligibility →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-layout">
          <div className="about-text">
            <div className="section-label reveal">About</div>
            <h2 className="section-title reveal">Built by a Kiwi who gets <em>business</em></h2>
            <p className="section-desc reveal">I&apos;m Dan — a New Zealand business owner and automation specialist. I don&apos;t just build tech, I understand the real problems small business owners face every day.</p>
            <div className="about-qualities reveal">
              <div className="quality">
                <span className="quality-check">✓</span>
                <p><strong>Plain English, no jargon.</strong> I explain everything so it makes sense, not so it sounds impressive.</p>
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
                <p><strong>Real ROI focus.</strong> Every automation I build has a clear, measurable return. If it won&apos;t save you time or money, I won&apos;t recommend it.</p>
              </div>
            </div>
            <a href="#contact" className="btn-primary reveal">Let&apos;s Talk →</a>
          </div>
          <div className="about-visual reveal">
            <div className="about-card">
              <p className="about-quote">I built these systems because I saw how much time Kiwi business owners waste on things a computer could handle in seconds.</p>
              <div className="about-attribution">
                <strong>Dan Penwarden</strong>
                Founder, Simply Automated
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

        {/* PRIVACY FAQ */}
        <div style={{ maxWidth: '700px', margin: '3rem auto 0' }}>
          <h3 className="reveal" style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>Common Privacy Questions</h3>
          
          <div className="service-card reveal" style={{ marginBottom: '0.75rem', padding: '1.5rem 1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Where is my data stored?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>In your own accounts. We connect tools you already use — Google Sheets, Google Drive, Xero, Telegram — and your data stays in those platforms. We don&apos;t host or store any of your business data.</p>
            </div>
          </div>

          <div className="service-card reveal" style={{ marginBottom: '0.75rem', padding: '1.5rem 1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Does AI process my sensitive information?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>AI is used for tasks like reading receipts or extracting data from documents. The data is processed in real-time and sent directly to your own systems. We follow the Privacy Commissioner&apos;s guidance on AI use, including transparency about what AI does and doesn&apos;t do.</p>
            </div>
          </div>

          <div className="service-card reveal" style={{ marginBottom: '0.75rem', padding: '1.5rem 1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>What happens if there&apos;s a data breach?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>Under the Privacy Act 2020, serious breaches must be reported to the Privacy Commissioner and affected individuals. Our automations include monitoring and alerts to help you detect and respond to any issues quickly.</p>
            </div>
          </div>

          <div className="service-card reveal" style={{ marginBottom: '0.75rem', padding: '1.5rem 1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Can I stop or remove an automation at any time?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>Absolutely. You own everything we build. No lock-in contracts, no vendor dependency. If you want to pause, modify, or remove any automation, you have full control. Your data and systems remain yours.</p>
            </div>
          </div>

          <div className="service-card reveal" style={{ marginBottom: '0.75rem', padding: '1.5rem 1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Do you send data overseas?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>Some tools like Google and AI services operate globally. Where data crosses borders, we ensure it&apos;s handled in line with the Privacy Act&apos;s cross-border disclosure rules — meaning adequate protections are always in place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact">
        <div className="cta-content">
          <div className="section-label reveal">Get Started</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Request your free<br /><em>automation audit</em></h2>
          <p className="section-desc reveal" style={{ textAlign: 'center' }}>Tell us about your business and we&apos;ll show you exactly where automation can save you time and money. Packages start from just $19/month. No obligation, no hard sell.</p>
          <form className="cta-form reveal" action="https://formspree.io/f/xzdjepyo" method="POST">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <input type="text" name="business" placeholder="Business name (optional)" />
            <textarea name="message" placeholder="Tell us briefly what your business does and your biggest time-wasters..."></textarea>
            <input type="hidden" name="_next" value="https://simplyautomated.nz" />
            <button type="submit" className="btn-primary">Request Free Audit →</button>
          </form>
          <p className="cta-alt reveal">Or email us directly at <a href="mailto:dan@simplyautomated.nz">dan@simplyautomated.nz</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            © 2026 Simply Automated Limited · <a href="mailto:dan@simplyautomated.nz">dan@simplyautomated.nz</a>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
