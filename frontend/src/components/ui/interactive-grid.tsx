import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  baseX: number
  baseY: number
  z: number
}

interface InteractiveGridProps {
  points?: number
  className?: string
  containerClassName?: string
}

export function InteractiveGrid({
  points = 40,
  className = '',
  containerClassName = '',
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const pointsRef = useRef<Point[]>([])
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    const initPoints = () => {
      // Add extra points beyond viewport for seamless edge interaction
      const margin = 100 // pixels beyond viewport
      const width = window.innerWidth + 2 * margin
      const height = window.innerHeight + 2 * margin
      
      pointsRef.current = Array.from({ length: points }, () => ({
        x: Math.random() * width - margin,
        y: Math.random() * height - margin,
        baseX: Math.random() * width - margin,
        baseY: Math.random() * height - margin,
        z: Math.random() * 0.5 + 0.5,
      }))
    }

    const drawPoints = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw glow effect around mouse
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        200
      )
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      pointsRef.current.forEach((point, i) => {
        const distance = Math.sqrt(
          Math.pow(mouseRef.current.x - point.x, 2) +
          Math.pow(mouseRef.current.y - point.y, 2)
        )

        const ease = 0.1
        const maxDistance = 200

        point.x += (point.baseX - point.x) * ease
        point.y += (point.baseY - point.y) * ease

        if (distance < maxDistance) {
          const angle = Math.atan2(
            mouseRef.current.y - point.y,
            mouseRef.current.x - point.x
          )
          const force = (maxDistance - distance) / maxDistance
          point.x -= Math.cos(angle) * force * 20
          point.y -= Math.sin(angle) * force * 20
        }

        pointsRef.current.forEach((otherPoint, j) => {
          if (i === j) return

          const distance = Math.sqrt(
            Math.pow(otherPoint.x - point.x, 2) +
            Math.pow(otherPoint.y - point.y, 2)
          )

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            const opacity = (120 - distance) / 120 * 0.5 * point.z
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(point.x, point.y, 2 * point.z, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.fill()
      })

      rafRef.current = requestAnimationFrame(drawPoints)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      }
    }

    const handleResize = () => {
      resizeCanvas()
      initPoints()
    }

    resizeCanvas()
    initPoints()
    drawPoints()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Handle mouse leaving the window
    window.addEventListener('mouseleave', () => {
      mouseRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [points])

  return (
    <div className={`fixed inset-0 ${containerClassName}`}>
      <canvas
        ref={canvasRef}
        className={`h-full w-full ${className}`}
        style={{ 
          width: '100vw', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}
