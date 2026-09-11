import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement matchMedia — GSAP/reduced-motion checks rely on it.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

// jsdom doesn't implement IntersectionObserver — used for scroll-spy nav.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// @ts-expect-error jsdom polyfill
window.IntersectionObserver = MockIntersectionObserver
