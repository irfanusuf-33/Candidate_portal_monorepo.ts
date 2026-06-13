"use client"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface WobbleCardProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function WobbleCard({ children, className, containerClassName }: WobbleCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 22, y: -y * 22 })
  }

  const handleMouseEnter = () => setScale(1.02)

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setScale(1)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${scale})`,
        transition: scale === 1 ? "transform 0.4s ease" : "transform 0.1s ease",
      }}
      className={cn("relative", containerClassName)}
    >
      <div className={cn("h-full w-full bg-transparent", className)}>{children}</div>
    </div>
  )
}
