"use client";

import React from "react";
import UserProfile from "../_components/userProfile";
import GameCarousel from "@/components/gamescarousel";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Usuario() {
  const { data: session } = useSession();
  
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="bg-slate-800">
      <UserProfile/>
      <GameCarousel/>
    </main>
  );
}