'use client';

import { useEffect } from 'react';
import { useLanguage } from './language-context';

const supported = new Set(['fr', 'en', 'ar', 'es', 'de']);

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
    const id = window.setTimeout(() => setLanguage(detectBrowserLanguage()), 0);
    return () => window.clearTimeout(id);
  }, [setLanguage]);

  return null;
}
