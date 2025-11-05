import React, { useMemo, useState } from 'react';
import { Search, MapPin, Building2, Recycle, CheckCircle2, ExternalLink } from 'lucide-react';

const SAMPLE_ORGS = [
  {
    id: 1,
    name: 'EcoReclaim Pvt. Ltd.',
    verified: true,
    region: 'Maharashtra',
    industry: 'Recycling',
    material: 'Plastics',
    description: 'Advanced plastic recycling with IS:14534 certifications and post-consumer waste processing.',
    logo: 'https://images.unsplash.com/photo-1503594921081-0700c0a45fdc?q=80&w=400&auto=format&fit=crop',
    socials: { website: '#', linkedin: '#'},
  },
  {
    id: 2,
    name: 'GreenForge Innovations',
    verified: true,
    region: 'Karnataka',
    industry: 'CleanTech',
    material: 'Metals',
    description: 'Upcycling industrial scrap into modular components for construction and mobility.',
    logo: 'https://images.unsplash.com/photo-1581093458791-9d09f06e85bb?q=80&w=400&auto=format&fit=crop',
    socials: { website: '#', linkedin: '#'},
  },
  {
    id: 3,
    name: 'AquaCycle Solutions',
    verified: false,
    region: 'Gujarat',
    industry: 'Water',
    material: 'E-waste',
    description: 'Water-neutral e-waste dismantling with closed loop recovery of precious metals.',
    logo: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=400&auto=format&fit=crop',
    socials: { website: '#', linkedin: '#'},
  },
  {
    id: 4,
    name: 'BioLoop Materials',
    verified: true,
    region: 'Tamil Nadu',
    industry: 'Biomaterials',
    material: 'Organics',
    description: 'Converting agri by-products into biodegradable packaging at scale.',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop',
    socials: { website: '#', linkedin: '#'},
  },
];

const filtersConfig = {
  region: ['All', 'Maharashtra', 'Karnataka', 'Gujarat', 'Tamil Nadu', 'Delhi NCR'],
  industry: ['All', 'Recycling', 'CleanTech', 'Water', 'Biomaterials'],
  material: ['All', 'Plastics', 'Metals', 'E-waste', 'Organics', 'Paper'],
};

const Directory = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const [industry, setIndustry] = useState('All');
  const [material, setMaterial] = useState('All');

  const filtered = useMemo(() => {
    return SAMPLE_ORGS.filter((org) => {
      const matchesQuery = org.name.toLowerCase().includes(query.toLowerCase()) ||
        org.description.toLowerCase().includes(query.toLowerCase());
      const matchesRegion = region === 'All' || org.region === region;
      const matchesIndustry = industry === 'All' || org.industry === industry;
      const matchesMaterial = material === 'All' || org.material === material;
      return matchesQuery && matchesRegion && matchesIndustry && matchesMaterial;
    });
  }, [query, region, industry, material]);

  return (
    <section id="directory" className="relative py-16 sm:py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Verified Organization Directory</h2>
          <p className="mt-2 text-emerald-700/80 max-w-2xl">Search and filter sustainability-focused companies, recycling units, and innovators across India.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-3 mb-6">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-700/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, description, certifications..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              />
            </div>
          </div>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="px-3 py-3 rounded-lg border border-emerald-200 bg-white">
            {filtersConfig.region.map((r) => (
              <option key={r} value={r}>{r === 'All' ? 'Region (All)' : r}</option>
            ))}
          </select>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="px-3 py-3 rounded-lg border border-emerald-200 bg-white">
            {filtersConfig.industry.map((i) => (
              <option key={i} value={i}>{i === 'All' ? 'Industry (All)' : i}</option>
            ))}
          </select>
          <select value={material} onChange={(e) => setMaterial(e.target.value)} className="px-3 py-3 rounded-lg border border-emerald-200 bg-white lg:col-start-4">
            {filtersConfig.material.map((m) => (
              <option key={m} value={m}>{m === 'All' ? 'Material (All)' : m}</option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((org) => (
            <div key={org.id} className="bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition p-5">
              <div className="flex items-start gap-4">
                <img src={org.logo} alt={org.name} className="w-14 h-14 rounded-lg object-cover ring-1 ring-emerald-200" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-emerald-900 truncate">{org.name}</h3>
                    {org.verified && (
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-emerald-700/80">
                    <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{org.region}</span>
                    <span className="inline-flex items-center gap-1"><Building2 className="w-4 h-4" />{org.industry}</span>
                    <span className="inline-flex items-center gap-1"><Recycle className="w-4 h-4" />{org.material}</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-emerald-800/90 line-clamp-3">{org.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a href={org.socials.website} className="text-emerald-700 hover:text-emerald-900 text-sm inline-flex items-center gap-1">
                    Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-emerald-700/50">•</span>
                  <a href={org.socials.linkedin} className="text-emerald-700 hover:text-emerald-900 text-sm">LinkedIn</a>
                </div>
                <button className="text-sm font-semibold text-emerald-800 hover:text-emerald-900">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;
