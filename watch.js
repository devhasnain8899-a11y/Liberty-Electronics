var product = [{
       "id": 0,
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "image": "logo.jpg"
    },
    {
        "id": 1,
        "title": "Apple Watch SE 44MM Aluminium Case 2024",
        "price": "Rs. 39,999",
        "description": "The Apple Watch SE 44MM offers an elegant aluminum case, with a large Retina display and fitness tracking features. Powered by the latest Apple chip, it provides seamless integration with the iPhone and offers essential health features like heart rate monitoring and crash detection.",
        "brand": "Apple",
        "image": "watches/watch1.webp"
    },
    {
        "id": 2,
        "title": "Apple Watch Ultra 2 49MM Black Titanium Case With Black Ocean Band",
        "price": "Rs. 89,999",
        "description": "The Apple Watch Ultra 2 comes with a robust 49MM black titanium case and a rugged Black Ocean Band. Designed for extreme sports and adventurers, it features enhanced GPS, a larger display, and upgraded health sensors like body temperature monitoring and advanced sleep tracking.",
        "brand": "Apple",
        "image": "watches/watch2.webp"
    },
    {
        "id": 3,
        "title": "Apple Watch Series 10 46mm Rose Gold Aluminum Case Sports Band",
        "price": "Rs. 121,999",
        "description": "The Apple Watch Series 10 in a 46MM rose gold aluminum case features an advanced edge-to-edge display and new health sensors. With the new S10 chip, enhanced performance, and extended battery life, it's the ultimate combination of style, technology, and fitness.",
        "brand": "Apple",
        "image": "watches/watch3.webp"
    },
    {
        "id": 4,
        "title": "Fitbit Charge 6 Fitness Tracker Smart Watch",
        "price": "Rs. 11,999",
        "description": "The Fitbit Charge 6 combines a sleek fitness tracker with essential smartwatch features. With heart rate monitoring, SpO2 tracking, sleep insights, and improved GPS, it's designed to keep you motivated and on track with your fitness goals.",
        "brand": "Fitbit",
        "image": "watches/watch5.webp"
    },
    {
        "id": 5,
        "title": "Fitbit Sense 2 Smart Watch",
        "price": "Rs. 22,999",
        "description": "The Fitbit Sense 2 offers advanced health tracking, including ECG, stress management, skin temperature tracking, and more. With a premium design, built-in GPS, and a 6+ day battery life, it’s the ultimate smartwatch for health-conscious users.",
        "brand": "Fitbit",
        "image": "watches/watch6.webp"
    },
    {
        "id": 6,
        "title": "Fitbit Charge 5",
        "price": "Rs. 14,999",
        "description": "The Fitbit Charge 5 brings you real-time health metrics like heart rate, ECG, SpO2, and sleep tracking. It features a bright AMOLED display, built-in GPS, and offers a 7-day battery life, making it a perfect companion for fitness enthusiasts.",
        "brand": "Fitbit",
        "image": "watches/watch7.webp"
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Watch 6 Classic 43mm R950",
        "price": "Rs. 29,999",
        "description": "The Samsung Galaxy Watch 6 Classic 43mm R950 offers a refined, classic design with a rotating bezel. It combines advanced health tracking features like ECG, blood oxygen monitoring, and fitness tracking with seamless Galaxy ecosystem integration.",
        "brand": "Samsung",
        "image": "watches/watch8.webp"
    },
    {
        "id": 8,
        "title": "Samsung Galaxy Watch 7 40mm L300",
        "price": "Rs. 33,999",
        "description": "The Samsung Galaxy Watch 7 40mm L300 is a compact, feature-packed smartwatch with advanced health and fitness features, including sleep monitoring, stress tracking, and heart rate analysis. It offers a modern design with better performance and longer battery life.",
        "brand": "Samsung",
        "image": "watches/watch9.webp"
    },
    {
        "id": 9,
        "title": "Samsung Galaxy Watch Ultra 47mm L705",
        "price": "Rs. 54,999",
        "description": "The Samsung Galaxy Watch Ultra 47mm L705 is built for durability and performance, with a rugged design and military-grade toughness. It features a large display, improved fitness tracking, and advanced navigation capabilities for outdoor adventures.",
        "brand": "Samsung",
        "image": "watches/watch10.webp"
    },
    {
        "id": 10,
        "title": "Samsung Galaxy Watch FE",
        "price": "Rs. 23,999",
        "description": "The Samsung Galaxy Watch FE offers essential smartwatch functions such as fitness tracking, heart rate monitoring, and stress management in an affordable, stylish package. With a bright AMOLED display and long-lasting battery, it’s designed for everyday use.",
        "brand": "Samsung",
        "image": "watches/watch11.webp"
    },
    {
        "id": 11,
        "title": "Apple Watch Series 10",
        "price": "Rs. 121,999",
        "description": "The Apple Watch Series 10 brings a refined design with a thinner, lighter profile and an edge-to-edge Retina display. It features advanced health sensors, including non-invasive glucose monitoring and improved fitness tracking. Powered by the new S10 chip, it offers faster performance, longer battery life, and 5G connectivity. With enhanced customization options and smarter AI features, the Series 10 is the ultimate wearable for health, productivity, and style.",
        "brand": "Apple",
        "image": "watches/watch1.webp"
    }
]


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