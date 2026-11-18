/** @type {import('next').NextConfig} */

// Resolve GitHub Pages basePath dynamically:
// 1. Prefer NEXT_PUBLIC_BASE_PATH (injected automatically by actions/configure-pages@v5).
// 2. Fall back to GITHUB_REPOSITORY when running in GitHub Actions without configure-pages.
// 3. Empty string for local dev, custom domains, or <user>.github.io root repositories.
function resolveBasePath() {
  if (typeof process.env.NEXT_PUBLIC_BASE_PATH === 'string') {
    const cleaned = process.env.NEXT_PUBLIC_BASE_PATH.trim().replace(/\/+$/, '');
    if (!cleaned || cleaned === '/') return '';
    return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
  }

  if (process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY) {
    const [, repo] = process.env.GITHUB_REPOSITORY.split('/');
    if (repo && !repo.endsWith('.github.io')) {
      return `/${repo}`;
    }
  }

  return '';
}

const basePath = resolveBasePath();

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    config.externals = [...(config.externals || [])];
    return config;
  },
};

export default nextConfig;
