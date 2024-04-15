import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeLeadingSlash(pathname: string): string | undefined {
  if (pathname === "/") {
    return undefined; // If pathname is only "/", return nothing
  }

  // Remove leading "/" and return the result
  return pathname.substring(1);
}

export function answerHasLink(answer: string): string {
  // Regular expression to match URLs starting with 'https://'
  const urlRegex = /https:\/\/\S+/;

  // Find the first URL in the text
  const match = answer.match(urlRegex);

  // If a URL is found, create an anchor tag and replace it in the text
  if (match) {
    const url = match[0];
    const anchorTag = `<a href="${url}" target="_blank">${url}</a>`;
    const newText = answer.replace(urlRegex, anchorTag);
    return newText;
  } else {
    // If no URL is found, return the original text
    return answer;
  }
}
