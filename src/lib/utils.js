// src/lib/utils.js

// Merge conditional classNames (used heavily by shadcn components)
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
