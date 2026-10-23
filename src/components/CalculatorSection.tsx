import React, { useState } from 'react';
import {
  Calculator,
  Check,
  Plus,
  Sparkles,
  Clock,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Factory,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sliders,
  Zap,
} from 'lucide-react';

interface ModuleOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  days: number;
}

const MODULE_OPTIONS: ModuleOption[] = [
  {
    id: 'web',
    name: 'Korporativ Veb-sayt & Portal',
    description: 'Ultra-tezkor React/Next.js sayt, SEO va responsive dizayn',
    basePrice: 12000000,
    days: 10,
  },
  {
    id: 'mobile',
    name: 'Mobil Ilova (iOS & Android)',
    description: 'Flutter platformasida mijoz yoki xodimlar mobil ilovasi',
    basePrice: 22000000,
    days: 20,
  },
  {
    id: 'crm',
    name: 'ECOS CRM & Savdo Voronkasi',
    description: 'Mijozlar bazasi, shartnomalar va sotuvlar avtomatizatsiyasi',
    basePrice: 16000000,
    days: 14,
  },
  {
    id: 'faceid',
    name: 'Face ID Biometrik Terminallar',
    description: 'Hikvision apparat montaji, ISAPI va avtomat davomat dasturi',
    basePrice: 9500000,
    days: 5,
  },
  {
    id: 'mikrotik',
    name: 'MikroTik & WireGuard VPN',
    description: 'Kiberxavfsiz ofislararo tunnel va Wi-Fi Mesh tarmog\'i',
    basePrice: 6000000,
    days: 4,
  },
  {
    id: 'cctv',
    name: '4K CCTV Video Kuzatuv & NVR',
    description: 'Perimetr monitoringi, AI odam/mashina harakat tahlili',
    basePrice: 14000000,
    days: 7,
  },
  {
    id: 'smartlock',
    name: 'Smart NFC & Bluetooth Qulflar',
    description: 'Xonalar va xizmat eshiklari uchun elektron aqlli qulflar',
    basePrice: 11000000,
    days: 6,
  },
  {
    id: 'ai-bot',
    name: 'AI Telegram Bot & Mijoz Yordamchisi',
    description: '24/7 savollarga javob beruvchi va buyurtma oluvchi aqlli AI agent',
    basePrice: 8000000,
    days: 7,
  },
];

interface CalculatorSectionProps {
  onPreselectEstimate?: (summary: string) => void;
  onOpenConsult: () => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  onPreselectEstimate,
  onOpenConsult,
}) => {
  const [businessType, setBusinessType] = useState('hotel');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'web',
    'crm',
    'faceid',
    'ai-bot',
  ]);
  const [scaleCount, setScaleCount] = useState<number>(30);

  const businessTypes = [
    { id: 'hotel', label: 'Mehmonxona & Dam Olish', icon: Building2 },
    { id: 'retail', label: 'Savdo & Do\'konlar', icon: ShoppingCart },
    { id: 'corporate', label: 'Korxona & Ofis', icon: Briefcase },
    { id: 'industry', label: 'Ishlab Chiqarish', icon: Factory },
    { id: 'education', label: 'Ta\'lim & Maktab', icon: GraduationCap },
  ];

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Price Calculation
  const selectedModuleObjs = MODULE_OPTIONS.filter((m) => selectedModules.includes(m.id));
  const rawPrice = selectedModuleObjs.reduce((acc, m) => acc + m.basePrice, 0);
  const scaleMultiplier = 1 + (scaleCount - 10) * 0.004;
  const totalPrice = Math.round(rawPrice * scaleMultiplier);
  const estimatedDays = Math.min(
    60,
    Math.max(12, Math.round(selectedModuleObjs.reduce((acc, m) => acc + m.days * 0.65, 0)))
  );

  const formatUzs = (num: number) => {
    return new Intl.NumberFormat('uz-UZ').format(num) + ' UZS';
  };

  const handleProceedWithEstimate = () => {
    const summary = `Biznes turi: ${businessType.toUpperCase()} | Qamrov: ${scaleCount} ta birlik | Modullar: ${selectedModuleObjs
      .map((m) => m.name)
      .join(', ')} | Taxminiy byudjet: ${formatUzs(totalPrice)}`;
    onPreselectEstimate?.(summary);
    onOpenConsult();
  };

  return (
    <section id="calculator" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interaktiv Kalkulyator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white tracking-tight">
            Loyiha Narxi va Muddatini Hisoblang
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Biznesingiz ehtiyojidan kelib chiqib kerakli texnologik modullarni tanlang va taxminiy
            investitsiya hajmini real vaqtda ko'ring.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectors & Options (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Business Type */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-indigo-400 tracking-wider">
                  1-Qadam: Biznes Sohangiz
                </span>
                <span className="text-xs text-slate-400">1 tasini tanlang</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {businessTypes.map((bt) => {
                  const Icon = bt.icon;
                  const isSelected = businessType === bt.id;
                  return (
                    <button
                      key={bt.id}
                      onClick={() => setBusinessType(bt.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className={`p-2 rounded-xl ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-bold leading-tight">{bt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Modules */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
                  2-Qadam: Kerakli IT & IoT Modullar
                </span>
                <span className="text-xs text-slate-400">
                  Tanlandi: <strong className="text-white">{selectedModules.length} ta</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {MODULE_OPTIONS.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                        isChecked
                          ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow-md'
                          : 'bg-slate-900/60 border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold'
                            : 'border-slate-700 bg-slate-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-xs sm:text-sm font-bold ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                            {mod.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scale Slider */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider">
                    3-Qadam: Korxona Qamrovi / Hajmi
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Xodimlar, xonalar yoki savdo nuqtalari soni
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono font-bold text-sm">
                  {scaleCount} ta birlik
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={scaleCount}
                  onChange={(e) => setScaleCount(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>Kichik (5-15)</span>
                  <span>O'rta (30-80)</span>
                  <span>Yirik korxona (100-200+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Summary Card (4 Cols - Sticky) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-outfit font-bold text-lg text-white">Hisob-Kitob Xulosasi</h3>
                  <p className="text-xs text-slate-400">Kompleks ECOS integratsiyasi</p>
                </div>
                <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-400/30">
                  <Sparkles className="w-5 h-5" />
                </span>
              </div>

              {/* Price Display */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Taxminiy Loyiha Byudjeti
                </span>
                <div className="text-2xl sm:text-3xl font-outfit font-black text-transparent bg-gradient-to-r from-amber-300 via-indigo-300 to-cyan-300 bg-clip-text mt-1">
                  {formatUzs(totalPrice)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  * Uskunalar, dasturlash va 1 yillik kafolatni o'z ichiga oladi
                </p>
              </div>

              {/* Timeline Display */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400">Ishga Tushirish Muddati</span>
                    <p className="text-sm font-bold text-white font-mono">
                      ~ {estimatedDays} ish kuni
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Tezkor
                </span>
              </div>

              {/* Included Free Perks */}
              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <p className="font-bold text-slate-200">Paketga Bepul Kiritilgan:</p>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Texnik topshiriq (TT) va arxitektura ishlab chiqish</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Xodimlarni o'qitish va tizimga o'rgatish</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1 yillik bepul texnik qo'llab-quvvatlash kafolati</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={handleProceedWithEstimate}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Ushbu Hisob Bilan Ariza Qoldirish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
