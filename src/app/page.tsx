import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/de"); // Default to German
}
