import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const base =
    process.env.DEPLOY_TARGET === "custom_domain"
      ? "/"
      : "/iamLeo-Porfolio-V2/";

  return {
    base,
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "import.meta.env.MODE": JSON.stringify(mode),
      "import.meta.env.BASE_URL": JSON.stringify(base),
    },
  };
});
