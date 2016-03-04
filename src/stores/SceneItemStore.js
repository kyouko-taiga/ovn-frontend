import assign from 'object-assign'

import BaseStore from './BaseStore'


const ITEMS = {
    'game-0.scene-0.item-1': {
        uid: 'game-0.scene-0.item-1',
        scene_uid: 'game-0.scene-0',
        type: 'sound',
        sound: 'room.mp3',
        volume: 100,
        repeat: false
    },
    'game-0.scene-0.item-2': {
        uid: 'game-0.scene-0.item-2',
        scene_uid: 'game-0.scene-0',
        type: 'character',
        action: 'show',
        character: 'karen',
        state: 'default',
        position: 'right'
    },
    'game-0.scene-0.item-3': {
        uid: 'game-0.scene-0.item-3',
        scene_uid: 'game-0.scene-0',
        type: 'character',
        action: 'show',
        character: 'tsukihi',
        state: 'default',
        position: 'left'
    },
    'game-0.scene-0.item-4': {
        uid: 'game-0.scene-0.item-4',
        scene_uid: 'game-0.scene-0',
        type: 'dialog',
        character: 'karen',
        text: (
            "Midnight, on the bridge. Come alone." +
            "I'll find her and bring her home, I promise."
        )
    },
    'game-0.scene-0.item-5': {
        uid: 'game-0.scene-0.item-5',
        scene_uid: 'game-0.scene-0',
        type: 'dialog',
        character: 'tsukihi',
        text: "Am I supposed to be scared now?"
    }
}


class SceneItemStore extends BaseStore {
    constructor() {
        super()
        this.subscribe(() => this._registerToActions.bind(this))

        this._items = ITEMS
    }

    get(uid) {
        return this._items.hasOwnProperty(uid)
            ? this._items[uid]
            : null
    }

    _registerToActions(action) {
        switch(action.actionType) {
        case 'CREATE_SCENE_ITEM':
            this._items[action.data.uid] = action.data
            this.emitChange()
            break

        case 'UPDATE_SCENE_ITEM':
            assign(this._items[action.uid], action.data)
            this.emitChange()
            break

        case 'DELETE_SCENE_ITEM':
            delete this._items[action.uid]
            this.emitChange()
            break

        case 'DELETE_SCENE':
            for (let item_uid in this._items) {
                if (this._items[item_uid].scene_uid == action.uid) {
                    delete this._items[item_uid]
                }
            }
            this.emitChange()
            break

        default:
            break
        }
    }
}


export default new SceneItemStore()
