'use client'

import React, { useEffect, useRef, useCallback } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)
  const isClicking = useRef(false)
  const isOverText = useRef(false)

  // Helper to apply visual state
  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mousePos.current.x - 25}px, ${mousePos.current.y - 25}px, 0)`
    }
  }, [])

  const updateCursorClass = useCallback(() => {
    if (cursorRef.current) {
      const classes = ['custom-cursor']
      if (isHovering.current) classes.push('hover')
      if (isClicking.current) classes.push('click')
      if (isOverText.current) classes.push('text-hover')
      cursorRef.current.className = classes.join(' ')
    }
  }, [])

  useEffect(() => {
    let animationId: number
    
    // Re-evaluate what's under the cursor (used for both mousemove and scroll)
    const evaluateCursorContext = () => {
      if (animationId) return

      const { x, y } = mousePos.current

      animationId = requestAnimationFrame(() => {
        const elementUnderCursor = document.elementFromPoint(x, y)
        let shouldInvert = false

        if (elementUnderCursor) {
          const hasText =
            !!elementUnderCursor.textContent &&
            elementUnderCursor.textContent.trim().length > 0

          const isTextTag = elementUnderCursor.matches(
            'p, h1, h2, h3, h4, h5, h6, span, a, div'
          )

          shouldInvert = isTextTag && hasText
        }

        if (shouldInvert !== isOverText.current) {
          isOverText.current = shouldInvert
          updateCursorClass()
        }

        updateCursorPosition()
        animationId = 0
      })
    }

    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      evaluateCursorContext()
    }

    // When the page scrolls (including smooth snapping between sections),
    // the content under the cursor changes even if the mouse doesn't move.
    // Re-check the element under the stored cursor position so the
    // inversion stays in sync in sections like "My Stack".
    const handleScrollOrResize = () => {
      evaluateCursorContext()
    }
    
    const handleMouseDown = () => {
      isClicking.current = true
      updateCursorClass()
    }
    
    const handleMouseUp = () => {
      isClicking.current = false
      updateCursorClass()
    }

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('scroll', handleScrollOrResize, { passive: true })
    window.addEventListener('resize', handleScrollOrResize)

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
    }
  }, [updateCursorPosition, updateCursorClass])

  return <div ref={cursorRef} className="custom-cursor" />
}

export default CustomCursor