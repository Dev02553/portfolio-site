export default function OctoMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.85 }}
      >
        <ellipse cx="55" cy="40" rx="28" ry="26" fill="#7F77DD" />
        <circle cx="44" cy="34" r="5.5" fill="#080612" />
        <circle cx="66" cy="34" r="5.5" fill="#080612" />
        <circle cx="45.5" cy="32.5" r="1.8" fill="#AFA9EC" />
        <circle cx="67.5" cy="32.5" r="1.8" fill="#AFA9EC" />

        <path
          d="M27 58 Q22 68 19 80 Q17 89 22 86"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M35 65 Q31 76 30 87 Q29 96 34 93"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M45 68 Q43 80 42 91 Q41 100 46 97"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M55 69 Q55 81 55 92 Q55 101 60 98"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M65 68 Q67 80 68 91 Q69 100 64 97"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M75 65 Q79 76 80 87 Q81 96 76 93"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M83 58 Q88 68 91 80 Q93 89 88 86"
          stroke="#7F77DD"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        <circle cx="22" cy="86" r="4" fill="#1D9E75" opacity="0.8" />
        <circle cx="34" cy="93" r="4" fill="#1D9E75" opacity="0.8" />
        <circle cx="46" cy="97" r="4" fill="#1D9E75" opacity="0.8" />
        <circle cx="60" cy="98" r="4" fill="#1D9E75" opacity="0.8" />
        <circle cx="64" cy="97" r="4" fill="#1D9E75" opacity="0.8" />
        <circle cx="76" cy="93" r="4" fill="#1D9E75" opacity="0.8" />
        <circle cx="88" cy="86" r="4" fill="#1D9E75" opacity="0.8" />

        <ellipse cx="55" cy="43" rx="16" ry="8" fill="#1D9E75" opacity="0.15" />
      </svg>
    </div>
  );
}