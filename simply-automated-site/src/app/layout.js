import './globals.css'

export const metadata = {
  title: 'Simply Automated — AI Automation for New Zealand Business',
  description: 'Simply Automated helps NZ businesses save time and money with AI-powered automation. Custom workflows, smart integrations, and ongoing support for tradies, construction, and SMEs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
