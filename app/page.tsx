import { Spinning } from "@/components/spinning"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Spinning background element */}
      <Spinning />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-center font-['FrogSerif'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide">
          What&apos;s inspiring you?
        </h1>
      </div>
    </main>
  )
}