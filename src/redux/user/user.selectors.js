import {createSelector} from "reselect"

const selectUser = state=>state.user;

export const currentUserSelector = createSelector(
    [selectUser],
    user=>user.currentUser
)