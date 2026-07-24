import Image from "next/image";
import Link from "next/link";
import {
  AuthIconField,
  EmailIcon,
  LockIcon,
  UserIcon,
} from "@/components/auth/auth-icon-field";

export default function CadastroPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col lg:flex-row">
      <aside className="flex flex-col justify-between bg-black px-8 py-10 lg:w-[38%] lg:px-14 lg:py-12">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              alt="Elifoot"
              width={221}
              height={66}
              priority
            />
          </Link>

          <h1 className="mt-12 text-3xl font-bold tracking-tight text-white lg:mt-16 lg:text-4xl">
            Bem-vindo de volta!
          </h1>
          <p className="mt-3 text-sm text-white/80 lg:text-base">
            Acesse sua conta agora mesmo.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-2xl border border-white px-10 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-white/10"
          >
            ENTRAR
          </Link>
        </div>

        <Link
          href="#"
          className="mt-10 text-sm text-white/50 transition hover:text-white lg:mt-0"
        >
          Esqueci minha senha
        </Link>
      </aside>

      <section className="flex flex-1 items-center justify-center bg-white px-6 py-12 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Crie sua conta
            </h2>
            <p className="mt-2 text-sm text-[#a0a0a0]">Preencha seus dados</p>
          </div>

          <form className="flex flex-col gap-4" action="#" method="post">
            <AuthIconField
              id="name"
              name="name"
              placeholder="Seu Nome"
              icon={<UserIcon />}
              autoComplete="name"
              variant="light"
            />

            <AuthIconField
              id="email"
              name="email"
              type="email"
              placeholder="Seu Email"
              icon={<EmailIcon />}
              autoComplete="email"
              variant="light"
            />

            <AuthIconField
              id="password"
              name="password"
              type="password"
              placeholder="Sua Senha"
              icon={<LockIcon />}
              autoComplete="new-password"
              variant="light"
            />

            <AuthIconField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              icon={<LockIcon />}
              autoComplete="new-password"
              variant="light"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-black py-4 text-sm font-bold tracking-wide text-white transition hover:bg-black/85"
            >
              CADASTRAR
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
