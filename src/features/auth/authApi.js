import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["users"],
    }),
    registerEmployer: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    registerJobSeeker: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateEmployerOrJobSeeker: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/user/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const {
  useGetUserQuery,
  useRegisterEmployerMutation,
  useRegisterJobSeekerMutation,
  useUpdateEmployerOrJobSeekerMutation,
} = authApi;
