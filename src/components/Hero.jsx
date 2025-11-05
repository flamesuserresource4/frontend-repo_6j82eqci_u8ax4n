import React from 'react';
import Spline from '@splinetool/react-spline';
import { Leaf, ShieldCheck, Rocket, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-emerald-900 via-emerald-900/60 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-700/40 ring-1 ring-emerald-400/40 px-3 py-1 text-sm mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              Verified B2B network across India
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Sustainable India
            </h1>
            <p className="mt-4 text-emerald-100/90 max-w-xl">
              A national platform connecting green innovators, recycling units, and sustainability-first companies. Discover partners, trade circular materials, and track collective impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#directory"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-5 py-3 transition"
              >
                <Rocket className="w-4 h-4" /> Explore Directory
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 transition"
              >
                <Play className="w-4 h-4" /> View Impact
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-emerald-100/90">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-300" />
                <span>Eco-themed, responsive UI</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span>Verified organizations</span>
              </div>
            </div>
          </div>

          <div className="relative h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px] w-full">
            <div className="absolute inset-0 rounded-xl overflow-hidden ring-1 ring-emerald-300/20 shadow-2xl shadow-emerald-900/40">
              <Spline
                scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
