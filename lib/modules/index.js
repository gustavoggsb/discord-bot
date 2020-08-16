const loadModule = (file) => require(`./${file}`).default;

module.exports = {
  whitelist: loadModule("whitelist"),
  aprove: loadModule("aprove"),
  reprove: loadModule("reprove"),
  clearAll: loadModule("clearAll"),
  serverPing: loadModule("serverPing")
};
