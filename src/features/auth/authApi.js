import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (data) => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    registerEmployer: builder.mutation({
      query: (data) => ({
        url: "/registerEmployer",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetJobsQuery, useRegisterEmployerMutation } = authApi;
