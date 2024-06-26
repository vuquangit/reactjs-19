import { createApi } from '@reduxjs/toolkit/query/react'

import { IBaseResponse } from '@/interfaces/base'
import { customBaseQuery } from '@/services/base'
import { IOauthRequest } from '@/interfaces/oauth'

// Define a service using a base URL and expected endpoints
export const oauthApi = createApi({
  baseQuery: customBaseQuery,
  reducerPath: 'oauthApi',
  tagTypes: ['Oauth'],

  endpoints: (builder) => ({
    oauthGoogle: builder.query<IBaseResponse<void>, IOauthRequest>({
      query: (params) => ({
        url: '/oauth/google',
        method: 'GET',
        params: params,
      }),
    }),

    oauthLogin: builder.query<IBaseResponse<void>, void>({
      query: () => ({
        url: '/oauth/google/guard',
        method: 'GET',
      }),
    }),
  }),
})

export const { useLazyOauthGoogleQuery, useLazyOauthLoginQuery } = oauthApi
