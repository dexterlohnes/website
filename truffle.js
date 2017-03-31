module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
    test: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    }
  }
};
