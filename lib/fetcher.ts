import { curry } from "ramda";

export async function fetcher<T>(
  baseUrl: string,
  errMsg: string,
  url: string,
  init?: RequestInit,
): Promise<T> {
  // console.log({ baseUrl, init });
  if (!baseUrl) throw new Error(errMsg || "BASE_URL not set");
  const response = await fetch(`${baseUrl}${url}`, init);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

const curriedFetcher = curry(fetcher);

const ART_URL = process.env.EXPO_PUBLIC_GALLERY_BASE_API as string;
const JSON_URL = process.env.EXPO_PUBLIC_JSON_BASE_URL as string;

// TODO:  improve partial application
export const fetchArt =
  curriedFetcher(
    ART_URL,
    "ART Gallery BASE_URL not set see: https://api.artic.edu/api/v1/swagger.json",
  );

export const fetchJson = curriedFetcher(
  JSON_URL,
  "JSON Placeholder BASE_URL not set see: https://jsonplaceholder.typicode.com",
);
