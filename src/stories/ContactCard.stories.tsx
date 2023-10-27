import type { Meta, StoryObj } from "@storybook/react";
import ContactCard from "components/ContactCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Contact Card",
  component: ContactCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "450px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    location: "Sydney, Australia",
    name: "Julian Gargicevich",
    role: "IT Consultant",
    tag: "Engineering",
    image:
      "https://media.licdn.com/dms/image/C5603AQGrwcvwUvCn9A/profile-displayphoto-shrink_800_800/0/1620879353494?e=1703721600&v=beta&t=sundcDCTXPLkFEmosxibin9Qxg31MEuO0hnh6Jyojo0",
    linkedin: "https://www.linkedin.com/in/julian-gargicevich/",
  },
};
