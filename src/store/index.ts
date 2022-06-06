import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
