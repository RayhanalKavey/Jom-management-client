import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    getAppliedJobs: builder.query({
      query: ({ userId }) => ({
        url: `/jobs/applied-jobs?userId=${userId}`,
      }),
      providesTags: ["jobs"],
    }),
    getJobsForQueryPagination: builder.query({
      query: ({ page, size }) => ({
        url: `/jobs/pagination?page=${page}&size=${size}`,
      }),
      providesTags: ["jobs"],
    }),
    postAJob: builder.mutation({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
    updateAJob: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/jobs/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["jobs"],
    }),
    deleteAJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
        // credentials: "include",
      }),
      invalidatesTags: ["jobs"],
    }),
    applyAJob: builder.mutation({
      query: (data) => ({
        url: "/jobs/jobApply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
  }),
});
export const {
  useGetJobsQuery,
  useGetAppliedJobsQuery,
  useGetJobsForQueryPaginationQuery,
  usePostAJobMutation,
  useUpdateAJobMutation,
  useDeleteAJobMutation,
  useApplyAJobMutation,
} = jobApi;
