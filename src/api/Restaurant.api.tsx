import { SearchState } from "@/pages/SearchPage";
import { restaurantSerachResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurant = (
  searchState: SearchState,
  city?: string
) => {
  const createSerachRequest = async (): Promise<restaurantSerachResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const resposne = await fetch(
      `${API_BASE_URL}/api/v1/restaurant/search/${city}?${params.toString()}`,
      {}
    );

    if (!resposne.ok) {
      throw new Error("Failed to get the restaurants");
    }

    return resposne.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaiurants", searchState],
    createSerachRequest,
    {
      enabled: !!city,
    }
  );

  return { results, isLoading };
};
