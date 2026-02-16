export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    link: string;
    image: string;
    category?: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Mechanical Keyboard",
        description: "Premium mechanical keyboard with hot-swappable switches. Perfect for coding marathons.",
        price: "$149.99",
        link: "https://amazon.com",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
        category: "Hardware"
    },
    {
        id: "2",
        name: "Monitor Light Bar",
        description: "Screen-mounted light bar to reduce eye strain during late-night coding sessions.",
        price: "$89.99",
        link: "https://amazon.com",
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80",
        category: "Lighting"
    },
    {
        id: "3",
        name: "Ergonomic Chair",
        description: "Premium office chair with lumbar support. Essential for long coding sessions.",
        price: "$399.99",
        link: "https://amazon.com",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
        category: "Furniture"
    },
    {
        id: "4",
        name: "Wireless Mouse",
        description: "Precision wireless mouse with ergonomic design and customizable buttons.",
        price: "$79.99",
        link: "https://amazon.com",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
        category: "Hardware"
    },
    {
        id: "5",
        name: "USB-C Hub",
        description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader for ultimate connectivity.",
        price: "$59.99",
        link: "https://amazon.com",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80",
        category: "Accessories"
    },
    {
        id: "6",
        name: "Desk Mat",
        description: "Large desk mat with waterproof surface and non-slip rubber base.",
        price: "$29.99",
        link: "https://amazon.com",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
        category: "Accessories"
    }
];
