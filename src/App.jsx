import React from "react";

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function Check({ children }) {
  return (
    <li className="check">
      <span className="check-icon">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function App() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="logo-link" aria-label="RES LLC Home">
            <img src="/logo.png" className="logo" alt="RES LLC logo" />
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#markets">Who We Serve</a>
            <a href="#process">How It Works</a>
            <a href="#advantages">Why RES</a>
            <a href="#pricing">Pricing</a>
            <a href="#partnerships">Partnerships</a>
            <a href="#contact" className="btn">Request an Estimate</a>
          </nav>
          <button className="nav-toggle" aria-label="Toggle navigation">☰</button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="hero">
        <div className="wrap hero-inner">
          <h1 className="hero-title">
            Accurate Estimates. <span className="accent">Smart Technology.</span> Real-World Results.
          </h1>
          <p className="lead">
            RES LLC provides precise, fast, and reliable building-material takeoffs for
            residential, multi-family, and commercial projects—delivered 100% remotely and formatted
            for purchase orders, bid comparisons, and budgeting.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="#services" className="btn btn-outline">See Services</a>
          </div>

          <div className="stats">
            <Stat label="Avg. Turnaround" value="3–5 days" />
            <Stat label="Coverage" value="Nationwide" />
            <Stat label="Formats" value="PDF / Excel / Point-of-Sale Import" />
            <Stat label="Focus" value="Residential, Multi-family, & Commercial" />
          </div>

          <div className="note">
            * Expedited options available. POS-compatible deliverables for Spruce/Epicor on request.
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section alt">
        <div className="wrap">
          <h2 className="section-title">Services</h2>
          <p className="muted">
            Complete, construction-grade material takeoffs tailored to your workflow and region.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Residential Estimating</h3>
              <ul className="checks">
                <Check>Single-family, duplex, multi-family</Check>
                <Check>Foundation, framing, envelope, interiors</Check>
                <Check>Region-adjusted codes & materials</Check>
              </ul>
            </div>

            <div className="card">
              <h3>Commercial / Light-Commercial</h3>
              <ul className="checks">
                <Check>Small to mid-size commercial</Check>
                <Check>Structural + architectural alignment</Check>
                <Check>Exterior envelope & interior finishes</Check>
              </ul>
            </div>

            <div className="card">
              <h3>Lumberyard / Building Center</h3>
              <ul className="checks">
                <Check>POS-ready BOMs (Spruce/Epicor)</Check>
                <Check>Standardized quality & speed</Check>
                <Check>Co-branded deliverables</Check>
              </ul>
            </div>

            <div className="card">
              <h3>Homeowner Pre-Build Estimates</h3>
              <ul className="checks">
                <Check>Budget clarity before you build</Check>
                <Check>Apples-to-apples bid comparison</Check>
                <Check>Readable, shareable reports</Check>
              </ul>
            </div>

            <div className="card">
              <h3>Custom Consulting</h3>
              <ul className="checks">
                <Check>Third-party estimate reviews</Check>
                <Check>Plan audits & scope checks</Check>
                <Check>RESXL-assisted 3-D visualization</Check>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="markets" className="section">
        <div className="wrap">
          <h2 className="section-title">Who We Serve</h2>
          <div className="pill-grid">
            <div className="pill">
              <h4>Builders</h4>
              <p>Fast, reliable takeoffs without hiring full-time staff.</p>
            </div>
            <div className="pill">
              <h4>Lumberyards</h4>
              <p>Accurate estimates that integrate with POS and reduce returns.</p>
            </div>
            <div className="pill">
              <h4>Homeowners & Designers</h4>
              <p>Pre-build budgets and clear breakdowns for confident decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="section alt">
        <div className="wrap">
          <h2 className="section-title">How It Works</h2>
          <ol className="steps">
            <li>
              <h4>Send Plans</h4>
              <p>Upload PDFs via secure link or email with project details.</p>
            </li>
            <li>
              <h4>We Estimate</h4>
              <p>AI-assisted takeoff with human verification and regional code alignment.</p>
            </li>
            <li>
              <h4>Deliver & Support</h4>
              <p>Receive a complete, customizable Bill of Materials in your preferred format.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Why RES */}
      <section id="advantages" className="section">
        <div className="wrap">
          <h2 className="section-title">Why Choose RES</h2>
          <div className="split">
            <div className="card">
              <h3>Proven Advantages</h3>
              <ul className="checks">
                <Check>Accuracy & field knowledge—every quantity verified</Check>
                <Check>AI-assisted automation with human oversight</Check>
                <Check>Custom formats: PDF, Excel, or POS-ready</Check>
                <Check>Regional compliance baked into every takeoff</Check>
                <Check>100% remote—nationwide service</Check>
              </ul>
            </div>
            <div className="card">
              <h3>Brand Pillars</h3>
              <ul className="checks">
                <Check>Accuracy First</Check>
                <Check>Integrity—no shortcuts, no inflated numbers</Check>
                <Check>Efficiency—fast turnarounds</Check>
                <Check>Innovation—continuous improvement</Check>
                <Check>Reliability—consistent results from plan to project</Check>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing (Simplified) */}
      <section id="pricing" className="section alt">
        <div className="wrap">
          <h2 className="section-title">Pricing (Simplified)</h2>
          <p className="muted">
            We quote per plan with clear scope and square-footage ranges. Add-on packs let you tailor detail level
            and deliverables. Request a quote and we’ll align scope and turnaround with your needs.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Base Takeoff</h3>
              <ul className="checks">
                <Check>House plan SF ranges (Min → Max)</Check>
                <Check>Foundation, framing, roof, siding, drywall, trim</Check>
                <Check>Formatted for PO, bids, or budgeting</Check>
              </ul>
            </div>
            <div className="card">
              <h3>Add-On Packs</h3>
              <ul className="checks">
                <Check>Multi-Line Pack (by area/phase)</Check>
                <Check>Doors & Windows Detail Pack</Check>
                <Check>Interior Finish Pack (drywall/trim/paint)</Check>
              </ul>
            </div>
            <div className="card">
              <h3>Multi-Line Discount</h3>
              <ul className="checks">
                <Check>Discount for 2+ related plans or addresses</Check>
                <Check>Applied automatically on quote</Check>
                <Check>Great for multi-elevation or multi-lot jobs</Check>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="section">
        <div className="wrap">
          <h2 className="section-title">Lumberyard & Builder Partnerships</h2>
          <p className="muted">
            We standardize estimating quality and speed for suppliers and contractors.
            Co-branded deliverables and referral credits available.
          </p>
          <div className="cards three">
            <div className="card"><h3>POS-Ready</h3><p>BOMs for Spruce / Epicor or custom templates.</p></div>
            <div className="card"><h3>Priority Turnarounds</h3><p>Reliable timelines to keep quotes moving.</p></div>
            <div className="card"><h3>Co-Branded</h3><p>Your brand on client-facing reports if desired.</p></div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section alt">
        <div className="wrap">
          <h2 className="section-title">Founder</h2>
          <div className="founder">
            <div>
              <h4>Shawn Cutshall — Founder & Lead Estimator</h4>
              <p>
                Two decades of hands-on construction experience with advanced digital takeoff expertise.
                Developer of the RESXL intelligent estimating platform. Known for accuracy, speed, and
                region-aware material standards.
              </p>
              <ul className="checks">
                <Check>Residential, multi-family, and commercial lumber & building materials</Check>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="wrap">
          <h2 className="section-title light">Request an Estimate</h2>
        <p className="muted light">
            Send your plans and project details. We’ll confirm scope, timeline, and deliverables.
          </p>

          <div className="contact-grid">
            <form
              className="form"
              name="resllc-contact"
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We’ll follow up by email."); }}
            >
              <input className="input" placeholder="Your Name" required />
              <input className="input" type="email" placeholder="Email" required />
              <input className="input" placeholder="Company (optional)" />
              <textarea className="input" rows="5" placeholder="Project details (location, scope, timeline)"></textarea>
              <button className="btn btn-primary" type="submit">Submit</button>
              <p className="tiny">
                Submitting this form does not share files. After submission, we’ll email you a secure link to upload drawings.
              </p>
            </form>

            <div className="contact-info">
              <div className="info-row">
                <div className="info-label">Email</div>
                <a className="info-value" href="mailto:rambuiltestimating@gmail.com">rambuiltestimating@gmail.com</a>
              </div>
              <div className="info-row">
                <div className="info-label">Phone</div>
                <a className="info-value" href="tel:+19189864747">(918) 986-4747</a>
              </div>
              <div className="info-row">
                <div className="info-label">Service Area</div>
                <div className="info-value">United States</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="tiny">
            © {new Date().getFullYear()} Rambuilt Estimating Services LLC • dba RES LLC
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
