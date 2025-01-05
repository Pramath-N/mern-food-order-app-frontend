import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { Order } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/v1/my/restaurant`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get the restaurant");
    }

    return response.json();
  };
  const { data: restaurant, isLoading } = useQuery(
    "fetchMyRestaurant",
    getMyRestaurantRequest
  );

  return { restaurant, isLoading };
};

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFromData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/v1/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFromData,
    });

    if (!response.ok) {
      throw new Error("Failed to create the restaurant");
    }

    return response.json();
  };

  const {
    mutateAsync: createRestaurant,
    isLoading,
    error,
    isSuccess,
  } = useMutation(createMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Successfully created the restaurant");
  }

  if (error) {
    toast.error("Unable to create the restaurant");
  }

  return { createRestaurant, isLoading };
};
export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantFromData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/v1/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFromData,
    });

    if (!response.ok) {
      throw new Error("Failed to update the restaurant");
    }

    return response.json();
  };

  const {
    mutateAsync: updateRestaurant,
    isLoading,
    error,
    isSuccess,
  } = useMutation(updateMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Successfully update the restaurant");
  }

  if (error) {
    toast.error("Unable to update the restaurant");
  }

  return { updateRestaurant, isLoading };
};

export const useGetMyRestauranrOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestauranrOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/v1/my/restaurant/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get the orders");
    }
    return response.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyRestauranrOrders",
    getMyRestauranrOrdersRequest
  );

  return { orders, isLoading };
};

type UpdateOrderStatusRequest = {
  orderId: string;
  status: string;
};

export const useUpdateMyRestaurantOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantOrderRequest = async (
    updateStatuOrderRequest: UpdateOrderStatusRequest
  ): Promise<Order> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/v1/my/restaurant/order/${updateStatuOrderRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStatuOrderRequest),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update the order status");
    }

    return response.json();
  };

  const {
    mutateAsync: updateRestaurantStatus,
    isLoading,
    isError,
    reset,
    isSuccess,
  } = useMutation(updateMyRestaurantOrderRequest);

  if (isSuccess) {
    toast.success("Successfully update the order status");
  }
  if (isError) {
    toast.error("Unable to update the order status");
    reset();
  }

  return{ updateRestaurantStatus, isLoading };  
};
