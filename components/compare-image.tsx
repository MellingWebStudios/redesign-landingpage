"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CompareImageProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export default function CompareImage({ beforeImage, afterImage, beforeAlt, afterAlt }: CompareImageProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const containerWidth = rect.width

      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100))
      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const containerWidth = rect.width

      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100))
      setSliderPosition(newPosition)
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-lg cursor-col-resize">
      {/* Before Image (Full width) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* After Image (Clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
          <div className="w-1 h-6 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-bg-dark/80 text-fg-light px-3 py-1 rounded-md text-sm font-medium">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-bg-dark/80 text-fg-light px-3 py-1 rounded-md text-sm font-medium">
        After
      </div>
    </div>
  )
}
