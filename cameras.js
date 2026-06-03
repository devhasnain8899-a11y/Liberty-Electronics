var product = [
    {
        "id": 0,
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "image": "logo.jpg"
    
    },
    {
        "id": 1,
        "title": "Sony FX3 Full-Frame Cinema Camera",
        "price": "Rs. 1,049,999",
        "description": "The Sony FX3 is a compact, full-frame cinema camera blending cinematic performance with portability. It features a 10.2MP sensor for stunning 4K video up to 120fps, S-Cinetone color science, advanced autofocus, and a rugged, lightweight design. Ideal for filmmakers, it offers pro-level connectivity, built-in active cooling, and an included XLR handle for superior audio capture.",
        "brand": "Sony",
        "image": "cameras/camera1.webp"
    },
    {
        "id": 2,
        "title": "Sony FX30 Digital Cinema Camera",
        "price": "Rs. 879,999",
        "description": "The Sony FX30 is a compact cinema camera offering superb 4K Super 35mm performance, S-Cinetone color science, advanced autofocus, and robust connectivity. Ideal for filmmakers seeking high-quality video in a lightweight body.",
        "brand": "Sony",
        "image": "cameras/camera2.webp"
    },
    {
        "id": 3,
        "title": "Nikon Coolpix A100",
        "price": "Rs. 19,999",
        "description": "The Nikon Coolpix A100 is a sleek, lightweight compact camera featuring a 20.1MP sensor, 5x optical zoom, and easy-to-use functions. Perfect for everyday photography with stunning clarity.",
        "brand": "Nikon",
        "image": "cameras/camera3.webp"
    },
    {
        "id": 4,
        "title": "Canon IXUS 285 HS Camera",
        "price": "Rs. 24,999",
        "description": "The Canon IXUS 285 HS is a stylish, compact camera with a 20.2MP sensor, 12x optical zoom, and Wi-Fi connectivity. Ideal for capturing high-quality photos and videos on the go.",
        "brand": "Canon",
        "image": "cameras/camera4.webp"
    },
    {
        "id": 5,
        "title": "Canon EOS 90D with 18-135mm Lens Kit",
        "price": "Rs. 234,999",
        "description": "The Canon EOS 90D features a 32.5MP APS-C sensor, advanced autofocus, 4K video recording, and comes with an 18-135mm lens kit. Perfect for versatile photography and video shooting.",
        "brand": "Canon",
        "image": "cameras/camera5.webp"
    },
    {
        "id": 6,
        "title": "Nikon D3400 Kit 18-55mm VR",
        "price": "Rs. 89,999",
        "description": "The Nikon D3400 is a beginner-friendly DSLR with a 24.2MP sensor, EXPEED 4 processor, and SnapBridge connectivity. Includes an 18-55mm VR lens for everyday photography.",
        "brand": "Nikon",
        "image": "cameras/camera6.webp"
    },
    {
        "id": 7,
        "title": "Canon Eos 200D Mark II 18-55mm DSLR Camera",
        "price": "Rs. 149,999",
        "description": "The Canon Eos 200D Mark II features a 24.1MP sensor, Dual Pixel autofocus, 4K video, and intuitive controls. Comes with an 18-55mm lens, making it perfect for aspiring photographers.",
        "brand": "Canon",
        "image": "cameras/camera7.webp"
    },
    {
        "id": 8,
        "title": "Nikon D5300 18-55mm",
        "price": "Rs. 94,999",
        "description": "The Nikon D5300 is a versatile DSLR with a 24.2MP sensor, built-in GPS, Wi-Fi, and an 18-55mm lens. Great for photographers looking for advanced features in a compact body.",
        "brand": "Nikon",
        "image": "cameras/camera8.webp"
    },
    {
        "id": 9,
        "title": "Nikon D5600 18-55mm Kit",
        "price": "Rs. 114,999",
        "description": "The Nikon D5600 features a 24.2MP sensor, vari-angle touchscreen, SnapBridge connectivity, and comes with an 18-55mm lens. Ideal for dynamic and creative photography.",
        "brand": "Nikon",
        "image": "cameras/camera9.webp"
    },
    {
        "id": 10,
        "title": "Canon 3000D DSLR Camera with 18-55mm DC III Lens",
        "price": "Rs. 44,999",
        "description": "The Canon 3000D is an entry-level DSLR with an 18MP sensor and simple controls, making it perfect for beginners. Comes with an 18-55mm DC III lens.",
        "brand": "Canon",
        "image": "cameras/camera10.webp"
    },
    {
        "id": 11,
        "title": "Nikon D5600 18-55mm Kit",
        "price": "Rs. 114,999",
        "description": "The Nikon D5600 features a 24.2MP sensor, vari-angle touchscreen, SnapBridge connectivity, and comes with an 18-55mm lens. Ideal for dynamic and creative photography.",
        "brand": "Nikon",
        "image": "cameras/camera11.webp"
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