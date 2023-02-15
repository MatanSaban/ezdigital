/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const WORDPRESS_URL = "https://ezd-psg.ussl.co.il";


module.exports = {
  env: {
    WORDPRESS_ENDPOINT: `${WORDPRESS_URL}/wp-json/wp/v2`,
    WORDPRESS_MENUS_ENDPOINT: `${WORDPRESS_URL}/wp-json/wp-api-menus/v2/menus`
  },
  nextConfig
}
