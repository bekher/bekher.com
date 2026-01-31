import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { textLinks } from "./content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Renders text with configured patterns replaced by links.
 * Patterns are defined in textLinks (content.ts).
 */
export function renderWithLinks(text: string): React.ReactNode {
  const patterns = Object.keys(textLinks);
  if (patterns.length === 0) return text;

  // Build regex from all configured link patterns
  const regex = new RegExp(`(${patterns.map(escapeRegex).join("|")})`, "g");
  const parts = text.split(regex);

  // Filter out empty strings and map to React nodes
  // Wrap in span to ensure proper inline rendering without extra spacing
  return (
    <span>
      {parts
        .filter((part) => part.length > 0)
        .map((part, i) =>
          textLinks[part] ? (
            <a
              key={i}
              href={textLinks[part]}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
    </span>
  );
}
