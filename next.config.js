const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const path = require("path")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["test-vajraah-admin-site.ap-south-1.amazonaws.com", "localhost"],
  },
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["@tanstack/react-query", ...config.externals]
    }
    const reactQuery = path.resolve(require.resolve("@tanstack/react-query"))
    config.resolve.alias["@tanstack/react-query"] = reactQuery
    return config
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
