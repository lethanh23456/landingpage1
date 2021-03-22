<<<<<<< HEAD

module.exports = {
    apps: [{
        name: "daotao-ptit-landingpage",
        script: "npm run start -- -p 3001",
=======
module.exports = {
    apps: [{
        name: "base-landingpage",
        script: "npm run start",
>>>>>>> 9ef13cd27f80e60005eff89addcf92deec93a7b3
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
