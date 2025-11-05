import React, { useMemo, useState } from 'react';
import { Recycle, ShoppingCart, Store, Plus, User, MapPin } from 'lucide-react';

const SAMPLE_LISTINGS = [
  { id: 1, type: 'Supplier', title: 'HDPE Flakes - Post Consumer', region: 'Maharashtra', quantity: '20 tons/month', company: 'EcoReclaim Pvt. Ltd.' },
  { id: 2, type: 'Buyer', title: 'Seeking Aluminum Scrap 6061', region: 'Tamil Nadu', quantity: '15 tons', company: 'GreenForge Innovations' },
  { id: 3, type: 'Supplier', title: 'Bagasse Pulp for Packaging', region: 'Gujarat', quantity: '10 tons/week', company: 'BioLoop Materials' },
  { id: 4, type: 'Buyer', title: 'Looking for E-waste PCBs', region: 'Karnataka', quantity: '5 tons', company: 'AquaCycle Solutions' },
];

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('Supplier');
  const [search, setSearch] = useState('');

  const listings = useMemo(() => {
    return SAMPLE_LISTINGS.filter(l => l.type === activeTab && (
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase())
    ));
  }, [activeTab, search]);

  return (
    <section id="marketplace" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">B2B Circular Marketplace</h2>
            <p className="mt-2 text-emerald-700/80 max-w-2xl">Post and discover raw material suppliers and by-product buyers. Power the circular economy.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2">
            <Plus className="w-4 h-4" /> New Listing
          </button>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <div className="inline-flex rounded-lg overflow-hidden border border-emerald-200">
            <button onClick={() => setActiveTab('Supplier')} className={`px-4 py-2 text-sm font-medium ${activeTab === 'Supplier' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-800 hover:bg-emerald-50'}`}>
              <Store className="inline w-4 h-4 mr-2" /> Suppliers
            </button>
            <button onClick={() => setActiveTab('Buyer')} className={`px-4 py-2 text-sm font-medium border-l border-emerald-200 ${activeTab === 'Buyer' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-800 hover:bg-emerald-50'}`}>
              <ShoppingCart className="inline w-4 h-4 mr-2" /> Buyers
            </button>
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search listings..." className="flex-1 px-4 py-2 rounded-lg border border-emerald-200" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <div key={item.id} className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5">
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${item.type === 'Supplier' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'}`}>
                  {item.type === 'Supplier' ? <Store className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />} {item.type}
                </span>
                <Recycle className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="mt-3 font-semibold text-emerald-900">{item.title}</h3>
              <div className="mt-2 text-sm text-emerald-800/80">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> {item.company}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {item.region}</div>
                <div className="flex items-center gap-2">Quantity: {item.quantity}</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button className="px-3 py-2 text-sm rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium">Contact</button>
                <button className="px-3 py-2 text-sm rounded-lg border border-emerald-200 text-emerald-900 hover:bg-emerald-50 font-medium">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
