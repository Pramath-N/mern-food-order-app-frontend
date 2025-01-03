export type User = {
    _id: string,
    name: string,
    email: string
    addressLine1: string,
    city: string,
    country: string
}

export type MenuItem = {
    _id: string;
    name: string;
    price: number
}

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl : String;
    lastUpdated: string;
}

export type restaurantSerachResponse = {
    data: Restaurant[],
    pagination: {
        total: Number,
        page: Number,
        pages: Number
    }
}