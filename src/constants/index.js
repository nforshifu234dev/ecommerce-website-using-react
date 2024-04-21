import { facebook, instagram, x, github, shieldTick, support, truckFast, twitter, linkedIn } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "NFORSHIFU234 Dev",
        links: [
            { name: "Linktree", link: "https://linktr.ee/nforshifu234dev/", newTab: true },
            { name: "NFSFU234FormValidation Library", link: "https://github.com/NFSFU234FormValidation/nfsfu234-form-validation/", newTab: true },
            { name: "NFSFU234FormValidation Library Extension", link: "https://github.com/NFSFU234FormValidation/nfsfu234formvalidation-web-extension/", newTab: true },
            { name: "Buy Me A Coffee", link: "https://www.buymeacoffee.com/nforshifu234dev", newTab: true },
            { name: "Threads Web by NFORSHIFU234 Dev Inspired by Instagram", link: "https://nforshifu234dev-threadsapp.netlify.app/", newTab: true },
            { name: "NFORSHIFU234 Dev🖤👨🏿‍💻 - Halloween Portfolio", link: "https://nforshifu234dev-halloween-portfolio.netlify.app/", newTab: true },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" , newTab: false},
            { name: "Air Max 1", link: "/" , newTab: false},
            { name: "Air Jordan 1", link: "/" , newTab: false},
            { name: "Air Force 2", link: "/" , newTab: false},
            { name: "Nike Waffle Racer", link: "/" , newTab: false},
            { name: "Nike Cortez", link: "/" , newTab: false},
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" , newTab: false},
            { name: "FAQs", link: "/" , newTab: false},
            { name: "How it works", link: "/" , newTab: false},
            { name: "Privacy policy", link: "/" , newTab: false},
            { name: "Payment policy", link: "/" , newTab: false},
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    // { src: facebook, alt: "facebook logo" },
    // { src: twitter, alt: "twitter logo" },
    { src: x, alt: "X logo", url: 'https://x.com/nforshifu234dev/' },
    { src: instagram, alt: "instagram logo", url: 'https://instagram.com/nforshifu234dev/' },
    { src: github, alt: "GitHub logo", url: 'https://github.com/nforshifu234dev/' },
    { src: linkedIn, alt: "LinkedIn logo", url: 'https://linkedin.com/in/nforshifu234dev/' },
];
