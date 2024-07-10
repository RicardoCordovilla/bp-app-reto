import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import * as SecureStore from 'expo-secure-store';
import productsExample from '../fetch/products';

const globalStore = (set, get) => ({
    productStore: {
        id: 0,
        name: '',
        description: '',
        logo: '',
        date_release: '',
        date_revision: ''
    },
    setProductStore: (product) => set({ productStore: product }),
    clearProductStore: () => set({ productStore: { id: 0, name: '', description: '', logo: '', date_release: '', date_revision: '' } })
})

export const useGlobalStore = create(globalStore)

const productsStore = (set, get) => ({
    productsStore: [],
    getProdutById: (id) => get().productsStore.find(product => product.id === id),
    setProductsStore: (products) => set({ productsStore: products }),
    addProduct: (product) => set({ productsStore: [...get().productsStore, product] }),
    removeProduct: (id) => set({ productsStore: get().productsStore.filter(product => product.id !== id) }),
    updateProduct: (product) => set({ productsStore: get().productsStore.map(p => p.id === product.id ? product : p) }),
    getProduct: (id) => get().productsStore.find(product => product.id === id),
    clearProducts: () => set({ productsStore: [] })
})

const productsStorePersisted = persist(
    productsStore,
    {
        name: 'products-store',
        storage: createJSONStorage(SecureStore)
    }
)

export const useProductsStore = create(productsStore)