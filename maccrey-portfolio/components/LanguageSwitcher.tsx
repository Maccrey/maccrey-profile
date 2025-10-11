'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // Invalidate the cache and re-render the page with the new locale
    startTransition(() => {
        const newPath = pathname.startsWith(`/${locale}`) ? pathname.substring(`/${locale}`.length) || '/' : pathname;
        router.replace(`/${nextLocale}${newPath}`);
    });
  };

  return (
    <select
      defaultValue={locale}
      onChange={onSelectChange}
      disabled={isPending}
      className="bg-gray-800 text-white p-1 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  );
}
