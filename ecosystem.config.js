
module.exports = {
    apps: [{
        name: "daotao-ptit-landingpage",
        script: "npm run start -- -p 3001",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
