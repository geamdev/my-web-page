import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geampiere Jaramillo',
  description: 'Soy un Desarrollador Front-End apasionado por el aprendizaje. En mis tiempos libres, disfruto jugando videojuegos en línea, especialmente League of Legends. También me encanta el anime y mi anime favorito es One Piece.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
