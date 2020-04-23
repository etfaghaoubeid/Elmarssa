import {createSelector} from "reselect";

const mapItemsId = {
    hats:1,
    jackets:2,
    sneakers:3,
    wonens:4,
    mens:5
}

const selectShop = state=>state.shop;
export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections
)
export const selectCollections = collectionId=>createSelector(
    [selectShopCollections],
    collections=>collections.find(collection=>collection.id===mapItemsId[collectionId] )
)