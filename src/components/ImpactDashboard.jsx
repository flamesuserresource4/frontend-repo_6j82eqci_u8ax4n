import React from 'react';
import { Leaf, Droplets, Factory, TrendingUp } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, subtext, barColor = 'bg-emerald-500', progress = 70 }) => (
  <div className="p-5 rounded-xl bg-white border border-emerald-100 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm text-emerald-800/70">{label}</div>
          <div className="text-2xl font-bold text-emerald-900">{value}</div>
        </div>
      </div>
      <div className="text-xs text-emerald-700/70">{subtext}</div>
    </div>
    <div className="mt-4 h-2 w-full rounded-full bg-emerald-100 overflow-hidden">
      <div className={`h-full ${barColor}`} style={{ width: `${progress}%` }} />
    </div>
  </div>
);

const ImpactDashboard = () => {
  return (
    <section id="impact" className="relative py-16 sm:py-20 bg-emerald-900/95">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">Impact Dashboard</h2>
          <p className="mt-2 text-emerald-100/90 max-w-2xl">Visualize the collective sustainability metrics tracked across the network.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard icon={RecycleIcon} label="Tons Recycled" value="128,540 t" subtext="+4.8% this month" progress={78} />
          <MetricCard icon={Factory} label="Emissions Saved" value="412,300 tCO₂e" subtext="Scope 1 & 2" barColor="bg-emerald-400" progress={65} />
          <MetricCard icon={Droplets} label="Water Conserved" value="92,100 kL" subtext="Industrial & municipal" barColor="bg-sky-400" progress={72} />
          <MetricCard icon={TrendingUp} label="Active Listings" value="3,245" subtext="Suppliers + Buyers" barColor="bg-lime-400" progress={54} />
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white/95 backdrop-blur border border-emerald-100">
            <h3 className="font-semibold text-emerald-900">Regional Activity Heat</h3>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className={`h-10 rounded ${['bg-emerald-100','bg-emerald-200','bg-emerald-300','bg-emerald-400','bg-emerald-500'][i % 5]}`} />
              ))}
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white/95 backdrop-blur border border-emerald-100">
            <h3 className="font-semibold text-emerald-900">Material Diversion Mix</h3>
            <div className="mt-4 flex items-end gap-3 h-48">
              {[40, 60, 75, 30, 55].map((h, i) => (
                <div key={i} className="flex-1">
                  <div className="w-full rounded-t-lg bg-gradient-to-t from-emerald-500 to-emerald-300" style={{ height: `${h}%` }} />
                  <div className="mt-2 text-xs text-emerald-800/70 text-center">{['Plastics','Metals','Paper','E-waste','Organics'][i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RecycleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" {...props}>
    <path d="M7 21H3l2-4 2 4zm0 0h8a4 4 0 0 0 4-4v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 3h-4l2 4 2-4zm0 0v8a4 4 0 0 1-4 4h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 7V3l4 2-4 2zm0 0h8a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ImpactDashboard;
