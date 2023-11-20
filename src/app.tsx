import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { ConfigProvider, theme } from "antd";
import { router } from "routes";

import ScriptLoader from "components/ScriptLoader";
import { colors } from "theme";

declare global {
  interface Window {
    mapsApiKey: string;
  }
}

const mapsApiKey = window.mapsApiKey;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              paddingXS: 4,
              fontSize: 13,
            },
            App: {
              lineHeight: undefined,
              fontFamily: "Aeonik",
            },
          },
          algorithm: theme.defaultAlgorithm,
          token: {
            fontFamily: "Aeonik",
            colorPrimary: colors.primary,
            colorPrimaryBg: colors.sky[100],
            colorPrimaryBgHover: colors.sky[200],
            colorSuccess: colors.green[500],
            colorError: colors.red[500],
            colorWarning: colors.yellow[500],
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
      <ScriptLoader
        src={`https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places`}
      />
    </QueryClientProvider>
  );
}
