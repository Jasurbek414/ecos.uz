import React from 'react';
import {
  Server,
  Smartphone,
  Cpu,
  Database,
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackCategories = [
    {
      title: 'Frontend & Mobil',
      icon: Smartphone,
      iconColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      techs: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Flutter (iOS/Android)', 'Next.js'],
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      iconColor: 'bg-slate-100 text-slate-800 border-slate-200',
      techs: ['Java Spring Boot', 'Node.js', 'Python FastAPI', 'Docker & K8s', 'Linux Debian/Ubuntu'],
    },
    {
      title: 'Ma\'lumotlar Bazalari',
      icon: Database,
      iconColor: 'bg-teal-100 text-teal-800 border-teal-200',
      techs: ['PostgreSQL', 'Redis In-Memory', 'ClickHouse', 'Flyway Migrations'],
    },
    {
      title: 'Smart IoT & Apparat',
      icon: Cpu,
      iconColor: 'bg-rose-100 text-rose-700 border-rose-200',
      techs: ['MikroTik RouterOS 7', 'WireGuard VPN', 'Hikvision ISAPI', 'Dahua DSS', 'ZKTeco', 'MQTT IoT'],
    },
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Texnologik Poydevor
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 mt-2">
            Ishonchli va Ilg'or Texnologiyalar
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Dunyo miqyosida sinovdan o'tgan, yuqori yuklamalarga va kiber-hujumlarga chidamli texnologik stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${cat.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-base text-slate-900">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700 font-semibold shadow-2xs"
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
