import apiSlice from "../api/apiSlice";

const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
      }),
      providesTags: ["blogs"],
    }),
    postABlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
    updateABlog: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/blogs/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteABlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        // credentials: "include",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});
export const {
  useGetBlogsQuery,
  usePostABlogMutation,
  useUpdateABlogMutation,
  useDeleteABlogMutation,
} = blogApi;
