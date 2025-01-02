import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { ThemeSelector } from '@/components/theme-selector'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Expenses App',
  description: 'Manage your expenses easily',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'font-sans antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen flex-col md:flex-row">
            <aside className="w-full border-r md:w-64">
              <Sidebar />
            </aside>
            <main className="flex-1 overflow-y-auto p-4">
              <div className="flex justify-end mb-4">
                <ThemeSelector />
              </div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

