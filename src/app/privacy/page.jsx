import { redirect } from "next/navigation";

export default function PrivacyPage() {
  redirect("/privacy.pdf"); 
  return null;
}
