import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Naol — Video Editing Roadmap', description: 'A directed video editing learning roadmap: learn, practice, build, and get paid.' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
