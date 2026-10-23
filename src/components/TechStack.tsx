import React from 'react';
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackCategories = [
    {
      title: 'Frontend & Mobil',
      icon: Smartphone,
      techs: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Flutter (iOS/Android)', 'Next.js'],
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      techs: ['Java Spring Boot', 'Node.js', 'Python FastAPI', 'Docker & K8s', 'Linux Debian/Ubuntu'],
    },
    {
      title: 'Ma\'lumotlar Bazalari',
      icon: Database,
      techs: ['PostgreSQL', 'Redis In-Memory', 'ClickHouse', 'Flyway Migrations'],
    },
    {
      title: 'Smart IoT & Apparat',
      icon: Cpu,
      techs: ['MikroTik RouterOS 7', 'WireGuard VPN', 'Hikvision ISAPI', 'Dahua DSS', 'ZKTeco', 'MQTT IoT'],
    },
  ];

  return (
    <section className="py-20 relative bg-slate-900/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase text-indigo-400 tracking-wider">
            Texnologik Poydevor
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-white mt-2">
            Ishonchli va Ilg'or Texnologiyalar
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Dunyo miqyosida sinovdan o'tgan, yuqori yuklamalarga va kiber-hujumlarga chidamli texnologik stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-base text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
