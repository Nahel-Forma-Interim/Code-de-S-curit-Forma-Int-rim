// Rich SVG illustrations per question icon — colorful, relevant, no words
window.ILLUS = {
  helmet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FFC857"/><stop offset="1" stop-color="#E89B1E"/></linearGradient></defs>
    <circle cx="200" cy="100" r="70" fill="rgba(94,162,255,0.1)"/>
    <path d="M135 135 Q135 75 200 75 Q265 75 265 135 L275 135 L275 150 L125 150 L125 135 Z" fill="url(#hg)" stroke="#B27200" stroke-width="2"/>
    <rect x="190" y="75" width="20" height="14" fill="#B27200"/>
    <path d="M135 135 L265 135" stroke="#B27200" stroke-width="2" fill="none"/>
    <circle cx="160" cy="115" r="3" fill="#B27200"/>
    <circle cx="240" cy="115" r="3" fill="#B27200"/>
    <path d="M175 160 Q200 170 225 160" stroke="#FFC857" stroke-width="3" fill="none" opacity="0.4"/>
  </svg>`,
  height: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="30" width="6" height="150" fill="#9FB3D1"/>
    <rect x="314" y="30" width="6" height="150" fill="#9FB3D1"/>
    <rect x="80" y="60" width="240" height="6" fill="#9FB3D1"/>
    <rect x="80" y="110" width="240" height="6" fill="#9FB3D1"/>
    <rect x="80" y="160" width="240" height="6" fill="#9FB3D1"/>
    <g transform="translate(180, 80)">
      <circle cx="20" cy="12" r="10" fill="#FFC857"/>
      <rect x="10" y="22" width="20" height="28" rx="4" fill="#FF6B6B"/>
      <rect x="8" y="50" width="10" height="18" fill="#22365A"/>
      <rect x="22" y="50" width="10" height="18" fill="#22365A"/>
      <path d="M20 6 Q20 0 28 2 L30 0 L32 8 L20 10 Z" fill="#FFC857"/>
    </g>
    <path d="M200 95 L200 175" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="4 3"/>
    <path d="M195 170 L200 178 L205 170" stroke="#FF6B6B" stroke-width="2" fill="none"/>
  </svg>`,
  warning: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 40 L300 160 L100 160 Z" fill="#FFC857" stroke="#0F1829" stroke-width="4"/>
    <rect x="195" y="80" width="10" height="40" rx="2" fill="#0F1829"/>
    <circle cx="200" cy="140" r="6" fill="#0F1829"/>
    <circle cx="120" cy="50" r="4" fill="#FF6B6B" opacity="0.5"/>
    <circle cx="310" cy="60" r="3" fill="#5EA2FF" opacity="0.5"/>
    <circle cx="340" cy="170" r="5" fill="#3DD68C" opacity="0.4"/>
  </svg>`,
  scaffold: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="30" width="5" height="150" fill="#9FB3D1"/>
    <rect x="150" y="30" width="5" height="150" fill="#9FB3D1"/>
    <rect x="245" y="30" width="5" height="150" fill="#9FB3D1"/>
    <rect x="335" y="30" width="5" height="150" fill="#9FB3D1"/>
    <rect x="55" y="60" width="290" height="5" fill="#9FB3D1"/>
    <rect x="55" y="110" width="290" height="5" fill="#9FB3D1"/>
    <rect x="55" y="160" width="290" height="5" fill="#9FB3D1"/>
    <rect x="60" y="65" width="90" height="8" fill="#8B6F3F"/>
    <rect x="155" y="115" width="90" height="8" fill="#8B6F3F"/>
    <rect x="250" y="65" width="90" height="8" fill="#8B6F3F"/>
    <path d="M155 30 L250 60 M155 110 L250 60" stroke="#9FB3D1" stroke-width="3"/>
    <rect x="62" y="15" width="3" height="15" fill="#FFC857"/>
    <path d="M65 15 L80 20 L65 25 Z" fill="#FFC857"/>
  </svg>`,
  lift: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="160" y="170" width="80" height="10" fill="#9FB3D1"/>
    <rect x="190" y="60" width="20" height="115" fill="#9FB3D1"/>
    <rect x="130" y="80" width="40" height="90" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <rect x="210" y="80" width="60" height="40" fill="#22365A" stroke="#5EA2FF" stroke-width="2"/>
    <path d="M200 40 L200 80 L180 80 M200 80 L220 80" stroke="#FF6B6B" stroke-width="3" fill="none"/>
    <circle cx="200" cy="40" r="8" fill="#FF6B6B"/>
    <rect x="220" y="90" width="40" height="20" rx="2" fill="#3F7FE0"/>
    <circle cx="150" cy="110" r="10" fill="#FFF" opacity="0.3"/>
  </svg>`,
  fire: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fg" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#FF6B6B"/><stop offset="0.5" stop-color="#FFC857"/><stop offset="1" stop-color="#FFF"/></linearGradient></defs>
    <path d="M200 170 Q150 150 160 110 Q165 120 175 115 Q165 90 195 60 Q205 95 225 85 Q235 100 225 120 Q240 115 245 105 Q255 140 245 160 Q230 175 200 170 Z" fill="url(#fg)"/>
    <ellipse cx="200" cy="180" rx="60" ry="6" fill="#FF6B6B" opacity="0.3"/>
    <circle cx="100" cy="70" r="3" fill="#FFC857" opacity="0.6"/>
    <circle cx="310" cy="90" r="4" fill="#FF6B6B" opacity="0.5"/>
  </svg>`,
  electric: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="130" y="40" width="140" height="120" rx="8" fill="#FFC857" stroke="#0F1829" stroke-width="4"/>
    <path d="M210 60 L175 110 L200 110 L190 150 L230 95 L205 95 Z" fill="#0F1829"/>
    <rect x="40" y="95" width="90" height="10" fill="#9FB3D1"/>
    <rect x="270" y="95" width="90" height="10" fill="#9FB3D1"/>
    <circle cx="45" cy="100" r="8" fill="#FF6B6B"/>
    <circle cx="355" cy="100" r="8" fill="#FF6B6B"/>
  </svg>`,
  harness: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="50" r="15" fill="#FFC857"/>
    <path d="M200 65 L200 170" stroke="#0F1829" stroke-width="3"/>
    <path d="M180 70 L200 80 L220 70" stroke="#FF6B6B" stroke-width="4" fill="none"/>
    <path d="M175 70 L175 110 L170 170" stroke="#FF6B6B" stroke-width="4" fill="none"/>
    <path d="M225 70 L225 110 L230 170" stroke="#FF6B6B" stroke-width="4" fill="none"/>
    <path d="M175 110 L225 110" stroke="#FF6B6B" stroke-width="4"/>
    <rect x="195" y="90" width="10" height="20" fill="#9FB3D1"/>
    <path d="M200 30 L200 10" stroke="#5EA2FF" stroke-width="3"/>
    <circle cx="200" cy="8" r="5" fill="#5EA2FF"/>
    <path d="M100 20 L120 20" stroke="#9FB3D1" stroke-width="4"/>
    <path d="M280 20 L300 20" stroke="#9FB3D1" stroke-width="4"/>
  </svg>`,
  trench: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="130" width="400" height="50" fill="#8B6F3F"/>
    <rect x="130" y="90" width="140" height="90" fill="#22365A"/>
    <rect x="125" y="85" width="10" height="95" fill="#9FB3D1"/>
    <rect x="265" y="85" width="10" height="95" fill="#9FB3D1"/>
    <rect x="125" y="100" width="150" height="4" fill="#9FB3D1"/>
    <rect x="125" y="130" width="150" height="4" fill="#9FB3D1"/>
    <g transform="translate(70, 90)">
      <circle cx="12" cy="10" r="8" fill="#FFC857"/>
      <rect x="4" y="18" width="16" height="22" rx="3" fill="#FF6B6B"/>
    </g>
    <path d="M50 90 L80 90" stroke="#FFC857" stroke-width="2" stroke-dasharray="3 3"/>
  </svg>`,
  alcohol: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M175 50 L225 50 L220 100 Q220 130 200 130 Q180 130 180 100 Z" fill="rgba(94,162,255,0.2)" stroke="#5EA2FF" stroke-width="2"/>
    <path d="M185 80 Q200 90 215 80" fill="#FFC857" opacity="0.6"/>
    <rect x="195" y="130" width="10" height="30" fill="#9FB3D1"/>
    <rect x="180" y="160" width="40" height="5" fill="#9FB3D1"/>
    <circle cx="200" cy="30" r="30" fill="none" stroke="#FF6B6B" stroke-width="6"/>
    <line x1="178" y1="8" x2="222" y2="52" stroke="#FF6B6B" stroke-width="6"/>
    <circle cx="100" cy="100" r="4" fill="#5EA2FF" opacity="0.5"/>
    <circle cx="310" cy="140" r="3" fill="#FFC857" opacity="0.5"/>
  </svg>`,
  formwork: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="40" width="60" height="130" fill="#8B6F3F" stroke="#5E4A26" stroke-width="2"/>
    <rect x="260" y="40" width="60" height="130" fill="#8B6F3F" stroke="#5E4A26" stroke-width="2"/>
    <rect x="140" y="60" width="120" height="110" fill="#9FB3D1"/>
    <rect x="85" y="55" width="50" height="3" fill="#5E4A26"/>
    <rect x="85" y="100" width="50" height="3" fill="#5E4A26"/>
    <rect x="85" y="145" width="50" height="3" fill="#5E4A26"/>
    <rect x="265" y="55" width="50" height="3" fill="#5E4A26"/>
    <rect x="265" y="100" width="50" height="3" fill="#5E4A26"/>
    <rect x="265" y="145" width="50" height="3" fill="#5E4A26"/>
    <circle cx="170" cy="90" r="4" fill="#FFC857"/>
    <circle cx="230" cy="90" r="4" fill="#FFC857"/>
    <circle cx="170" cy="140" r="4" fill="#FFC857"/>
    <circle cx="230" cy="140" r="4" fill="#FFC857"/>
  </svg>`,
  truck: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="80" width="160" height="70" rx="4" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <rect x="210" y="100" width="70" height="50" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <rect x="220" y="110" width="40" height="30" fill="#5EA2FF" opacity="0.8"/>
    <circle cx="100" cy="160" r="18" fill="#22365A" stroke="#0F1829" stroke-width="3"/>
    <circle cx="100" cy="160" r="8" fill="#9FB3D1"/>
    <circle cx="240" cy="160" r="18" fill="#22365A" stroke="#0F1829" stroke-width="3"/>
    <circle cx="240" cy="160" r="8" fill="#9FB3D1"/>
    <rect x="280" y="95" width="15" height="15" fill="#FF6B6B"/>
    <rect x="0" y="165" width="400" height="5" fill="#22365A"/>
  </svg>`,
  chemical: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M170 40 L230 40 L230 80 L265 150 Q265 170 245 170 L155 170 Q135 170 135 150 L170 80 Z" fill="rgba(61,214,140,0.2)" stroke="#3DD68C" stroke-width="2"/>
    <rect x="165" y="35" width="70" height="10" fill="#9FB3D1"/>
    <path d="M155 120 L245 120" stroke="#3DD68C" stroke-width="2"/>
    <circle cx="180" cy="140" r="5" fill="#3DD68C"/>
    <circle cx="215" cy="145" r="4" fill="#3DD68C"/>
    <circle cx="200" cy="155" r="3" fill="#3DD68C"/>
    <path d="M170 80 Q165 60 175 55" stroke="#3DD68C" stroke-width="2" fill="none" opacity="0.5"/>
    <g transform="translate(290, 40)">
      <path d="M0 30 L20 0 L40 30 Z" fill="#FFC857"/>
      <circle cx="20" cy="22" r="2" fill="#0F1829"/>
    </g>
  </svg>`,
  medical: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="110" y="50" width="180" height="120" rx="10" fill="#FFF" stroke="#9FB3D1" stroke-width="2"/>
    <rect x="185" y="85" width="30" height="60" rx="3" fill="#FF6B6B"/>
    <rect x="165" y="105" width="70" height="20" rx="3" fill="#FF6B6B"/>
    <rect x="110" y="50" width="180" height="20" fill="#5EA2FF"/>
    <circle cx="130" cy="60" r="3" fill="#FFF"/>
    <circle cx="145" cy="60" r="3" fill="#FFF"/>
    <circle cx="160" cy="60" r="3" fill="#FFF"/>
  </svg>`,
  dust: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(200, 100)">
      <path d="M-40 -10 Q-50 -20 -40 -30 L40 -30 Q50 -20 40 -10 L40 20 Q30 45 0 45 Q-30 45 -40 20 Z" fill="#FFC857" stroke="#0F1829" stroke-width="2"/>
      <circle cx="-15" cy="-5" r="4" fill="#0F1829"/>
      <circle cx="15" cy="-5" r="4" fill="#0F1829"/>
      <ellipse cx="0" cy="20" rx="15" ry="8" fill="#9FB3D1" stroke="#0F1829" stroke-width="2"/>
    </g>
    <circle cx="90" cy="60" r="3" fill="#9FB3D1" opacity="0.7"/>
    <circle cx="70" cy="100" r="2" fill="#9FB3D1" opacity="0.5"/>
    <circle cx="110" cy="140" r="4" fill="#9FB3D1" opacity="0.6"/>
    <circle cx="320" cy="70" r="3" fill="#9FB3D1" opacity="0.6"/>
    <circle cx="340" cy="120" r="2" fill="#9FB3D1" opacity="0.5"/>
    <circle cx="300" cy="150" r="4" fill="#9FB3D1" opacity="0.5"/>
  </svg>`,
  noise: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(200, 100)">
      <ellipse cx="-45" cy="0" rx="12" ry="20" fill="#FFC857" stroke="#0F1829" stroke-width="2"/>
      <ellipse cx="45" cy="0" rx="12" ry="20" fill="#FFC857" stroke="#0F1829" stroke-width="2"/>
      <path d="M-45 -15 Q0 -60 45 -15" stroke="#0F1829" stroke-width="3" fill="none"/>
    </g>
    <path d="M60 80 Q40 100 60 120" stroke="#FF6B6B" stroke-width="3" fill="none"/>
    <path d="M40 70 Q10 100 40 130" stroke="#FF6B6B" stroke-width="3" fill="none" opacity="0.6"/>
    <path d="M340 80 Q360 100 340 120" stroke="#FF6B6B" stroke-width="3" fill="none"/>
    <path d="M360 70 Q390 100 360 130" stroke="#FF6B6B" stroke-width="3" fill="none" opacity="0.6"/>
  </svg>`,
  broom: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="130" y="40" width="8" height="90" fill="#8B6F3F" transform="rotate(15 134 85)"/>
    <path d="M155 120 L220 140 L210 175 L145 155 Z" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <line x1="160" y1="130" x2="150" y2="170" stroke="#B27200" stroke-width="1"/>
    <line x1="175" y1="134" x2="170" y2="172" stroke="#B27200" stroke-width="1"/>
    <line x1="190" y1="137" x2="185" y2="174" stroke="#B27200" stroke-width="1"/>
    <line x1="205" y1="140" x2="200" y2="176" stroke="#B27200" stroke-width="1"/>
    <circle cx="270" cy="100" r="4" fill="#9FB3D1" opacity="0.6"/>
    <circle cx="300" cy="80" r="3" fill="#9FB3D1" opacity="0.5"/>
    <circle cx="320" cy="120" r="5" fill="#9FB3D1" opacity="0.4"/>
    <circle cx="290" cy="150" r="3" fill="#9FB3D1" opacity="0.5"/>
    <path d="M250 130 Q280 110 320 130" stroke="#5EA2FF" stroke-width="2" fill="none" opacity="0.4" stroke-dasharray="3 3"/>
  </svg>`,
  grinder: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="180" y="80" width="120" height="40" rx="8" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <rect x="300" y="85" width="20" height="30" fill="#22365A"/>
    <circle cx="140" cy="100" r="40" fill="#9FB3D1" stroke="#22365A" stroke-width="3"/>
    <circle cx="140" cy="100" r="8" fill="#22365A"/>
    <path d="M100 100 L180 100" stroke="#22365A" stroke-width="4"/>
    <g transform="translate(100, 100)">
      <path d="M-20 -10 L-35 -25" stroke="#FFC857" stroke-width="3"/>
      <path d="M-25 0 L-45 0" stroke="#FFC857" stroke-width="3"/>
      <path d="M-20 10 L-35 25" stroke="#FFC857" stroke-width="3"/>
      <circle cx="-40" cy="-30" r="3" fill="#FFC857"/>
      <circle cx="-50" cy="5" r="3" fill="#FFC857"/>
    </g>
    <rect x="320" y="92" width="40" height="4" fill="#0F1829"/>
  </svg>`,
  stop: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 30 L270 60 L270 130 L200 170 L130 130 L130 60 Z" fill="#FF6B6B" stroke="#0F1829" stroke-width="4"/>
    <rect x="160" y="95" width="80" height="10" fill="#FFF"/>
    <circle cx="340" cy="70" r="4" fill="#FFC857" opacity="0.5"/>
    <circle cx="60" cy="140" r="4" fill="#5EA2FF" opacity="0.5"/>
  </svg>`,
  welcome: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 130 L200 50 L320 130 L320 170 L80 170 Z" fill="#FFC857" stroke="#B27200" stroke-width="3"/>
    <rect x="180" y="120" width="40" height="50" fill="#8B6F3F"/>
    <rect x="150" y="100" width="20" height="20" fill="#5EA2FF"/>
    <rect x="230" y="100" width="20" height="20" fill="#5EA2FF"/>
    <circle cx="210" cy="145" r="3" fill="#0F1829"/>
    <path d="M80 170 L320 170" stroke="#0F1829" stroke-width="3"/>
  </svg>`,
  school: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 80 L200 40 L300 80 L200 120 Z" fill="#5EA2FF" stroke="#0F1829" stroke-width="2"/>
    <path d="M140 100 L140 150 Q200 180 260 150 L260 100" fill="none" stroke="#0F1829" stroke-width="3"/>
    <rect x="295" y="78" width="3" height="40" fill="#0F1829"/>
    <circle cx="200" cy="80" r="4" fill="#FFC857"/>
    <circle cx="90" cy="170" r="4" fill="#3DD68C" opacity="0.6"/>
    <circle cx="310" cy="170" r="5" fill="#FF6B6B" opacity="0.5"/>
  </svg>`,
  user: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="80" r="35" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <path d="M130 180 Q130 130 200 130 Q270 130 270 180" fill="#5EA2FF" stroke="#3F7FE0" stroke-width="2"/>
    <circle cx="188" cy="75" r="3" fill="#0F1829"/>
    <circle cx="212" cy="75" r="3" fill="#0F1829"/>
    <path d="M190 95 Q200 102 210 95" stroke="#0F1829" stroke-width="2" fill="none"/>
  </svg>`,
  trophy: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="tg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FFE27A"/><stop offset="1" stop-color="#FFC857"/></linearGradient></defs>
    <path d="M160 40 L240 40 L240 90 Q240 130 200 130 Q160 130 160 90 Z" fill="url(#tg)" stroke="#B27200" stroke-width="3"/>
    <path d="M160 50 Q130 50 130 75 Q130 95 160 95" fill="none" stroke="#B27200" stroke-width="3"/>
    <path d="M240 50 Q270 50 270 75 Q270 95 240 95" fill="none" stroke="#B27200" stroke-width="3"/>
    <rect x="185" y="130" width="30" height="20" fill="#B27200"/>
    <rect x="165" y="150" width="70" height="15" rx="3" fill="#FFC857" stroke="#B27200" stroke-width="2"/>
    <circle cx="100" cy="40" r="3" fill="#FFE27A"/>
    <circle cx="310" cy="60" r="4" fill="#FFE27A"/>
    <circle cx="90" cy="160" r="3" fill="#FFE27A"/>
    <path d="M200 70 L205 80 L215 80 L207 87 L210 97 L200 91 L190 97 L193 87 L185 80 L195 80 Z" fill="#FFF" opacity="0.8"/>
  </svg>`
};
