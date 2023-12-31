import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next"
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  return (
    <main className="bg-gray-200 flex flex-col gap-20 h-screen p-5 justify-end py-20 items-center">
      <h1 className="text-red-500 font-bold text-4xl flex justify-end items-center ">
        MyRoutine!
      </h1>
      <p>Comece a administrar seus medicamentos aqui e agora.</p>
      <div className="flex gap-2 justify-center text-gray-100 font-semibold w-full">
        <Link
          href={"/login"}
          className="bg-red-600 p-2 flex justify-center items-center rounded-lg w-full shadow-lg"
        >
          Entre
        </Link>
        <Link href={"/register"} className="p-2 rounded-lg w-full flex justify-center items-center text-black">
          Cadastre-se
        </Link>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req,res})=>{
const session  = await getServerSession(req,res, authOptions)
if (session?.user) {
  return {
    redirect: {
      destination: "/home"
    },
    props:{}
  }
}

return {
  props:{}
}



}
