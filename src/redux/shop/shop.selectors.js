import {createSelector} from "reselect";
const selectShop = state=>state.shop;
export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectShopCollectionForCollectionOverview = createSelector(
    [selectShopCollections], 
    collections=>Object.keys(collections).map(collection=>collections[collection])
)
export const selectCollection = collectionUrlPrams=>createSelector(
    [selectShopCollections],
    collections=>collections[collectionUrlPrams] 
)