export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://what2eat-server.herokuapp.com";
