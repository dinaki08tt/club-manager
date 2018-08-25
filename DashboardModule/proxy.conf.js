const PROXY_CONFIG = [
    {
        context: [
            "/dashboard",
            "/many",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "http://localhost:9095",
        secure: false
    }
]

module.exports = PROXY_CONFIG;