import type { Preview } from "@storybook/react";
import React from "react";
// add tailwind
import "tailwindcss/tailwind.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          width: "600px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
