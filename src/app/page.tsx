"use client";
import { Bot, TrendingUp, DollarSign, Zap, Plus } from "lucide-react";

const agents = [
  { name: "Writer Bot", sector: "Freelance Writing", status: "active", gigs: 12, earned: 840, emoji: "✍️" },
  { name: "Research Pro", sector: "Data & Research", status: "active", gigs: 7, earned: 560, emoji: "🔍" },
  { name: "Social Agent", sector: "Social Media", status: "idle", gigs: 3, earned: 120, emoji: "📱" },
];

const recentGigs = [
  { title: "5x Blog posts — SaaS company", sector: "Writing", earnings: 250, status: "completed", agent: "Writer Bot" },
  { title: "Competitor analysis — fintech startup", sector: "Research", earnings: 180, status: "in_progress", agent: "Research Pro" },
  { title: "Product description batch (20 items)", sector: "Writing", earnings: 150, status: "completed", agent: "Writer Bot" },
];

export default function NothingHustle() {
  const totalEarned = agents.reduce((s, a) => s + a.earned, 0);
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-white">Nothing <span className="text-emerald-400">Hustle</span></span>
        <button className="flex items-center gap-2 rounded border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300 hover:bg-emerald-500/20 transition-colors">
          <Plus className="h-3.5 w-3.5" /> New Gig
        </button>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Earned", value: `$${totalEarned}`, icon: DollarSign, color: "text-emerald-400" },
            { label: "Active Agents", value: `${agents.filter(a=>a.status==="active").length}`, icon: Bot, color: "text-blue-400" },
            { label: "Gigs Running", value: "2", icon: Zap, color: "text-gold" },
            { label: "This Month", value: "$1,520", icon: TrendingUp, color: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/8 bg-white/3 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-silver/60">{s.label}</span>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Agents */}
          <div className="rounded-xl border border-white/8 bg-white/3">
            <div className="p-5 border-b border-white/8"><h2 className="font-semibold text-white">Your Agents</h2></div>
            {agents.map((a) => (
              <div key={a.name} className="flex items-center gap-4 p-4 border-b border-white/5">
                <span className="text-2xl">{a.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{a.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${a.status === "active" ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-silver"}`}>{a.status}</span>
                  </div>
                  <span className="text-xs text-silver/60">{a.sector} · {a.gigs} gigs</span>
                </div>
                <span className="font-semibold text-emerald-400">${a.earned}</span>
              </div>
            ))}
          </div>

          {/* Gigs */}
          <div className="rounded-xl border border-white/8 bg-white/3">
            <div className="p-5 border-b border-white/8"><h2 className="font-semibold text-white">Recent Gigs</h2></div>
            {recentGigs.map((g, i) => (
              <div key={i} className="p-4 border-b border-white/5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm text-white">{g.title}</p>
                    <p className="text-xs text-silver/60 mt-0.5">{g.agent} · {g.sector}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-semibold text-emerald-400">${g.earnings}</div>
                    <span className={`text-xs ${g.status === "completed" ? "text-emerald-400" : "text-gold"}`}>{g.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
