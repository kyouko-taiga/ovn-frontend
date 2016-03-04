import assign from 'object-assign'
import uuid from 'node-uuid'

import AppDispatcher from '../dispatchers/AppDispatcher'


export function createScene(data) {
    const uid = uuid.v4()
    AppDispatcher.dispatch({
        actionType: 'CREATE_SCENE',
        data: assign(data, {uid: uid})
    })
    return uid
}


export function updateScene(uid, data) {
    AppDispatcher.dispatch({
        actionType: 'UPDATE_SCENE',
        uid: uid,
        data: data
    })
}


export function deleteScene(uid) {
    AppDispatcher.dispatch({
        actionType: 'DELETE_SCENE',
        uid: uid
    })
}


export function createItem(data) {
    const uid = uuid.v4()
    AppDispatcher.dispatch({
        actionType: 'CREATE_SCENE_ITEM',
        data: assign(data, {uid: uid})
    })
    return uid
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
