export interface TimeOfDayMood {
  greeting: string;
  lightIntensity: number;
  tone: "warm" | "neutral" | "dim";
}

// Greeting is a lead-in to the typewriter name below it (e.g. "Good morning,
// I'm" -> "I'm Dandi Rahmadani"), so every branch must end in a way that
// reads naturally right before a name. Pure function, easy to test with any
// hour value; callers must only invoke this client-side (inside useEffect)
// to avoid SSR/client mismatch.
export function getTimeOfDayMood(hour: number): TimeOfDayMood {
  if (hour >= 0 && hour < 5) {
    return { greeting: "Still up? So am I — I'm", lightIntensity: 0.35, tone: "dim" };
  }
  if (hour >= 5 && hour < 11) {
    return { greeting: "Good morning, I'm", lightIntensity: 0.9, tone: "warm" };
  }
  if (hour >= 11 && hour < 15) {
    return { greeting: "Good afternoon, I'm", lightIntensity: 1, tone: "warm" };
  }
  if (hour >= 15 && hour < 18) {
    return { greeting: "Good evening, I'm", lightIntensity: 0.75, tone: "neutral" };
  }
  return { greeting: "Working late? Same here — I'm", lightIntensity: 0.5, tone: "dim" };
}
