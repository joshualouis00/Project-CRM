import type { TranslationMessages } from 'react-admin';
import englishMessages from 'ra-language-english';

const indonesianMessages: TranslationMessages = {
    ...englishMessages,

    // ra: {
    //     ...englishMessages.ra,
    //     action: {
    //         ...englishMessages.ra.action,
    //         delete: 'Hapus',
    //         edit: 'Ubah',
    //         save: 'Simpan',
    //         cancel: 'Batal',
    //         create: 'Tambah',
    //     },
    //     page: {
    //         ...englishMessages.ra.page,
    //         list: 'Daftar',
    //         edit: 'Edit',
    //         create: 'Tambah',
    //     },
    //     navigation: {
    //         ...englishMessages.ra.navigation,
    //         no_results: 'Tidak ada hasil',
    //     },
    // },

    pos: {
        search: 'Cari',
        configuration: 'Konfigurasi',
        language: 'Bahasa',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Pendapatan Bulanan',
            month_history: 'Pendapatan 30 Hari',
            new_orders: 'Pesanan Baru',
            pending_reviews: 'Menunggu Keputusan',
            all_reviews: 'Lihat semua ulasan',
            new_customers: 'Pelanggan Baru',
            all_customers: 'Lihat semua pelanggan',
            pending_orders: 'Pesanan Tertunda',
            order: {
                items: 'by %{customer_name}, satu barang |||| oleh %{customer_name}, %{nb_items} barang',
            },
        },
        menu: {
            sales: 'Penjualan',
            catalog: 'Katalog',
            customers: 'Pelanggan',
        },
        events: {
            review: {
                title: 'Ulasan yang diposting di "%{product}"',
            },
            order: {
                title: 'Memesan 1 poster |||| Dipesan %{smart_count} poster',
            },
        },
    },

    resources: {
        customers: {
            name: 'Akun',
            fields: {
                orders: 'Pesanan',
                first_seen: 'Pertama kali terlihat',
                full_name: 'Nama',
                groups: 'Segmen',
                last_seen: 'Terakhir terlihat',
                last_seen_gte: 'Dikunjungi Sejak',
                name: 'Nama',
                total_spent: 'Jumlah yang dibelanjakan',
                password: 'kata sandi',
                confirm_password: 'Konfirmasikan kata sandi',
                stateAbbr: 'Negara',
            },
            filters: {
                last_visited: 'Terakhir dikunjungi',
                today: 'Hari ini',
                this_week: 'Minggu ini',
                last_week: 'Minggu terakhir',
                this_month: 'Bulan ini',
                last_month: 'Bulan terakhir',
                earlier: 'Lebih awal',
                has_ordered: 'Telah memesan',
                has_newsletter: 'Memiliki buletin',
                group: 'Segmen',
            },
            fieldGroups: {
                identity: 'Identitas',
                address: 'Alamat',
                stats: 'Statistik',
                history: 'Sejarah',
                password: 'Kata sandi',
                change_password: 'Ubah Kata sandi',
            },
            page: {
                delete: 'Hapus pelanggan',
            },
            errors: {
                password_mismatch:
                    'Konfirmasi kata sandi tidak sama dengan kata sandi.',
            },
            notifications: {
                created:
                    'Pelanggan dibuat |||| %{smart_count} Pelanggan dibuat',
                updated:
                    'Pelanggan diperbarui |||| %{smart_count} Pelanggan diperbarui',
                deleted:
                    'Pelanggan dihapus |||| %{smart_count} Pelanggan dihapus',
            },
        },
        orders: {
            name: 'Memesan |||| Pesanan',
            amount: '1 Memesan |||| %{smart_count} Pesanan',
            title: 'Memesan %{reference}',
            fields: {
                basket: {
                    delivery: 'Pengiriman',
                    reference: 'Referensi',
                    quantity: 'Kuantitas',
                    sum: 'Jumlah',
                    tax_rate: 'Tarif Pajak',
                    taxes: 'Pajak',
                    total: 'Total',
                    unit_price: 'Harga satuan',
                },
                address: 'Alamat',
                customer_id: 'Pelanggan',
                date_gte: 'Lulus Sejak',
                date_lte: 'Lulus Sebelumnya',
                nb_items: 'Nb Barang',
                total_gte: 'Jumlah minimal',
                status: 'Status',
                returned: 'Kembali',
            },
            section: {
                order: 'Pesanan',
                customer: 'Pelanggan',
                shipping_address: 'Alamat Pengiriman',
                items: 'Item',
                total: 'Total',
            },
            notifications: {
                created: 'Pesanan berhasil dibuat |||| %{smart_count} pesanan berhasil dibuat',
                updated: 'Pesanan berhasil diperbarui |||| %{smart_count} pesanan berhasil diperbarui',
                deleted: 'Pesanan berhasil dihapus |||| %{smart_count} Pesanan berhasil dihapus',
            },
        },
        invoices: {
            name: 'Faktur |||| Faktur',
            fields: {
                date: 'Tanggal Faktur',
                customer_id: 'Pelanggan',
                order_id: 'Pesanan',
                date_gte: 'Lewat Sejak',
                date_lte: 'Lewat Sebelum',
                total_gte: 'Jumlah Minimum',
                address: 'Alamat',
            },
            notifications: {
                created: 'Faktur berhasil dibuat |||| %{smart_count} Faktur berhasil dibuat',
                updated: 'Faktur berhasil diperbaharui |||| %{smart_count} Faktur berhasil diperbaharui',
                deleted: 'Faktur berhasil dihapus |||| %{smart_count} Faktur berhasil dihapus',
            },
        },
        products: {
            name: 'Poster |||| Poster',
            fields: {
                category_id: 'Kategori',
                height_gte: 'Tinggi Minimum',
                height_lte: 'Tinggi Maksimum',
                height: 'Tinggi',
                image: 'Gambar',
                price: 'Harga',
                reference: 'Referensi',
                sales: 'Penjualan',
                stock_lte: 'Stok Rendah',
                stock: 'Stok',
                thumbnail: 'Thumbnail',
                width_gte: 'Lebar Minimum',
                width_lte: 'Lebar Maksimum',
                width: 'Lebar',
            },
            tabs: {
                image: 'Gambar',
                details: 'Detail',
                description: 'Deskripsi',
                reviews: 'Ulasan',
            },
            filters: {
                categories: 'Kategori',
                stock: 'Stok',
                no_stock: 'Stok Habis',
                low_stock: '1 - 9 item',
                average_stock: '10 - 49 item',
                enough_stock: '50 item & lebih',
                sales: 'Penjualan',
                best_sellers: 'Terlaris',
                average_sellers: 'Sedang',
                low_sellers: 'Rendah',
                never_sold: 'Belum pernah terjual',
            },
            notifications: {
                created: 'Poster berhasil di buat |||| %{smart_count} poster berhasil di buat',
                updated: 'Poster berhasil di perbaharui |||| %{smart_count} poster berhasil di perbaharui',
                deleted: 'Poster berhasil di hapus |||| %{smart_count} poster berhasil di hapus',
            },
        },
        categories: {
            name: 'Kategori |||| Kategori',
            fields: {
                products: 'Produk',
            },
            notifications: {
                created:
                    'Kategori berhasil dibuat |||| %{smart_count} kategori berhasil dibuat',
                updated:
                    'Kategori berhasil diperbarui |||| %{smart_count} kategori berhasil diperbarui',
                deleted:
                    'Kategori berhasil dihapus |||| %{smart_count} kategori berhasil dihapus',
            },
        },
        reviews: {
            name: 'Ulasan |||| Ulasan',
            amount: '1 ulasan |||| %{smart_count} ulasan',
            relative_to_poster: 'Ulasan pada poster',
            detail: 'Detail ulasan',
            fields: {
                customer_id: 'Pelanggan',
                order_id: 'Pesanan',
                product_id: 'Produk',
                date_gte: 'Diposting sejak',
                date_lte: 'Diposting sebelum',
                date: 'Tanggal',
                comment: 'Komentar',
                rating: 'Penilaian',
            },
            action: {
                accept: 'Setujui',
                reject: 'Tolak',
            },
            notifications: {
                created: 'Ulasan berhasil dibuat |||| %{smart_count} ulasan berhasil dibuat',
                updated: 'Ulasan berhasil diperbarui |||| %{smart_count} ulasan berhasil diperbarui',
                deleted: 'Ulasan berhasil dihapus |||| %{smart_count} ulasan berhasil dihapus',
                approved_success: 'Ulasan disetujui',
                approved_error: 'Error: Ulasan tidak disetujui',
                rejected_success: 'Ulasan ditolak',
                rejected_error: 'Error: Ulasan tidak ditolak',
            },
        },
        segments: {
            name: 'Segmen |||| Segmen',
            fields: {
                customers: 'Pelanggan',
                name: 'Nama',
            },
            data: {
                compulsive: 'Kompulsif',
                collector: 'Kolektor',
                ordered_once: 'Pesan sekali',
                regular: 'Pelanggan tetap',
                returns: 'Sering retur',
                reviewer: 'Pemberi ulasan',
            },
        },
    },
};

export default indonesianMessages;