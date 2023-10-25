import Link from "next/link";
import { GoogleLogo } from "phosphor-react";

export default function Login() {
  return (
    <main className="bg-gray-200 flex flex-col gap-20 h-screen p-5 justify-end py-20 items-center">
      <header className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-red-600 text-4xl font-bold">Faça seu login</h1>
        <p className="font-bold">Bem vindo de volta!</p>
      </header>
      <form className="flex flex-col gap-5 w-full">
        <input
          className="w-full p-3 rounded-lg bg-gray-300 placeholder:text-gray-400"
          placeholder="Email"
          type="email"
        />
        <input
          className="w-full p-3 rounded-lg bg-gray-300 placeholder:text-gray-400"
          placeholder="Senha"
          type="password"
        />
        <p className="self-end text-red-600 font-medium">Esqueceu sua senha?</p>
        <button className="p-2 text-gray-100 font-bold w-full bg-red-600 rounded-lg shadow-lg">
          Entrar
        </button>
        <Link className="font-medium self-center" href={"/register"}>
          Criar nova conta
        </Link>
      </form>

      <div className="flex flex-col gap-4">
        <p className="text-red-600 font-bold">Ou entre com</p>
        <button className="bg-gray-300 flex justify-center items-center rounded-lg p-2 w-full">
          <GoogleLogo size={24} />
        </button>
      </div>
    </main>
  );
}
