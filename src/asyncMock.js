const products = [
    {
        id: 1,
        name: 'Mother ASUS PRIMER A520M-K AM4',
        price: 15000,
        category: 'mother',
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20551_Mother_ASUS_PRIME_A520M-K_AM4_f5d89e00-grn.jpg',
        stock: 20,
        description: 'descripcion mother',

    },

    {
    id: 2,
    name: 'Teclado Kumara',
    price: 15000,
    category: 'teclado',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20551_Mother_ASUS_PRIME_A520M-K_AM4_f5d89e00-grn.jpg',
    stock: 20,
    description: 'descripcion teclado',
    },

    {
    id: 3,
    name: 'Monitor LG 4k',
    price: 15000,
    category: 'monitor',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20551_Mother_ASUS_PRIME_A520M-K_AM4_f5d89e00-grn.jpg',
    stock: 20,
    description: 'descripcion monitor',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
