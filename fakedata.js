const data = [
    { name: 'Ipad', img: 'https://i.ibb.co/JF4z0DH/ipad.png', description: 'The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.', price: '500$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Imac', img: 'https://i.ibb.co/JB9f4xQ/imac.png', description: 'The 24-inch iMac. 7 colors. Impossibly thin. 4.5K Retina display. The best camera, mics, and speakers. Supercharged by the M1 chip.', price: '2000$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Macbook Air', img: 'https://i.ibb.co/ykVzJtQ/macbookairagain.jpg', description: 'Powerfully portable. The incredible Apple M1 chip. Fast performance. All-day battery life. Touch ID. And brilliant Retina display.', price: '1500$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Apple TV', img: 'https://i.ibb.co/mJqJDzQ/apple-tv.png', description: 'Simply connect Apple TV, HomePod mini, and other accessories to experience a smarter, more convenient home that runs across your devices.', price: '1800$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Apple Watch', img: 'https://i.ibb.co/jGdJRVh/smartwatch-blue.png', description: 'Apple Watch is the ultimate device for a healthy life. Choose from a variety of models including the all-new Apple Watch Series 7.', price: '400$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Ipod', img: 'https://i.ibb.co/SVWm581/ipod.png', description: 'Now with the A10 Fusion chip, which powers augmented reality games and apps. Group FaceTime. And up to 256GB of storage.', price: '200$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'XDR Display', img: 'https://i.ibb.co/DL4qCPx/xdr-display.png', description: 'Pro Display XDR. A 32-inch Retina 6K display with extreme brightness, contrast, color, and HDR that transforms the way you work.', price: '1300$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Mac Mini', img: 'https://i.ibb.co/fncvm4P/macmini.png', description: 'The incredible Apple M1 chip, up to 3x faster CPU performance, up to 6x faster graphics, and all-flash SSD storage up to 2TB.', price: '2500$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Iphone 13', img: 'https://i.ibb.co/LR5THvq/iphone13converted.jpg', description: 'iPhone 13 Pro and 13 Pro Max. Huge camera upgrades. All-screen OLED display with ProMotion. Fastest iPhone chip ever. Breakthrough battery life.', price: '1500$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Airpods', img: 'https://i.ibb.co/0Qq33YN/airpods-white.png', description: 'AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings.', price: '250$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Dongle', img: 'https://i.ibb.co/YhkrvB6/dongle.png', description: 'Works with all devices that have a Lightning connector and support iOS 10 or later, including iPod touch, iPad, and iPhone.', price: '30$', quantity: '50', sold: '20', supplier: 'Apple Inc' },

    { name: 'Airtag', img: 'https://i.ibb.co/rGxBM62/airtag.png', description: 'AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack.', price: '30$', quantity: '50', sold: '20', supplier: 'Apple Inc' }

]




// ---------------------------------------

const kj =

    [
        { "name": "Ipad", "img": "https://i.ibb.co/JF4z0DH/ipad.png", "description": "The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.", "price": "500$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Imac", "img": "https://i.ibb.co/JB9f4xQ/imac.png", "description": "The 24-inch iMac. 7 colors. Impossibly thin. 4.5K Retina display. The best camera, mics, and speakers. Supercharged by the M1 chip.", "price": "2000$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Macbook Air", "img": "https://i.ibb.co/ykVzJtQ/macbookairagain.jpg", "description": "Powerfully portable. The incredible Apple M1 chip. Fast performance. All-day battery life. Touch ID. And brilliant Retina display.", "price": "1500$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Apple TV", "img": "https://i.ibb.co/KzBtkz7/apple-tv11.png", "description": "Simply connect Apple TV, HomePod mini, and other accessories to experience a smarter, more convenient home that runs across your devices.", "price": "1800$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Apple Watch", "img": "https://i.ibb.co/MPqt41w/smartwatch-blue-1.jpg", "description": "Apple Watch is the ultimate device for a healthy life. Choose from a variety of models including the all-new Apple Watch Series 7.", "price": "400$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Ipod", "img": "https://i.ibb.co/SVWm581/ipod.png", "description": "Now with the A10 Fusion chip, which powers augmented reality games and apps. Group FaceTime. And up to 256GB of storage.", "price": "200$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "XDR Display", "img": "https://i.ibb.co/J2s7Cdz/xdr-display.png", "description": "Pro Display XDR. A 32-inch Retina 6K display with extreme brightness, contrast, color, and HDR that transforms the way you work.", "price": "1300$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Mac Mini", "img": "https://i.ibb.co/d2R0nnf/macmini111.png", "description": "The incredible Apple M1 chip, up to 3x faster CPU performance, up to 6x faster graphics, and all-flash SSD storage up to 2TB.", "price": "2500$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Iphone 13", "img": "https://i.ibb.co/LR5THvq/iphone13converted.jpg", "description": "iPhone 13 Pro and 13 Pro Max. Huge camera upgrades. All-screen OLED display with ProMotion. Fastest iPhone chip ever. Breakthrough battery life.", "price": "1500$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Airpods", "img": "https://i.ibb.co/0Qq33YN/airpods-white.png", "description": "AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings.", "price": "250$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Dongle", "img": "https://i.ibb.co/KbxQMvR/dongle.jpg", "description": "Works with all devices that have a Lightning connector and support iOS 10 or later, including iPod touch, iPad, and iPhone.", "price": "30$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" },

        { "name": "Airtag", "img": "https://i.ibb.co/rGxBM62/airtag.png", "description": "AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack.", "price": "30$", "quantity": 50, "sold": 20, "supplier": "Apple Inc" }
    ]


const jj = [
    { "name": "Ipad", "img": "https://i.ibb.co/JF4z0DH/ipad.png", "description": "The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.", "price": "500$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Imac", "img": "https://i.ibb.co/JB9f4xQ/imac.png", "description": "The 24-inch iMac. 7 colors. Impossibly thin. 4.5K Retina display. The best camera, mics, and speakers. Supercharged by the M1 chip.", "price": "2000$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Macbook Air", "img": "https://i.ibb.co/ykVzJtQ/macbookairagain.jpg", "description": "Powerfully portable. The incredible Apple M1 chip. Fast performance. All-day battery life. Touch ID. And brilliant Retina display.", "price": "1500$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Apple TV", "img": "https://i.ibb.co/KzBtkz7/apple-tv11.png", "description": "Simply connect Apple TV, HomePod mini, and other accessories to experience a smarter, more convenient home that runs across your devices.", "price": "1800$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Apple Watch", "img": "https://i.ibb.co/MPqt41w/smartwatch-blue-1.jpg", "description": "Apple Watch is the ultimate device for a healthy life. Choose from a variety of models including the all-new Apple Watch Series 7.", "price": "400$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Ipod", "img": "https://i.ibb.co/SVWm581/ipod.png", "description": "Now with the A10 Fusion chip, which powers augmented reality games and apps. Group FaceTime. And up to 256GB of storage.", "price": "200$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "XDR Display", "img": "https://i.ibb.co/J2s7Cdz/xdr-display.png", "description": "Pro Display XDR. A 32-inch Retina 6K display with extreme brightness, contrast, color, and HDR that transforms the way you work.", "price": "1300$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Mac Mini", "img": "https://i.ibb.co/d2R0nnf/macmini111.png", "description": "The incredible Apple M1 chip, up to 3x faster CPU performance, up to 6x faster graphics, and all-flash SSD storage up to 2TB.", "price": "2500$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Iphone 13", "img": "https://i.ibb.co/LR5THvq/iphone13converted.jpg", "description": "iPhone 13 Pro and 13 Pro Max. Huge camera upgrades. All-screen OLED display with ProMotion. Fastest iPhone chip ever. Breakthrough battery life.", "price": "1500$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Airpods", "img": "https://i.ibb.co/0Qq33YN/airpods-white.png", "description": "AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings.", "price": "250$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Dongle", "img": "https://i.ibb.co/KbxQMvR/dongle.jpg", "description": "Works with all devices that have a Lightning connector and support iOS 10 or later, including iPod touch, iPad, and iPhone.", "price": "30$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" },

    { "name": "Airtag", "img": "https://i.ibb.co/rGxBM62/airtag.png", "description": "AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack.", "price": "30$", "quantity": "50", "sold": "20", "supplier": "Apple Inc" }
]