"use client"

import { useEffect, useRef } from "react"

export function Spinning() {
  const svgUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frog-spin-BBGSajW7wnqbAUVUMbp9wZZ0EpvE6a.svg"
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch the SVG content
    fetch(svgUrl)
      .then((response) => response.text())
      .then((svgContent) => {
        if (containerRef.current) {
          // Insert the SVG content
          containerRef.current.innerHTML = svgContent

          // Get the SVG element
          const svgElement = containerRef.current.querySelector("svg")
          if (svgElement) {
            // Style the SVG
            svgElement.style.width = "100%"
            svgElement.style.height = "100%"
            svgElement.style.fill = "white"

            // Add animation
            const animate = () => {
              const currentRotation = Number.parseFloat(
                svgElement.style.transform?.replace("rotate(", "").replace("deg)", "") || "0",
              )
              svgElement.style.transform = `rotate(${(currentRotation + 0.1) % 360}deg)`
              requestAnimationFrame(animate)
            }

            requestAnimationFrame(animate)
          }
        }
      })
      .catch((error) => console.error("Error loading SVG:", error))
  }, [svgUrl])

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div ref={containerRef} className="w-[800px] h-[800px] opacity-100" />
    </div>
  )
}