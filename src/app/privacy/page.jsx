"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function PrivacyPage() {
  redirect("/privacy.pdf");
  return null;
}

