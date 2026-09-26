export function publicLink(value: string | null): string | undefined {
  if (!value?.trim()) return undefined
  try {
    const url = new URL(value)
    if (url.protocol === 'mailto:') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url.pathname) ? url.href : undefined
    if (url.protocol !== 'https:' || url.username || url.password) return undefined
    const host = url.hostname.toLowerCase()
    if (!host.includes('.') || host.endsWith('.localhost') || host.endsWith('.local') || host.endsWith('.test') || host.endsWith('.invalid') || host.endsWith('.example') || host === 'example.com' || host.includes(':') || /^\d+\.\d+\.\d+\.\d+$/.test(host)) return undefined
    return url.href
  } catch {
    return undefined
  }
}
