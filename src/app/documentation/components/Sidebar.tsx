'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Home, Code2, FileText, Menu, X } from 'lucide-react'
import { navigation, quickLinks } from '../_navigation'
import { useState, useEffect } from 'react'

const iconMap = { Home, Code2, FileText };

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.documentation-sidebar')
      const mobileToggle = document.querySelector('.mobile-sidebar-toggle')
      
      if (isOpen && sidebar && !sidebar.contains(event.target as Node) && 
          mobileToggle && !mobileToggle.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="mobile-sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && <div className="mobile-sidebar-overlay" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={`documentation-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <Link href="/">
            <img src="/logo.svg" alt="KAVIA AI" style={{ width: '137px', height: '36px' }} />
          </Link>
        </div>

        {/* Search Box */}
        {/* <div className="search-container">
          <Search className="search-icon" size={16} />
          <input 
            type="text" 
            placeholder="Quick Search" 
            className="search-input"
          />
        </div> */}
        
        {/* Quick Actions - Icon Buttons */}
        <div className="quick-actions">
          {quickLinks.map(link => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            const isActive = pathname === link.href;
            return (
              <Link href={link.href || '#'} key={link.title} className={`icon-button-group${isActive ? ' active' : ''}`}>
                <span className="icon-button">{Icon && <Icon size={18} />}</span>
                <span className="icon-label">{link.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="sidebar-divider" />

        {/* Navigation Sections */}
        <nav className="sidebar-nav">
          {navigation.map((section, index) => (
            <div key={section.title}>
              <div className="nav-section">
                <h3 className="section-title">{section.title}</h3>
                {section.items && (
                  <div className="nav-items with-line">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href || '#'}
                        className={`nav-item ${pathname === item.href ? 'active' : ''}`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {index < navigation.length - 1 && <div className="sidebar-divider" />}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}