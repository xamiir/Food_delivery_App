// services/api.tsx

export const fetchProducts = async () => {
    // Simulated static data
    const products = [
        {
            id: 1,
            name: 'Burger',
            image: 'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=',
            price: 5.99,
            description: 'Delicious burger with cheese, lettuce, and tomato',
        },
        {
            id: 2,
            name: 'Pizza',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3M5vkRI7gGeqlQProU8wwCus72rHP5NEkBJOdoCv-YY4sA9Extp7h7nGcsgKBPlRyB4&usqp=CAU',
            price: 8.99,
            description: 'Delicious pizza with tomato sauce, cheese, and basil',
        },
        {
            id: 3,
            name: 'Pasta',
            image: 'https://thumbs.dreamstime.com/b/penne-pasta-plate-tomato-sauce-30685904.jpg',
            price: 7.99,
            description: 'Pasta with tomato sauce and basil',
        },
        {
            id: 4,
            name: 'Salad',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFTh3KQCv0HV4Q8WXLEYaykccgZcgwrMCmXi8qt22iA&s',
            price: 6.99,
            description: 'Fresh salad with lettuce, tomatoes, and carrots',
        },
    ];

    return products;
};
