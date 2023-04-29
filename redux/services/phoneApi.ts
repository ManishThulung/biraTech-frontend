import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Phone } from "../types/phone";

export const phoneApi = createApi({
  reducerPath: "phoneApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),
  endpoints: (builder) => ({
    getPhones: builder.query<Phone[], null>({
      query: () => "phones",
    }),
    getPhoneById: builder.query<Phone, number>({
      query: (id) => `phones/${id}`,
    }),
  }),
});

export const { useGetPhonesQuery, useGetPhoneByIdQuery } = phoneApi;
