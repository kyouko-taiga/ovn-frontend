import BaseStore from './BaseStore'


const ITEMS = {
    'game-0.scene-0.item-0': {
        uid: 'game-0.scene-0.item-0',
        scene_uid: 'game-0.scene-0',
        type: 'image',
        name: 'Room background'
    },
    'game-0.scene-0.item-1': {
        uid: 'game-0.scene-0.item-1',
        scene_uid: 'game-0.scene-0',
        type: 'sound',
        name: 'Room music'
    },
    'game-0.scene-0.item-2': {
        uid: 'game-0.scene-0.item-2',
        scene_uid: 'game-0.scene-0',
        type: 'event',
        action: 'add character',
        character: {
            name: 'Karen',
            state: 'normal'
        }
    },
    'game-0.scene-0.item-3': {
        uid: 'game-0.scene-0.item-3',
        scene_uid: 'game-0.scene-0',
        type: 'event',
        action: 'add character',
        character: {
            name: 'Tsukihi',
            state: 'normal'
        }
    },
    'game-0.scene-0.item-4': {
        uid: 'game-0.scene-0.item-4',
        scene_uid: 'game-0.scene-0',
        type: 'dialog',
        character: 'Karen',
        text: [
            "Midnight, on the bridge. Come alone.",
            "I'll find her and bring her home, I promise."
        ]
    },
    'game-0.scene-0.item-5': {
        uid: 'game-0.scene-0.item-5',
        scene_uid: 'game-0.scene-0',
        type: 'dialog',
        character: 'Tsukihi',
        text: [
            "Am I supposed to be scared now?"
        ]
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
        default:
            break
        }
    }
}


export default new SceneItemStore()
