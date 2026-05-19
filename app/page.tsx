export default function Home() {
  const faqs = [
    {
      q: "Which browsers are supported?",
      a: "TabExpense works on Chrome and Edge. Firefox support is coming soon."
    },
    {
      q: "Which accounting tools can I export to?",
      a: "We support QuickBooks and Xero via direct API integration. CSV export is also available."
    },
    {
      q: "How does receipt detection work?",
      a: "Our content script scans DOM structure and keywords on every page you visit. When a receipt is detected, it extracts line items, totals, and vendor info automatically — no manual copy-paste needed."
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Parse receipts from browser tabs automatically
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          TabExpense detects receipt pages as you browse, extracts expense data instantly, and syncs everything to QuickBooks or Xero — no manual entry ever again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required · Cancel anytime</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track client expenses effortlessly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited receipt extractions",
              "QuickBooks & Xero sync",
              "Auto-categorization",
              "CSV & PDF export",
              "Chrome & Edge extension",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started — $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
