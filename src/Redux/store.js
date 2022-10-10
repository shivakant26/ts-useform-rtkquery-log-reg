import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { crudApi } from '../Services/myApi'

export const store = configureStore({
    reducer :{
        [crudApi.reducerPath]: crudApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crudApi.middleware),
})

setupListeners(store.dispatch)