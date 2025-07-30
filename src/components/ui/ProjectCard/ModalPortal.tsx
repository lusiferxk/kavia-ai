'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Create or get modal root
    let modalRoot = document.getElementById('modal-root')
    if (!modalRoot) {
      modalRoot = document.createElement('div')
      modalRoot.id = 'modal-root'
      modalRoot.style.position = 'fixed'
      modalRoot.style.top = '0'
      modalRoot.style.left = '0'
      modalRoot.style.width = '100%'
      modalRoot.style.height = '100%'
      modalRoot.style.zIndex = '999999'
      document.body.appendChild(modalRoot)
    }

    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return createPortal(
    children,
    document.getElementById('modal-root') as Element
  )
}