/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "423c1b27bdmsh8b41d5815a79825p117730jsnb9abe17c8e3d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: () => "charts/track?locale=en-US&pageSize=20&startFrom=0" }),
    getSongDetails: builder.query({ query: ({ songid }) => `songs/get-details?key=${songid}&locale=en-US` }),
    getRelatedSongs: builder.query({ query: ({ songid }) => `shazam-songs/list-similarities?id=track-similarities-id-${songid}&locale=en-US` })
  }),
});

export const {
  useGetChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} = spotifyApi;
