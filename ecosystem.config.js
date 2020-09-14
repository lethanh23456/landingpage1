module.exports = {
    apps: [{
        name: "base-landingpage",
        script: "npm run start",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
