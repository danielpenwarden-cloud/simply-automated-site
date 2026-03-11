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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400;1,9..144,500&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Simply Automated — AI Automation for NZ Business" />
        <meta property="og:description" content="Practical AI automation for New Zealand small businesses. Save 15+ hours a week." />
        <meta property="og:image" content="https://www.simplyautomated.nz/og-image.png" />
        <meta property="og:url" content="https://www.simplyautomated.nz" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  )
}
