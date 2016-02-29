import assign from 'object-assign'
import uuid from 'node-uuid'

import AppDispatcher from '../dispatchers/AppDispatcher'


export function createItem(data) {
    AppDispatcher.dispatch({
        actionType: 'CREATE_SCENE_ITEM',
        data: assign(data, {uid: uuid.v4()})
    })
}


export function updateItem(uid, data) {
    AppDispatcher.dispatch({
        actionType: 'UPDATE_SCENE_ITEM',
        uid: uid,
        data: data
    })
}


export function deleteItem(uid) {
    AppDispatcher.dispatch({
        actionType: 'DELETE_SCENE_ITEM',
        uid: uid
    })
}
