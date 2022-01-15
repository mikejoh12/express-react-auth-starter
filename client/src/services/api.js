import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: '/auth/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: '/auth/logout',
          method: 'POST',
        }),
      }),
      getSecretMsg: builder.query({
        query: () => '/data/secret',
      }),
    }),
})

export const { useLoginMutation, useLogoutMutation, useGetSecretMsgQuery } = api;