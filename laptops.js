var product = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "image": "logo.jpg"
}, {
    "id": 1,
    "title": "Apple Macbook Pro 16 M4 Max Chip Z1FT000LG 16 Core CPU 40 Core GPU 64GB RAM 2TB SSD",
    "price": "Rs. 1,699,999",
    "description": "The Apple MacBook Pro 16-inch with the M4 Max chip, featuring a 16-core CPU, 40-core GPU, 64GB RAM, and a 2TB SSD, is a high-performance laptop designed for professionals requiring substantial computing power.",
    "brand": "Apple",
    "image": "laptops/laptop1.webp"
}, {
    "id": 2,
    "title": "Apple MacBook Air 15 MRYP3 M3 Chip 8 Core CPU 10 Core GPU 8GB RAM 256GB SSD Silver",
    "price": "Rs. 549,999",
    "description": "The Apple MacBook Air 15 with the M3 Chip features an 8-core CPU, 10-core GPU, 8GB RAM, and 256GB SSD. Designed for portability and performance, it is ideal for everyday productivity and lightweight tasks.",
    "brand": "Apple",
    "image": "laptops/laptop2.webp"
}, {
    "id": 3,
    "title": "Apple MacBook Pro 16 M4 Max Chip MX303 14 Core CPU 32 Core GPU 36GB RAM 1TB SSD Space Black",
    "price": "Rs. 1,040,000",
    "description": "The Apple MacBook Pro 16-inch with the M4 Max Chip includes a 14-core CPU, 32-core GPU, 36GB RAM, and 1TB SSD. Built for demanding professionals, it delivers exceptional performance for creative and technical work.",
    "brand": "Apple",
    "image": "laptops/laptop3.webp"
}, {
    "title": "Apple MacBook Air 13 MRXT3 M3 Chip 8 Core CPU 8 Core GPU 8GB RAM 256GB SSD Starlight",
    "price": "Rs. 499,999",
    "description": "The Apple MacBook Air 13 with the M3 Chip, featuring an 8-core CPU, 8-core GPU, 8GB RAM, and 256GB SSD, is a lightweight laptop perfect for daily tasks and a seamless user experience.",
    "brand": "Apple",
    "image": "laptops/laptop4.webp"
}, {
    "id": 5,
    "title": "Apple MacBook Pro 14 M4 Chip MCX14 10 Core CPU 10 Core GPU 24GB RAM 1TB SSD Silver",
    "price": "Rs. 849,999",
    "description": "The Apple MacBook Pro 14-inch with the M4 Chip includes a 10-core CPU, 10-core GPU, 24GB RAM, and 1TB SSD. It combines power and portability for professionals on the go.",
    "brand": "Apple",
    "image": "laptops/laptop5.webp"
}, {
    "id": 6,
    "title": "Samsung Galaxy Book 3 Ultra Core i7 13th Generation 16GB RAM 1TB SSD Touch Windows 11",
    "description": "The Samsung Galaxy Book 3 Ultra with a 13th Generation Core i7 processor, 16GB RAM, 1TB SSD, and Touchscreen is a versatile laptop for multitasking, productivity, and entertainment.",
    "brand": "Samsung",
    "price": "Rs. 479,999",
    "image": "laptops/laptop7.webp",
}, {
    "id": 7,
    "title": "Apple MacBook Pro 16 M3 Max Z1F001AF 16 Core CPU 40 Core GPU 64GB RAM 1TB SSD Space Black",
    "description": "The Apple MacBook Pro 16-inch with the M3 Max Chip features a 16-core CPU, 40-core GPU, 64GB RAM, and 1TB SSD, delivering cutting-edge performance for demanding creative workflows.",
    "brand": "Apple",
    "price": "Rs. 1,310,000",
    "image": "laptops/laptop6.webp"
},{
    "id": 8,
    "title": "Samsung Galaxy Book 4 Ultra 16 Core Ultra 7 32GB RAM 1TB SSD 6GB RTX 4050 Touch Windows 11",
    "price": "Rs. 699,999",
    "description": "The Samsung Galaxy Book 4 Ultra with a 16-core Ultra 7 processor, 32GB RAM, 1TB SSD, and a 6GB RTX 4050 GPU offers exceptional performance and graphics capability for demanding tasks and gaming.",
    "brand": "Samsung",
    "image": "laptops/laptop8.webp"
}]


for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "PKR " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("price2").innerHTML = "PKR " + product[a].price
        document.getElementById("desc2").innerHTML = product[a].description
        document.getElementById("brand2").innerHTML = product[a].brand
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""

    }
}