import apiSlice from "../api/apiSlice";

const applyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApply: builder.query({
      query: () => ({
        url: "/apply",
      }),
      providesTags: ["jobApply"],
    }),
    applyJobs: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobs", "jobApply"],
    }),
  }),
});

export const { useGetApplyQuery, useApplyJobsMutation } = applyApi;
