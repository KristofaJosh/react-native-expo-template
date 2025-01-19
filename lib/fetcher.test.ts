import { curry } from "ramda";

import { fetcher } from "@/lib/fetcher";

global.fetch = jest.fn();

declare let fetch: jest.MockedFunction<typeof global.fetch>;

const curriedFetcher = curry(fetcher);

describe("fetchArt()", () => {
  const BASE_URL = "https://api.artic.edu/api/v1";

  const fetchArt = curriedFetcher(BASE_URL, "oopsie!");

  test("fetches data successfully from an API", async () => {
    const mockJsonResponse = { data: "test" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockJsonResponse,
    } as Response);

    const url = "/test";
    const result = await fetchArt(url, undefined);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}${url}`, undefined);
    expect(result).toEqual(mockJsonResponse);
  });

  test("throws an error when the response is not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Not Found",
    } as Response);

    await expect(fetchArt("/test", undefined)).rejects.toThrow(
      "Network response was not ok",
    );
  });
});
