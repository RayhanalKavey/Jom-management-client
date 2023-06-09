import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    getFresherJobs: builder.query({
      query: ({ jobType }) => ({
        url: `/jobs/fresherJobs?jobType=${jobType}`,
      }),
      providesTags: ["jobs"],
    }),
    getExperiencedJobs: builder.query({
      query: ({ jobType }) => ({
        url: `/jobs/experiencedJobs?jobType=${jobType}`,
      }),
      providesTags: ["jobs"],
    }),
    getApplicantJobById: builder.query({
      query: (id) => ({
        url: `/jobs/applicant-job/${id}`,
      }),
      providesTags: ["jobs"],
    }),
    getAppliedJobs: builder.query({
      query: ({ userId }) => ({
        url: `/jobs/applied-jobs?userId=${userId}`,
      }),
      providesTags: ["jobs"],
    }),
    getPostedJobs: builder.query({
      query: ({ email }) => ({
        url: `/jobs/posted-jobs?email=${email}`,
      }),
      providesTags: ["jobs"],
    }),
    getJobsForQueryPagination: builder.query({
      query: ({ page, size, jobTypes }) => ({
        url: `/jobs/pagination?page=${page}&size=${size}&jobTypes=${jobTypes}`,
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
    closeAJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/closeAJob/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["jobs"],
    }),
    reopenAJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/reopenAJob/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["jobs"],
    }),
    employerMessage: builder.mutation({
      query: (data) => ({
        url: "/jobs/employerMessage",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
    jobSeekerMessage: builder.mutation({
      query: (data) => ({
        url: "/jobs/jobSeekerMessage",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
  }),
});
export const {
  useCloseAJobMutation,
  useReopenAJobMutation,
  useGetJobsQuery,
  useGetFresherJobsQuery,
  useGetExperiencedJobsQuery,
  useGetApplicantJobByIdQuery,
  useGetAppliedJobsQuery,
  useGetPostedJobsQuery,
  useGetJobsForQueryPaginationQuery,
  usePostAJobMutation,
  useUpdateAJobMutation,
  useDeleteAJobMutation,
  useApplyAJobMutation,
  useEmployerMessageMutation,
  useJobSeekerMessageMutation,
} = jobApi;
