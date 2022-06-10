export const demoProducts = [{
    price: 2500000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', thumb: '/img/demo/1.jpg',
}, {
    price: 1500000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', thumb: '/img/demo/2.jpg',
}, {
    price: 12500000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', thumb: '/img/demo/3.jpg',
}, {
    price: 500000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', thumb: '/img/demo/4.jpg',
}, {
    price: 1991000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', thumb: '/img/demo/5.jpg',
},];

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
});
