import React from "react";
import TVDetails from "../components/tvDetails";
import SampleTV from "./sampleTvData";
import { MemoryRouter } from "react-router";
import TVsContextProvider from "../contexts/tvsContext";

export default {
  title: "Tv Details Page/TVDetails",
  component: TVDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVsContextProvider>{Story()}</TVsContextProvider>,
  ],
};

export const Basic = () => <TVDetails TV={SampleTV} />;

Basic.storyName = "Default";
