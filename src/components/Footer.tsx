import { Calendar, CellSignalFull, Pill } from "phosphor-react";

interface FooterProps {
  actualPage: "calendar" | "signal" | "pill";
}

export function Footer({ actualPage }: FooterProps) {
  return (
    <footer className="flex w-full justify-between bg-slate-700 bottom-0 fixed p-2 px-10 text-red-500">
      <button className={`${actualPage === "calendar" && "text-gray-50"}`}>
        <Calendar size={24} />
      </button>
      <button className={`${actualPage === "signal" && "text-gray-50"}`}>
        <CellSignalFull size={24} />
      </button>
      <button className={`${actualPage === "pill" && "text-gray-50"}`}>
        <Pill size={24} />
      </button>
    </footer>
  );
}
