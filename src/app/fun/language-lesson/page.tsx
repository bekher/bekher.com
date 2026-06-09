import type { Metadata } from "next";
import { LanguageLessonScheduler } from "./LanguageLessonScheduler";

export const metadata: Metadata = {
  title: "A Russian Lesson for Hailey",
  description: "Pick a time for your Russian language lesson 💕",
  alternates: {
    canonical: "/fun/language-lesson",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LanguageLessonPage() {
  return <LanguageLessonScheduler />;
}
