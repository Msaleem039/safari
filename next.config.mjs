/** @type {import('next').NextConfig} */
const nextConfig = {
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "avatars.mds.yandex.net" },
      { protocol: "https", hostname: "media-cdn.tripadvisor.com" },
      { protocol: "https", hostname: "img.grouponcdn.com" },
      { protocol: "https", hostname: "live.staticflickr.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "cdn-imgix.headout.com" },
      { protocol: "https", hostname: "safaridesertdubai.ae" },
      { protocol: "https", hostname: "dotravel.com" },
      { protocol: "https", hostname: "q-xx.bstatic.com" },
      { protocol: "https", hostname: "cdn.getyourguide.com" },
      { protocol: "https", hostname: "example.com" },
    ],
    minimumCacheTTL: 60 * 60 * 24,
    dangerouslyAllowSVG: false,
  },
}

export default nextConfig
