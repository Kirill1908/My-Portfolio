"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
      <button
        type="button"
        onClick={() => handleLocaleChange("en")}
        className={`text-base font-medium transition-all duration-300 ${
          locale === "en"
            ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] cursor-default"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        EN
      </button>

      <span className="w-[1px] h-3 bg-zinc-700" />

      <button
        type="button"
        onClick={() => handleLocaleChange("uk")}
        className={`text-base font-medium transition-all duration-300 ${
          locale === "uk"
            ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] cursor-default"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        UA
      </button>
    </div>
  );
}
