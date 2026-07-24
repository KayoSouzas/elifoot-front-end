import Image from "next/image";
import Link from "next/link";
import {
  AuthIconField,
  LockIcon,
  UserIcon,
} from "@/components/auth/auth-icon-field";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-10 flex justify-center">
          <Image
            src="/logo.svg"
            alt="Elifoot"
            width={221}
            height={66}
            priority
          />
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Bem-vindo de volta!
          </h1>
          <p className="mt-2 text-sm text-white/50">Acesse a sua conta</p>
        </div>

        <form className="flex flex-col gap-4" action="#" method="post">
          <AuthIconField
            id="username"
            name="username"
            placeholder="Seu Nome"
            icon={<UserIcon />}
            autoComplete="username"
          />

          <AuthIconField
            id="password"
            name="password"
            type="password"
            placeholder="Sua Senha"
            icon={<LockIcon />}
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between pt-1 text-sm">
            <Link
              href="#"
              className="text-white/80 transition hover:text-white"
            >
              Recuperar minha senha
            </Link>
            <Link
              href="/cadastro"
              className="font-medium text-elifoot-orange transition hover:text-elifoot-orange-light"
            >
              Crie sua conta agora
            </Link>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-elifoot-orange py-4 text-base font-bold text-black transition hover:bg-elifoot-orange-light"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
