export const getEnv = (key: string) => {
  const varValue = process.env[key];
  if (!varValue) throw new Error(`Could not get environment variable: ${key}`);
  return varValue;
};

export default {
  rootElementId: "__next",
  title: {
    text: "Neha Negi",
    divider: "|"
  },
  version: "6.4.0",
  omdb: {
    apiKey: process.env.OMDB_API_KEY,
    host: "https://omdbapi.com"
  },
  features: {
    contactForm: false
  },
  debugMode: process.env.DEBUG_MODE
};
