"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const GREG_EMAIL = "gbekher@gmail.com";
const GREG_PHONE = "+14437631428";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Greg's availability (24h start times for a 1-hour lesson).
// Mon–Fri: 6 PM – 9 PM. Sat & Sun: 2 PM – 9 PM.
const WEEKDAY_HOURS = [18, 19, 20, 21];
const WEEKEND_HOURS = [14, 15, 16, 17, 18, 19, 20, 21];

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function hoursForDate(date: Date): number[] {
  return isWeekend(date) ? WEEKEND_HOURS : WEEKDAY_HOURS;
}

/** A date-only key (local) so we can compare/select days without time noise. */
function dayKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function formatHour(hour: number): string {
  const period = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}:00 ${period}`;
}

const longDateFmt = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const friendlyDateFmt = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export function LanguageLessonScheduler() {
  const today = useMemo(() => startOfToday(), []);
  // Earliest bookable day: skip today and tomorrow, so the soonest is 2 days out.
  const minDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 2);
    return d;
  }, [today]);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  // Build the cells for the visible month: leading blanks + each day.
  const cells = useMemo(() => {
    const firstOfMonth = new Date(viewYear, viewMonth, 1);
    const leadingBlanks = firstOfMonth.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const result: (Date | null)[] = [];
    for (let i = 0; i < leadingBlanks; i++) result.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      result.push(new Date(viewYear, viewMonth, d));
    }
    return result;
  }, [viewYear, viewMonth]);

  // Don't let the user page back before the current month.
  const canGoPrev =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  function shiftMonth(delta: number) {
    // Normalize through a Date so year rollover is handled in one place
    // (avoids nested setState updaters, which misbehave under Strict Mode).
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  }

  function goToPrevMonth() {
    if (!canGoPrev) return;
    shiftMonth(-1);
  }

  function goToNextMonth() {
    shiftMonth(1);
  }

  function handleSelectDay(date: Date) {
    setSelectedDate(date);
    setSelectedHour(null);
  }

  const slotHours = selectedDate ? hoursForDate(selectedDate) : [];

  // Compose the pre-filled request message once a full date + time is chosen.
  const { mailtoHref, smsHref } = useMemo(() => {
    if (!selectedDate || selectedHour === null) {
      return { mailtoHref: "", smsHref: "" };
    }
    const when = `${longDateFmt.format(selectedDate)} at ${formatHour(
      selectedHour
    )}`;
    const subject = "Russian Language Lesson Request 💌";
    const body = `Hi Greg! Hailey here 💌 I'd like to request a Russian language lesson on ${when}. Can we make it happen?`;
    const mailto = `mailto:${GREG_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // `?&body=` is the most broadly compatible sms link form across iOS/Android.
    const sms = `sms:${GREG_PHONE}?&body=${encodeURIComponent(body)}`;
    return { mailtoHref: mailto, smsHref: sms };
  }, [selectedDate, selectedHour]);

  const readyToSend = selectedDate !== null && selectedHour !== null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-xl">
        {/* Greeting */}
        <header className="mb-8 text-center">
          <div className="mb-3 text-4xl">💌</div>
          <h1 className="text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl">
            Greetings, Hailey! 🌹
          </h1>
          <p className="mt-3 text-base text-rose-700/90 sm:text-lg">
            Let&apos;s schedule your Russian lesson with Greg.
            <br />
            <span className="text-sm text-rose-600/80">
              Привет! Pick a day and a time below. ✨
            </span>
          </p>
        </header>

        <div className="rounded-3xl border border-rose-200 bg-white/80 p-5 shadow-xl shadow-rose-200/50 backdrop-blur sm:p-7">
          {/* Calendar */}
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevMonth}
              disabled={!canGoPrev}
              aria-label="Previous month"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-rose-600 transition-colors",
                canGoPrev
                  ? "hover:bg-rose-100"
                  : "cursor-not-allowed opacity-30"
              )}
            >
              ‹
            </button>
            <h2 className="text-lg font-semibold text-rose-900">
              {MONTH_LABELS[viewMonth]} {viewYear}
            </h2>
            <button
              type="button"
              onClick={goToNextMonth}
              aria-label="Next month"
              className="flex h-9 w-9 items-center justify-center rounded-full text-rose-600 transition-colors hover:bg-rose-100"
            >
              ›
            </button>
          </div>

          <div className="mb-1 grid grid-cols-7 gap-1">
            {WEEKDAY_LABELS.map((label) => (
              <div
                key={label}
                className="py-1 text-center text-xs font-medium uppercase tracking-wide text-rose-400"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((date, i) => {
              if (!date) return <div key={`blank-${i}`} />;
              const isDisabled = date < minDate;
              const isSelected =
                selectedDate !== null && dayKey(date) === dayKey(selectedDate);
              return (
                <button
                  key={dayKey(date)}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => handleSelectDay(date)}
                  aria-pressed={isSelected}
                  aria-label={longDateFmt.format(date)}
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-xl text-sm font-medium transition-all",
                    isDisabled && "cursor-not-allowed text-rose-200",
                    !isDisabled &&
                      !isSelected &&
                      "text-rose-800 hover:bg-rose-100 hover:scale-105",
                    isSelected &&
                      "bg-rose-500 text-white shadow-md shadow-rose-300 scale-105"
                  )}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="mt-6 border-t border-rose-100 pt-5">
              <p className="mb-3 text-center text-base font-medium text-rose-900">
                You picked{" "}
                <span className="font-semibold text-rose-600">
                  {friendlyDateFmt.format(selectedDate)}
                </span>
                ! Now pick a time 🕰️
              </p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {slotHours.map((hour) => {
                  const isSelected = selectedHour === hour;
                  return (
                    <button
                      key={hour}
                      type="button"
                      onClick={() => setSelectedHour(hour)}
                      aria-pressed={isSelected}
                      className={cn(
                        "rounded-xl border px-2 py-2.5 text-sm font-medium transition-all",
                        isSelected
                          ? "border-rose-500 bg-rose-500 text-white shadow-md shadow-rose-300"
                          : "border-rose-200 bg-white text-rose-700 hover:border-rose-400 hover:bg-rose-50"
                      )}
                    >
                      {formatHour(hour)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Confirm + send */}
          {readyToSend && (
            <div className="mt-6 rounded-2xl bg-rose-50/80 p-4 text-center">
              <p className="text-sm text-rose-800">
                Send Greg a request for a Russian lesson on{" "}
                <span className="font-semibold">
                  {friendlyDateFmt.format(selectedDate!)}
                </span>{" "}
                at{" "}
                <span className="font-semibold">{formatHour(selectedHour!)}</span>
                .
              </p>
              <p className="mt-2 text-xs text-rose-500">
                💌 This will open your email or messages app with the request
                ready to send — just hit send!
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={smsHref}
                  variant="primary"
                  size="large"
                  className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-500"
                >
                  💬 Text Greg
                </Button>
                <Button
                  href={mailtoHref}
                  variant="secondary"
                  size="large"
                  className="border-rose-300 text-rose-700 hover:border-rose-400 hover:bg-rose-50"
                >
                  📧 Email Greg
                </Button>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-rose-400">
          Made with 🫶 for Hailey
        </p>
      </div>
    </main>
  );
}
