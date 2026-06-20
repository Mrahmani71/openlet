import { Outlet, HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import appCss from "@/app.css?url";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

import type { ReactNode } from "react";

interface RootContext {
  // Add any context properties you want to provide to your routes here
}

export const Route = createRootRouteWithContext<RootContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Openlet",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
