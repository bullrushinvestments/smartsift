import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmartSift',
  description: 'SmartSift is an AI-driven e-commerce platform that helps small businesses identify and onboard niche influencers on Web3 for targeted marketing campaigns.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SmartSift</h1>
      <p className="mt-4 text-lg">SmartSift is an AI-driven e-commerce platform that helps small businesses identify and onboard niche influencers on Web3 for targeted marketing campaigns.</p>
    </main>
  )
}
