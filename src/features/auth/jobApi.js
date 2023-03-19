import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    postAJob: builder.mutation({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        body: data,
        // headers: {
        //   "content-type": "application/json",
        // },
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
  }),
});
export const {
  useGetJobsQuery,
  usePostAJobMutation,
  useUpdateAJobMutation,
  useDeleteAJobMutation,
} = jobApi;
