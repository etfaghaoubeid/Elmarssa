import {createSelector} from "reselect";
const selectShop = state=>state.shop;
export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectShopCollectionForCollectionOverview = createSelector(
    [selectShopCollections],  
    collections=>collections?Object.keys(collections).map(collection=>collections[collection]):[]
)
export const selectCollection = collectionUrlPrams=>createSelector(
    [selectShopCollections],
    collections=> collections? collections[collectionUrlPrams]:null 
)
export const selectFetching = createSelector(
    [selectShop],
    shop=>shop.fetching
)
export const selectIsCollectionLoaded = createSelector(
    [selectCollection],
    collections=>!!collections
)