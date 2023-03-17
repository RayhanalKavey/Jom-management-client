import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (data) => ({
        url: "/jobs",
      }),
    }),
    registerJobSeeker: builder.mutation({
      query: (data) => ({
        url: "/registerJobSeeker",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetJobsQuery } = authApi;
