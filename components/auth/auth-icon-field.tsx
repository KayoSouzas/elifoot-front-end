import type { ReactNode } from "react";

type AuthIconFieldProps = {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  icon: ReactNode;
  autoComplete?: string;
  required?: boolean;
  variant?: "dark" | "light";
};

export function AuthIconField({
  id,
  name,
  type = "text",
  placeholder,
  icon,
  autoComplete,
  required = true,
  variant = "dark",
}: AuthIconFieldProps) {
  const isLight = variant === "light";

  return (
    <div className="relative">
      <span
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${
          isLight ? "text-[#a0a0a0]" : "text-white/40"
        }`}
      >
        {icon}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={`w-full rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition focus:ring-2 ${
          isLight
            ? "border border-[#e5e5e5] bg-[#f5f5f5] text-black placeholder:text-[#a0a0a0] focus:ring-black/20"
            : "bg-[#333333] text-white placeholder:text-white/40 focus:ring-elifoot-orange/40"
        }`}
      />
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6" />
      <path d="M19 8v6M22 11h-6" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export { UserIcon, LockIcon, EmailIcon };
