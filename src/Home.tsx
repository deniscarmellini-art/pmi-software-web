import { useEffect } from 'react'
import { ContactCta } from './components/ContactCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Method } from './components/Method'
import { Solutions } from './components/Solutions'
import { Troubleshooter } from './components/Troubleshooter'

function getHeaderOffset() {
  const header = document.querySelector('.site-header') as HTMLElement | null
  const fromCss = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
  return Math.round(header ? header.offsetHeight : fromCss || 76)
}

function resolveTargetId(hash: string) {
  const raw = hash.replace(/^#/, '')
  const aliases: Record<string, string> = {
    'come-lavoriamo': 'metodo',
  }

  return aliases[raw] || raw || 'top'
}

function scrollToTarget(hash: string) {
  if (!hash || hash === '#') {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return
  }

  const targetId = resolveTargetId(hash)
  const target = document.getElementById(targetId)

  if (!target) {
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
  window.scrollTo({ top, left: 0, behavior: 'auto' })
  const canonicalHash = `#${target.id}`
  if (window.location.hash !== canonicalHash) {
    window.history.replaceState(null, '', canonicalHash)
  }
}

export function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const handleInternalNavigation = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href]')
      if (!anchor) {
        return
      }

      const href = anchor.getAttribute('href') || ''
      if (!href.startsWith('#') || href === '#') {
        return
      }

      event.preventDefault()
      const targetId = resolveTargetId(href)
      const target = document.getElementById(targetId)
      if (target) {
        scrollToTarget(`#${target.id}`)
        window.history.replaceState(null, '', `#${target.id}`)
      }
    }

    const handleHashLoad = () => {
      if (window.location.hash) {
        scrollToTarget(window.location.hash)
      }
    }

    document.addEventListener('click', handleInternalNavigation)
    window.addEventListener('hashchange', handleHashLoad)
    requestAnimationFrame(handleHashLoad)

    return () => {
      document.removeEventListener('click', handleInternalNavigation)
      window.removeEventListener('hashchange', handleHashLoad)
    }
  }, [])

  return (
    <div id="top">
      <Header />
      <Hero />
      <Solutions />
      <Method />
      <Troubleshooter />
      <ContactCta />
      <Footer />
    </div>
  )
}
