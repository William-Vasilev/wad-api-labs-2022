import React from "react";
import TVHeader from "../components/headerTV";
import SampleTV from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "TV Details Page/TVHeader",
  component: TVHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVHeader TV={SampleTV} />;

Basic.storyName = "Default";