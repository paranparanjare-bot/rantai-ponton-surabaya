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
        image: 'assets/images/products/chain-heavy-20mm.webp',
        alt: 'Plat rantai ponton hitam bertumpuk - Rantai Ponton Heavy Duty 20mm, Steven Rantai Ponton',
        badge: 'Best Seller',
        specs: {
            'Diameter': '20mm',
            'Material': 'Baja Galvanis',
            'Beban Maks': '5000 kg',
            'Panjang': 'Custom'
        },
    },
    {
        id: 2,
        category: 'chain',
        categoryName: 'Rantai Ponton',
        title: 'Rantai Ponton Medium 16mm',
        description: 'Rantai standar untuk ponton menengah dengan ketahanan optimal terhadap air laut.',
        image: 'assets/images/products/chain-medium-16mm.webp',
        alt: 'Plat rantai ponton berlubang tersusun rapi - Rantai Ponton Medium 16mm, Steven Rantai Ponton',
        badge: 'Ready Stock',
        specs: {
            'Diameter': '16mm',
            'Material': 'Baja Galvanis',
            'Beban Maks': '3500 kg',
            'Panjang': 'Custom'
        },
    },
    {
        id: 3,
        category: 'chain',
        categoryName: 'Rantai Ponton',
        title: 'Rantai Ponton Light 13mm',
        description: 'Rantai ringan untuk ponton kecil dan boat dock dengan daya tahan tinggi.',
        image: 'assets/images/products/chain-light-13mm.webp',
        alt: 'Rantai panjang terhampar di lantai pabrik - Rantai Ponton Light 13mm, Steven Rantai Ponton',
        badge: 'Ekonomis',
        specs: {
            'Diameter': '13mm',
            'Material': 'Baja Galvanis',
            'Beban Maks': '2000 kg',
            'Panjang': 'Custom'
        },
    },
    {
        id: 4,
        category: 'excavator',
        categoryName: 'Excavator Amphibi',
        title: 'Ponton Excavator 7x14m',
        description: 'Platform ponton ukuran besar untuk excavator hingga 20 ton, dilengkapi sistem anchoring.',
        image: 'assets/images/products/pontoon-excavator-7x14.webp',
        alt: 'Kolase komponen rantai ponton - Ponton Excavator 7x14m, Steven Rantai Ponton',
        badge: 'Premium',
        specs: {
            'Ukuran': '7m x 14m',
            'Kapasitas': '20 ton',
            'Material': 'Steel Frame',
            'Sistem': 'Chain Anchoring'
        },
    },
    {
        id: 5,
        category: 'excavator',
        categoryName: 'Excavator Amphibi',
        title: 'Ponton Excavator 7x10m',
        description: 'Platform ponton standar untuk excavator menengah, ideal untuk normalisasi sungai.',
        image: 'assets/images/products/pontoon-excavator-7x10.webp',
        alt: 'Mata rantai dan roller berjajar di lantai pabrik - Ponton Excavator 7x10m, Steven Rantai Ponton',
        badge: 'Best Seller',
        specs: {
            'Ukuran': '7m x 10m',
            'Kapasitas': '15 ton',
            'Material': 'Steel Frame',
            'Sistem': 'Chain Anchoring'
        },
    },
    {
        id: 6,
        category: 'excavator',
        categoryName: 'Excavator Amphibi',
        title: 'Excavator Long Arm Amphibi',
        description: 'Excavator amphibi dengan long arm untuk pengerukan dalam dan jangkauan luas.',
        image: 'assets/images/products/excavator-long-arm.webp',
        alt: 'Kolase komponen rantai: roller, pin, bushing, dan plat rantai - Excavator Long Arm Amphibi, Steven Rantai Ponton',
        badge: 'New',
        specs: {
            'Jangkauan': '18 meter',
            'Bucket': '0.8 m³',
            'Engine': '120 HP',
            'Sistem': 'Full Amphibious'
        },
    },
    {
        id: 7,
        category: 'parts',
        categoryName: 'Suku Cadang',
        title: 'Track Pad Rubber Tractor',
        description: 'Karet track pad untuk tractor roda 4, tahan aus dan meningkatkan traksi.',
        image: 'assets/images/products/track-pad-rubber.webp',
        alt: 'Plat rantai datar berlabel K-type Attachment - Track Pad Rubber Tractor, Steven Rantai Ponton',
        badge: 'Ready Stock',
        specs: {
            'Kompatibel': 'R4 Tractor',
            'Material': 'Natural Rubber',
            'Ketebalan': '25mm',
            'Warranty': '6 bulan'
        },
    },
    {
        id: 8,
        category: 'parts',
        categoryName: 'Suku Cadang',
        title: 'Shackle Connector 25mm',
        description: 'Penghubung rantai berkualitas tinggi untuk sistem anchoring ponton.',
        image: 'assets/images/products/shackle-25mm.webp',
        alt: 'Pin rantai dalam kemasan plastik - Shackle Connector 25mm, Steven Rantai Ponton',
        badge: 'Ready Stock',
        specs: {
            'Ukuran': '25mm',
            'Material': 'Stainless Steel',
            'Beban Kerja': '6 ton',
            'Standard': 'ISO 2415'
        },
    },
    {
        id: 9,
        category: 'parts',
        categoryName: 'Suku Cadang',
        title: 'Concrete Anchor 1000kg',
        description: 'Anchor beton untuk sistem mooring ponton dengan daya tahan ekstrem.',
        image: 'assets/images/products/concrete-anchor-1000kg.webp',
        alt: 'Cincin bushing dalam peti kayu - Concrete Anchor 1000kg, Steven Rantai Ponton',
        badge: 'Heavy Duty',
        specs: {
            'Berat': '1000 kg',
            'Dimensi': '1000x1200x360mm',
            'Loop': '2 x 18mm',
            'Aplikasi': 'Boat Pontoon'
        },
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
        image: 'assets/images/portfolio/brantas-river.webp',
        alt: 'Mata rantai gelap close-up - proyek Normalisasi Sungai Brantas, Surabaya',
    },
    {
        id: 2,
        category: 'marine',
        title: 'Dermaga Apung Pelabuhan Tanjung Perak',
        description: 'Instalasi rantai ponton heavy duty untuk dermaga apung kapasitas 50 ton.',
        location: 'Surabaya, Jawa Timur',
        year: '2023',
        image: 'assets/images/portfolio/tanjung-perak.webp',
        alt: 'Pin rantai dalam kemasan plastik - proyek Dermaga Apung Pelabuhan Tanjung Perak, Surabaya',
    },
    {
        id: 3,
        category: 'infrastructure',
        title: 'Jembatan Ponton Mahakam',
        description: 'Pembuatan dan instalasi jembatan ponton permanen dengan sistem chain anchoring.',
        location: 'Samarinda, Kalimantan Timur',
        year: '2024',
        image: 'assets/images/portfolio/mahakam-bridge.webp',
        alt: 'Tumpukan plat rantai di lantai pabrik - proyek Jembatan Ponton Mahakam, Samarinda',
    },
    {
        id: 4,
        category: 'mining',
        title: 'Pengerukan Kolam Retensi',
        description: 'Penyediaan excavator amphibi untuk proyek pengerukan kolam tambang batubara.',
        location: 'Sangatta, Kalimantan Timur',
        year: '2023',
        image: 'assets/images/portfolio/retention-pond.webp',
        alt: 'Tumpukan bushing dan roller logam besar - proyek Pengerukan Kolam Retensi, Sangatta',
    },
    {
        id: 5,
        category: 'marine',
        title: 'Marina Apung Benoa',
        description: 'Sistem rantai ponton dan mooring untuk marina yacht dengan 20 berth.',
        location: 'Benoa, Bali',
        year: '2025',
        image: 'assets/images/portfolio/benoa-marina.webp',
        alt: 'Cincin bushing perak bertumpuk dilihat dari atas - proyek Marina Apung Benoa, Bali',
    },
    {
        id: 6,
        category: 'infrastructure',
        title: 'Kanal Drainase Kota',
        description: 'Normalisasi kanal menggunakan excavator long arm amphibi.',
        location: 'Semarang, Jawa Tengah',
        year: '2024',
        image: 'assets/images/portfolio/canal-drainage.webp',
        alt: 'Komponen rantai dalam peti kayu di lantai pabrik - proyek Kanal Drainase Kota, Semarang',
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
