import { sanityClient } from "@/sanity/client";

export const useSanity = async (query: string) => {
  return await sanityClient.fetch(query);
};
