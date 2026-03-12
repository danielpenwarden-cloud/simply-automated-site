import './globals.css'

export const metadata = {
  title: 'Simply Automated — AI Automation for New Zealand Business',
  description: 'Simply Automated helps NZ businesses save time and money with AI-powered automation. Custom workflows, smart integrations, and ongoing support for tradies, construction, and SMEs.',
  openGraph: {
    title: 'Simply Automated — AI Automation for NZ Business',
    description: 'Practical AI automation for New Zealand small businesses. Save 15+ hours a week.',
    url: 'https://www.simplyautomated.nz',
    siteName: 'Simply Automated',
    images: [
      {
        url: 'https://www.simplyautomated.nz/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Simply Automated — AI Automation for NZ Business',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simply Automated — AI Automation for NZ Business',
    description: 'Practical AI automation for New Zealand small businesses. Save 15+ hours a week.',
    images: ['https://www.simplyautomated.nz/opengraph-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400;1,9..144,500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
