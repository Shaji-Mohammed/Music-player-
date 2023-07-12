/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify81.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "423c1b27bdmsh8b41d5815a79825p117730jsnb9abe17c8e3d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "top_200_tracks" }),
  }),
});

export const { useGetTopChartsQuery } = spotifyApi;
