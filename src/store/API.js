import axios from "../axios-instance";

export const API = {
    getOrders: () => axios.get('orders.json'),
    getDishes: () => axios.get('dishes.json'),
    getDishInfo: (id) => axios.get('dishes/' + id + '.json'),
    updateDish: (id, dish) => axios.put('dishes/' + id + '.json', dish),
    addDish: (dish) => axios.post('dishes.json', dish)
};