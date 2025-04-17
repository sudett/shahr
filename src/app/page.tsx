import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/products"
      className="border border-slate-700 text-slate-700 px-2 py-1 rounded hover:bg-slate-700 hover:text-slate-300 focus-within:bg-slate-700 outline-none transition"
    >
      Check Products
    </Link>
  );
}
