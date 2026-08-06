function Chrome() {
  return (
    <>
      <rect x="0" y="0" width="400" height="300" rx="0" fill="#0b1120" />
      <rect x="0" y="0" width="400" height="28" fill="#141c2e" />
      <circle cx="14" cy="14" r="4" fill="#3a4356" />
      <circle cx="28" cy="14" r="4" fill="#3a4356" />
      <circle cx="42" cy="14" r="4" fill="#3a4356" />
      <rect x="70" y="8" width="140" height="12" rx="6" fill="#1e2740" />
    </>
  );
}

export function LandingPageMockup() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="lp-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a80ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0a80ff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <Chrome />
      {/* nav */}
      <circle cx="26" cy="48" r="6" fill="#0a80ff" />
      <rect x="40" y="44" width="46" height="8" rx="4" fill="#e7ecf7" opacity="0.9" />
      <rect x="220" y="45" width="30" height="6" rx="3" fill="#5b6478" />
      <rect x="258" y="45" width="26" height="6" rx="3" fill="#5b6478" />
      <rect x="292" y="45" width="30" height="6" rx="3" fill="#5b6478" />
      <rect x="334" y="40" width="46" height="16" rx="8" fill="#0a80ff" />
      {/* hero text */}
      <rect x="24" y="96" width="160" height="14" rx="4" fill="#f4f6fb" />
      <rect x="24" y="116" width="120" height="14" rx="4" fill="#f4f6fb" />
      <rect x="24" y="144" width="150" height="7" rx="3.5" fill="#5b6478" />
      <rect x="24" y="158" width="110" height="7" rx="3.5" fill="#5b6478" />
      <rect x="24" y="182" width="70" height="20" rx="6" fill="#0a80ff" />
      <rect x="102" y="182" width="64" height="20" rx="6" fill="none" stroke="#3a4356" strokeWidth="1.5" />
      {/* hero visual */}
      <rect x="220" y="90" width="156" height="120" rx="12" fill="#141c2e" stroke="#22304a" />
      <circle cx="298" cy="150" r="46" fill="url(#lp-glow)" />
      <rect x="248" y="184" width="100" height="8" rx="4" fill="#2a3550" />
      {/* footer strip */}
      <rect x="0" y="252" width="400" height="48" fill="#0e1424" />
      <rect x="24" y="270" width="90" height="8" rx="4" fill="#3a4356" />
      <rect x="300" y="270" width="20" height="8" rx="4" fill="#3a4356" />
      <rect x="330" y="270" width="20" height="8" rx="4" fill="#3a4356" />
      <rect x="360" y="270" width="16" height="8" rx="4" fill="#3a4356" />
    </svg>
  );
}

export function DashboardMockup() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="db-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0a80ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0a80ff" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <Chrome />
      {/* sidebar */}
      <rect x="0" y="28" width="64" height="272" fill="#0e1424" />
      <circle cx="32" cy="54" r="7" fill="#0a80ff" />
      <rect x="20" y="80" width="24" height="6" rx="3" fill="#3a4356" />
      <rect x="20" y="100" width="24" height="6" rx="3" fill="#5b6478" />
      <rect x="20" y="120" width="24" height="6" rx="3" fill="#3a4356" />
      <rect x="20" y="140" width="24" height="6" rx="3" fill="#3a4356" />
      {/* top stat cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${84 + i * 100}, 42)`}>
          <rect width="88" height="52" rx="10" fill="#141c2e" stroke="#22304a" />
          <rect x="10" y="12" width="34" height="9" rx="4" fill="#f4f6fb" />
          <rect x="10" y="30" width="50" height="6" rx="3" fill="#5b6478" />
        </g>
      ))}
      {/* chart */}
      <rect x="84" y="108" width="204" height="120" rx="12" fill="#141c2e" stroke="#22304a" />
      {[18, 34, 26, 44, 30, 50, 38].map((h, i) => (
        <rect
          key={i}
          x={100 + i * 25}
          y={216 - h}
          width="14"
          height={h}
          rx="3"
          fill="url(#db-bar)"
        />
      ))}
      {/* right list */}
      <rect x="300" y="108" width="76" height="120" rx="12" fill="#141c2e" stroke="#22304a" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(310, ${122 + i * 26})`}>
          <circle cx="6" cy="6" r="6" fill="#0a80ff" opacity={0.8 - i * 0.15} />
          <rect x="18" y="2" width="44" height="7" rx="3.5" fill="#5b6478" />
        </g>
      ))}
    </svg>
  );
}

export function ServiceGridMockup() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Chrome />
      {/* nav */}
      <circle cx="26" cy="48" r="6" fill="#0a80ff" />
      <rect x="40" y="44" width="46" height="8" rx="4" fill="#e7ecf7" opacity="0.9" />
      <rect x="300" y="40" width="70" height="16" rx="8" fill="#0a80ff" />
      {/* intro + search bar */}
      <rect x="24" y="76" width="180" height="12" rx="4" fill="#f4f6fb" />
      <rect x="24" y="96" width="280" height="28" rx="8" fill="#141c2e" stroke="#22304a" />
      <rect x="36" y="106" width="120" height="8" rx="4" fill="#3a4356" />
      <rect x="330" y="96" width="46" height="28" rx="8" fill="#0a80ff" />
      {/* card grid */}
      {[0, 1, 2, 3].map((i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <g key={i} transform={`translate(${24 + col * 178}, ${142 + row * 76})`}>
            <rect width="166" height="64" rx="10" fill="#141c2e" stroke="#22304a" />
            <rect x="12" y="12" width="28" height="28" rx="8" fill="#0a80ff" opacity="0.85" />
            <rect x="52" y="16" width="90" height="8" rx="4" fill="#e7ecf7" opacity="0.9" />
            <rect x="52" y="32" width="70" height="6" rx="3" fill="#5b6478" />
            <rect x="52" y="44" width="50" height="6" rx="3" fill="#5b6478" />
          </g>
        );
      })}
    </svg>
  );
}
