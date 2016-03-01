import AppDispatcher from '../dispatchers/AppDispatcher'

import BaseStore from './BaseStore'
import SceneItemStore from './SceneItemStore'


const SCENES = {
    'game-0.scene-0': {
        uid: 'game-0.scene-0',
        game_uid: 'game-0',
        title: 'Scene 1',
        items: [
            'game-0.scene-0.item-1', 'game-0.scene-0.item-2',
            'game-0.scene-0.item-3', 'game-0.scene-0.item-4', 'game-0.scene-0.item-5'
        ]
    }
}


class SceneStore extends BaseStore {
    constructor() {
        super()
        this.subscribe(() => this._registerToActions.bind(this))

        this._scenes = SCENES
    }

    get(uid) {
        return this._scenes.hasOwnProperty(uid)
            ? this._scenes[uid]
            : null
    }

    _registerToActions(action) {
        switch(action.actionType) {
        case 'CREATE_SCENE_ITEM':
            // Wait for the SceneItemStore to finish updating.
            AppDispatcher.waitFor([SceneItemStore.dispatchToken])

            this._scenes[action.data.scene_uid].items.push(action.data.uid)
            this.emitChange()
            break

        case 'DELETE_SCENE_ITEM':
            for (let scene_uid in this._scenes) {
                const index = this._scenes[scene_uid].items.indexOf(action.uid)
                if (index != -1) {
                    this._scenes[scene_uid].items.splice(index, 1)
                    break
                }
            }

            this.emitChange()
            break

        default:
            break
        }
    }
}


export default new SceneStore()
