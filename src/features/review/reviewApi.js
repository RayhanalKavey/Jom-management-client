import apiSlice from "../api/apiSlice";

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => ({
        url: "/reviews",
      }),
    }),
  }),
});
export const { useGetReviewQuery } = reviewApi;
