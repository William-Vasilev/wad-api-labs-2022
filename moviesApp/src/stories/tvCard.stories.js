import React from "react";
import TVCard from "../components/tvCard";
import SampleTV from "./sampleTvData";
import { MemoryRouter } from "react-router";
import TVsContextProvider from "../contexts/tvsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "TV shows/TVCard",
  component: TVCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVsContextProvider>{Story()}</TVsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVCard
      TV={SampleTV}
      action={(TV) => <AddToFavouritesIcon TV={TV} />}
      taging={(TV) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTV, poster_path: undefined };
  return (
    <TVCard
      TV={sampleNoPoster}
      action={(TV) => <AddToFavouritesIcon TV={TV} />}
      taging={(TV) => null}
    />
  );
};
Exceptional.storyName = "exception";
