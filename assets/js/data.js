// ========================================
// Product Data
// ========================================

const productsData = [
    {
        id: 1,
        category: 'chain',
        categoryName: 'Rantai Ponton',
        title: 'Rantai Ponton Heavy Duty 20mm',
        description: 'Rantai ponton berkualitas tinggi dengan diameter 20mm, tahan korosi dan beban ekstrem.',
        image: 'assets/images/products/chain-heavy-20mm.jpg',
        badge: 'Best Seller',
        specs: {
            'Diameter': '20mm',
            'Material': 'Baja Galvanis',
            'Beban Maks': '5000 kg',
            'Panjang': 'Custom'
        },
        price: 'Rp 850.000',
        priceLabel: 'per meter'
    },
    {
        id: 2,
        category: 'chain',
        categoryName: 'Rantai Ponton',
        title: 'Rantai Ponton Medium 16mm',
        description: 'Rantai standar untuk ponton menengah dengan ketahanan optimal terhadap air laut.',
        image: 'assets/images/products/chain-medium-16mm.jpg',
        badge: 'Ready Stock',
        specs: {
            'Diameter': '16mm',
            'Material': 'Baja Galvanis',
            'Beban Maks': '3500 kg',
            'Panjang': 'Custom'
        },
        price: 'Rp 650.000',
        priceLabel: 'per meter'
    },
    {
        id: 3,
        category: 'chain',
        categoryName: 'Rantai Ponton',
        title: 'Rantai Ponton Light 13mm',
        description: 'Rantai ringan untuk ponton kecil dan boat dock dengan daya tahan tinggi.',
        image: 'assets/images/products/chain-light-13mm.jpg',
        badge: 'Ekonomis',
        specs: {
            'Diameter': '13mm',
            'Material': 'Baja Galvanis',
            'Beban Maks': '2000 kg',
            'Panjang': 'Custom'
        },
        price: 'Rp 450.000',
        priceLabel: 'per meter'
    },
    {
        id: 4,
        category: 'excavator',
        categoryName: 'Excavator Amphibi',
        title: 'Ponton Excavator 7x14m',
        description: 'Platform ponton ukuran besar untuk excavator hingga 20 ton, dilengkapi sistem anchoring.',
        image: 'assets/images/products/pontoon-excavator-7x14.jpg',
        badge: 'Premium',
        specs: {
            'Ukuran': '7m x 14m',
            'Kapasitas': '20 ton',
            'Material': 'Steel Frame',
            'Sistem': 'Chain Anchoring'
        },
        price: 'Rp 285.000.000',
        priceLabel: 'per unit'
    },
    {
        id: 5,
        category: 'excavator',
        categoryName: 'Excavator Amphibi',
        title: 'Ponton Excavator 7x10m',
        description: 'Platform ponton standar untuk excavator menengah, ideal untuk normalisasi sungai.',
        image: 'assets/images/products/pontoon-excavator-7x10.jpg',
        badge: 'Best Seller',
        specs: {
            'Ukuran': '7m x 10m',
            'Kapasitas': '15 ton',
            'Material': 'Steel Frame',
            'Sistem': 'Chain Anchoring'
        },
        price: 'Rp 195.000.000',
        priceLabel: 'per unit'
    },
    {
        id: 6,
        category: 'excavator',
        categoryName: 'Excavator Amphibi',
        title: 'Excavator Long Arm Amphibi',
        description: 'Excavator amphibi dengan long arm untuk pengerukan dalam dan jangkauan luas.',
        image: 'assets/images/products/excavator-long-arm.jpg',
        badge: 'New',
        specs: {
            'Jangkauan': '18 meter',
            'Bucket': '0.8 m³',
            'Engine': '120 HP',
            'Sistem': 'Full Amphibious'
        },
        price: 'Rp 1.850.000.000',
        priceLabel: 'per unit'
    },
    {
        id: 7,
        category: 'parts',
        categoryName: 'Suku Cadang',
        title: 'Track Pad Rubber Tractor',
        description: 'Karet track pad untuk tractor roda 4, tahan aus dan meningkatkan traksi.',
        image: 'assets/images/products/track-pad-rubber.jpg',
        badge: 'Ready Stock',
        specs: {
            'Kompatibel': 'R4 Tractor',
            'Material': 'Natural Rubber',
            'Ketebalan': '25mm',
            'Warranty': '6 bulan'
        },
        price: 'Rp 2.500.000',
        priceLabel: 'per set'
    },
    {
        id: 8,
        category: 'parts',
        categoryName: 'Suku Cadang',
        title: 'Shackle Connector 25mm',
        description: 'Penghubung rantai berkualitas tinggi untuk sistem anchoring ponton.',
        image: 'assets/images/products/shackle-25mm.jpg',
        badge: 'Ready Stock',
        specs: {
            'Ukuran': '25mm',
            'Material': 'Stainless Steel',
            'Beban Kerja': '6 ton',
            'Standard': 'ISO 2415'
        },
        price: 'Rp 175.000',
        priceLabel: 'per pcs'
    },
    {
        id: 9,
        category: 'parts',
        categoryName: 'Suku Cadang',
        title: 'Concrete Anchor 1000kg',
        description: 'Anchor beton untuk sistem mooring ponton dengan daya tahan ekstrem.',
        image: 'assets/images/products/concrete-anchor-1000kg.jpg',
        badge: 'Heavy Duty',
        specs: {
            'Berat': '1000 kg',
            'Dimensi': '1000x1200x360mm',
            'Loop': '2 x 18mm',
            'Aplikasi': 'Boat Pontoon'
        },
        price: 'Rp 3.250.000',
        priceLabel: 'per unit'
    }
];

// ========================================
// Portfolio Data
// ========================================

const portfolioData = [
    {
        id: 1,
        category: 'infrastructure',
        title: 'Normalisasi Sungai Brantas',
        description: 'Proyek pengerukan dan normalisasi sungai menggunakan excavator amphibi dengan ponton 7x14m.',
        location: 'Surabaya, Jawa Timur',
        year: '2024',
        image: 'assets/images/portfolio/brantas-river.jpg'
    },
    {
        id: 2,
        category: 'marine',
        title: 'Dermaga Apung Pelabuhan Tanjung Perak',
        description: 'Instalasi rantai ponton heavy duty untuk dermaga apung kapasitas 50 ton.',
        location: 'Surabaya, Jawa Timur',
        year: '2023',
        image: 'assets/images/portfolio/tanjung-perak.jpg'
    },
    {
        id: 3,
        category: 'infrastructure',
        title: 'Jembatan Ponton Mahakam',
        description: 'Pembuatan dan instalasi jembatan ponton permanen dengan sistem chain anchoring.',
        location: 'Samarinda, Kalimantan Timur',
        year: '2024',
        image: 'assets/images/portfolio/mahakam-bridge.jpg'
    },
    {
        id: 4,
        category: 'mining',
        title: 'Pengerukan Kolam Retensi',
        description: 'Penyediaan excavator amphibi untuk proyek pengerukan kolam tambang batubara.',
        location: 'Sangatta, Kalimantan Timur',
        year: '2023',
        image: 'assets/images/portfolio/retention-pond.jpg'
    },
    {
        id: 5,
        category: 'marine',
        title: 'Marina Apung Benoa',
        description: 'Sistem rantai ponton dan mooring untuk marina yacht dengan 20 berth.',
        location: 'Benoa, Bali',
        year: '2025',
        image: 'assets/images/portfolio/benoa-marina.jpg'
    },
    {
        id: 6,
        category: 'infrastructure',
        title: 'Kanal Drainase Kota',
        description: 'Normalisasi kanal menggunakan excavator long arm amphibi.',
        location: 'Semarang, Jawa Tengah',
        year: '2024',
        image: 'assets/images/portfolio/canal-drainage.jpg'
    }
];

// ========================================
// Testimonials Data
// ========================================

const testimonialsData = [
    {
        id: 1,
        name: 'Ir. Bambang Sutrisno',
        position: 'Project Manager',
        company: 'PT Waskita Karya',
        text: 'Kualitas rantai ponton dari Steven sangat memuaskan. Sudah 2 tahun berjalan tanpa masalah di proyek dermaga apung kami.',
        rating: 5,
        image: 'assets/images/testimonials/person-1.jpg'
    },
    {
        id: 2,
        name: 'Siti Nurhaliza',
        position: 'Site Engineer',
        company: 'PT Adhi Karya',
        text: 'Ponton excavator 7x14m sangat kokoh dan stabil. Tim teknis juga responsif dalam after sales support.',
        rating: 5,
        image: 'assets/images/testimonials/person-2.jpg'
    },
    {
        id: 3,
        name: 'Agus Setiawan',
        position: 'Owner',
        company: 'CV Mandiri Konstruksi',
        text: 'Harga kompetitif dengan kualitas premium. Rekomendasi untuk kontraktor yang butuh alat berat amphibi.',
        rating: 5,
        image: 'assets/images/testimonials/person-3.jpg'
    }
];

// Export untuk digunakan di main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productsData, portfolioData, testimonialsData };
}
