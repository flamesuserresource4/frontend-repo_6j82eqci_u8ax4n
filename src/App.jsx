import React from 'react';
import Hero from './components/Hero';
import Directory from './components/Directory';
import Marketplace from './components/Marketplace';
import ImpactDashboard from './components/ImpactDashboard';
import { Leaf, Shield, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-emerald-900">
            <span className="inline-grid place-items-center w-8 h-8 rounded-md bg-emerald-600 text-white">
              <Leaf className="w-5 h-5" />
            </span>
            Sustainable India
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#directory" className="hover:text-emerald-700">Directory</a>
            <a href="#marketplace" className="hover:text-emerald-700">Marketplace</a>
            <a href="#impact" className="hover:text-emerald-700">Impact</a>
            <a href="#admin" className="hover:text-emerald-700 inline-flex items-center gap-1"><Settings className="w-4 h-4"/> Admin</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm rounded-lg border border-emerald-200 hover:bg-emerald-50">Sign In</button>
            <button className="px-3 py-2 text-sm rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">Register Organization</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Directory />
        <Marketplace />
        <ImpactDashboard />

        <section id="admin" className="py-16 sm:py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Admin Controls</h2>
              <p className="mt-2 text-emerald-700/80 max-w-2xl">Verification, moderation, and analytics overview for platform administrators.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white border border-emerald-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-grid place-items-center w-9 h-9 rounded-lg bg-emerald-600 text-white"><Shield className="w-5 h-5" /></span>
                  <h3 className="font-semibold text-emerald-900">Verification Queue</h3>
                </div>
                <p className="text-sm text-emerald-800/80">Manage organization documents and certify verified profiles to maintain trust.</p>
                <button className="mt-3 px-3 py-2 text-sm rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium">Review Applications</button>
              </div>
              <div className="p-5 rounded-xl bg-white border border-emerald-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-grid place-items-center w-9 h-9 rounded-lg bg-emerald-600 text-white">🛡️</span>
                  <h3 className="font-semibold text-emerald-900">Moderation</h3>
                </div>
                <p className="text-sm text-emerald-800/80">Approve listings, remove spam, and keep the marketplace high quality.</p>
                <button className="mt-3 px-3 py-2 text-sm rounded-lg border border-emerald-200 hover:bg-emerald-50 font-medium">Open Console</button>
              </div>
              <div className="p-5 rounded-xl bg-white border border-emerald-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-grid place-items-center w-9 h-9 rounded-lg bg-emerald-600 text-white">📊</span>
                  <h3 className="font-semibold text-emerald-900">Analytics</h3>
                </div>
                <p className="text-sm text-emerald-800/80">Track growth, impact, and engagement with built-in reports and exports.</p>
                <button className="mt-3 px-3 py-2 text-sm rounded-lg border border-emerald-200 hover:bg-emerald-50 font-medium">View Reports</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 text-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-grid place-items-center w-8 h-8 rounded-md bg-emerald-600 text-white"><Leaf className="w-5 h-5" /></span>
            <span className="font-semibold">Sustainable India</span>
          </div>
          <p className="text-sm text-emerald-200/90">Building a circular, low-carbon future together.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
