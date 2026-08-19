'use client';

import { useEffect } from 'react';
import { useLanguage } from './language-context';

const supported = new Set(['fr', 'en', 'ar', 'es', 'de']);
const STORAGE_KEY = 'portfolio-language';

function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return 'en';
  const candidates = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const candidate of candidates) {
    const code = String(candidate || '').toLowerCase().split('-')[0];
    if (supported.has(code)) return code;
  }

  return 'en';
}

export default function BrowserLanguageSync() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && supported.has(saved)) return;
    setLanguage(detectBrowserLanguage());
    // Automatic detection is intentionally performed only once.
    // After that, the visitor's manual language choice always has priority.
  }, []);

  return null;
}
