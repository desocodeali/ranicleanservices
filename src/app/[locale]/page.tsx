import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-xl">{t("subtitle")}</p>
      <div className="mt-8 flex gap-4">
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          {t("getQuote")}
        </button>
        <button className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100">
          {t("ourServices")}
        </button>
      </div>
    </div>
  );
}
