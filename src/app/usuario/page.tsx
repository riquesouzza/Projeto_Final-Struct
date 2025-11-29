"use client";

import React from "react";
import UserProfile from "../_components/userProfile";
import GameCarousel from "@/components/gamescarousel";

export default function Agendamento() {
  return (
    <main className="bg-slate-800">
      <UserProfile/>
      <GameCarousel/>
    </main>
  );
}