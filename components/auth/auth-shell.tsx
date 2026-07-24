import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex justify-center">
          <Image
            src="/logo.svg"
            alt="Elifoot"
            width={221}
            height={66}
            priority
          />
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-2 text-sm text-white/60">{subtitle}</p>
          </div>

          {children}
        </div>

        <p className="mt-6 text-center text-sm text-white/60">{footer}</p>
      </div>
    </main>
  );
}
