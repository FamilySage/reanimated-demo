module.exports = ({ config }) => {
  return {
    ...config,
    name: process.env.APP_NAME || "Demo",
  };
};
