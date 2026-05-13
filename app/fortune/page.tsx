"use client";

import Image from "next/image";
import { useState } from "react";

const zodiacs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export default function FortunePage() {
  const [name, setName] = useState("");
  const [zodiac, setZodiac] = useState("Leo");
  const [mood, setMood] = useState("Calm");
  const [focus, setFocus] = useState("Love");
  const [result, setResult] = useState("");

  async function generateFortune() {
    const today = new Date().toISOString().slice(0, 10);
    const usageKey = `lumi-usage-${today}`;

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (!isLocalhost) {
      const currentUsage = Number(localStorage.getItem(usageKey) || "0");

      if (currentUsage >= 3) {
        setResult(
          "Lumi has already read your stars 3 times today. Please come back tomorrow. ✨"
        );
        return;
      }

      localStorage.setItem(usageKey, String(currentUsage + 1));
    }

    setResult("Lumi is reading the stars...");

    const response = await fetch("/api/fortune", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        zodiac,
        mood,
        focus,
      }),
    });

    const data = await response.json();

    setResult(data.result);
  }

  return (
    <main className="min-h-screen bg-[#070617] px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-purple-200">
          ← Back home
        </a>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <div className="mb-8 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/lumi2.png"
                alt="Lumi Fortune mascot"
                width={240}
                height={240}
                loading="eager"
                className="rounded-full border border-purple-400/30 shadow-[0_0_45px_rgba(168,85,247,0.35)]"
              />
            </div>

            <h1 className="text-4xl font-bold">Your Daily Fortune</h1>

            <p className="mt-3 text-white/60">
              Let Lumi read today&apos;s energy for you.
            </p>
          </div>

          <div className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <select
              value={zodiac}
              onChange={(e) => setZodiac(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              {zodiacs.map((z) => (
                <option key={z}>{z}</option>
              ))}
            </select>

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              <option>Calm</option>
              <option>Happy</option>
              <option>Confused</option>
              <option>Tired</option>
              <option>Hopeful</option>
            </select>

            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              <option>Love</option>
              <option>Career</option>
              <option>Money</option>
              <option>Health</option>
              <option>General</option>
            </select>

            <button
              onClick={generateFortune}
              className="w-full rounded-2xl bg-white py-4 font-semibold text-[#070617] transition hover:scale-[1.02]"
            >
              Ask Lumi
            </button>
          </div>

          {result && (
            <div className="mt-8 rounded-2xl border border-purple-300/20 bg-purple-300/10 p-5 text-white/85">
              {result}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}