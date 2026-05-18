function PortalIcon({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Portal"
    >
      <defs>
        <radialGradient id="portalPlumbus" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="20%"  stopColor="#f9c4d0" stopOpacity="0.9" />
          <stop offset="55%"  stopColor="#e05c78" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7a2a3e" stopOpacity="0.3" />
        </radialGradient>
        <filter id="glowPink">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="50" cy="50" r="46" fill="url(#portalPlumbus)" filter="url(#glowPink)" />

      <circle cx="50" cy="50" r="40" fill="none" stroke="#f4a0b4" strokeWidth="2.5" strokeOpacity="0.6" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#e05c78" strokeWidth="2"   strokeOpacity="0.5" />
      <circle cx="50" cy="50" r="22" fill="none" stroke="#e05c78" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="50" cy="50" r="13" fill="none" stroke="#f4a0b4" strokeWidth="1"   strokeOpacity="0.4" />

      <path
        d="M50,50 Q60,30 50,15 Q35,5 20,20 Q5,40 20,58 Q35,75 55,70 Q72,63 70,47 Q67,32 55,28 Q43,24 37,35 Q32,46 40,54 Q48,61 56,57"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeOpacity="0.75"
        strokeLinecap="round"
        filter="url(#glowPink)"
      />

      <circle cx="50" cy="50" r="5" fill="#ffffff" opacity="0.95" filter="url(#glowPink)" />
    </svg>
  )
}

export default PortalIcon

