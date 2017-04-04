module.exports = {
  migrations_directory: "./migrations",
  networks: {
    sandbox: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    development: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    },
    private: {
      host: "localhost",
      port: 8547,
      network_id: "*" // Match any network id
    },
    main: {
      host: "localhost",
      port: 8548,
      network_id: "*" // Match any network id
    }
  }
};
