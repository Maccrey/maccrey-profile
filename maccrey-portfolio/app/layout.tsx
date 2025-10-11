import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default function RootLayout({children, params: {locale}}: Props) {
  return (
    <html lang={locale}>
      {children}
    </html>
  );
}