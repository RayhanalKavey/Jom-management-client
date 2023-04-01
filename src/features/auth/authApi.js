import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["users"],
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    registerAsEmployer: builder.mutation({
      query: (data) => ({
        url: `/user/employer`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    registerAsJobSeeker: builder.mutation({
      query: (data) => ({
        url: "/user/jobSeeker",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const {
  useGetUserQuery,
  usePostUserMutation,
  useRegisterAsEmployerMutation,
  useRegisterAsJobSeekerMutation,
} = authApi;
