import { Toaster } from "@openlet/ui/components/sonner";
import { ThemeProvider as AppThemeProvider } from "next-themes";

import type { PropsWithChildren } from "react";
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      storageKey="openlet-ui-theme"
    >
      {children}
      <Toaster richColors />
    </AppThemeProvider>
  );
};
