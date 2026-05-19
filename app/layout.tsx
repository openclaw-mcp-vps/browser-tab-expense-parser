import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TabExpense – Parse receipts from browser tabs automatically",
  description: "Browser extension that detects receipt pages, extracts expense data, and syncs to your accounting tools. Built for consultants and contractors."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4ce72fb8-2dd6-410f-8b81-55052ba57c32"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
