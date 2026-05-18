export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Discord Bot SLA &amp;<br />
          <span className="text-[#58a6ff]">Downtime Costs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your Discord bot&apos;s uptime via webhook pings and API health checks. Calculate real revenue impact of every outage and get instant alerts before SLA breaches hurt your business.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $15/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">99.9%</div>
            <div className="text-sm text-[#8b949e]">SLA threshold tracking with custom breach alerts</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">$0 Lost</div>
            <div className="text-sm text-[#8b949e]">Revenue impact calculator per minute of downtime</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">Real-time</div>
            <div className="text-sm text-[#8b949e]">Webhook &amp; API health checks every 60 seconds</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited bot monitors</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> SLA breach alerts via Discord &amp; email</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Revenue impact dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> 60-second check intervals</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> 90-day uptime history</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does uptime monitoring work?</h3>
            <p className="text-[#8b949e] text-sm">We ping your bot&apos;s webhook endpoint and Discord API health check URL every 60 seconds. If a check fails, we immediately start the downtime timer and notify you.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is revenue impact calculated?</h3>
            <p className="text-[#8b949e] text-sm">You define your bot&apos;s monthly revenue and active user count. We calculate cost-per-minute of downtime and show cumulative impact on your dashboard in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens when an SLA is breached?</h3>
            <p className="text-[#8b949e] text-sm">You receive instant alerts via Discord webhook and email. You can set custom SLA thresholds (e.g. 99.9%) and define escalation contacts for critical outages.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Discord Bot Uptime Tracker. All rights reserved.
      </footer>
    </main>
  );
}
