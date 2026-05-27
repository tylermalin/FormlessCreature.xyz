/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // All site images are now hosted in /public; no external remotes needed.
    // Keep optimization enabled so Next.js generates per-display WebP/AVIF
    // variants for the footer lockup + OG image.
  },
}

export default nextConfig
