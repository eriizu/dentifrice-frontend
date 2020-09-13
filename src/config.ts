const PROD = false;

export default PROD
  ? {
      DENTIFRICE_BASE_URL: "https://dentifrice.eriizu.fr/api",
      DISCORD_OATH_URL:
        "https://discord.com/api/oauth2/authorize?client_id=754783626951917619&redirect_uri=https%3A%2F%2Fdentifrice.eriizu.fr%2Flogin&response_type=code&scope=identify%20email",
    }
  : {
      DENTIFRICE_BASE_URL: "http://localhost:9000",
      DISCORD_OATH_URL:
        "https://discord.com/api/oauth2/authorize?client_id=676485112564678657&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20guilds",
    };
