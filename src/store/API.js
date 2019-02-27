import axios from "../axios-instance";

export const API = {
    getOrders: () => axios.get('orders.json'),
    getDishes: () => axios.get('dishes.json')
};