import React from 'react';

import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot } from '@telegram-apps/telegram-ui';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRoot> {children} </AppRoot>
  );
}
