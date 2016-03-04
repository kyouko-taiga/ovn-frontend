import AppDispatcher from '../dispatchers/AppDispatcher'

import BaseStore from './BaseStore'
import SceneStore from './SceneStore'


const GAMES = {
    'game-0': {
        uid: 'game-0',
        resources: {
            characters: ['tsukihi', 'karen']
        },
        scenes: ['game-0.scene-0'],
        sounds: ['room.ogg', 'garden.ogg']
    }
}


class GameStore extends BaseStore {
    constructor() {
        super()
        this.subscribe(() => this._registerToActions.bind(this))

        this._games = GAMES
    }

    get(uid) {
        return this._games.hasOwnProperty(uid)
            ? this._games[uid]
            : null
    }

    _registerToActions(action) {
        switch(action.actionType) {
        case 'CREATE_SCENE':
            // Wait for the SceneStore to finish updating.
            AppDispatcher.waitFor([SceneStore.dispatchToken])

            this._games[action.data.game_uid].scenes.push(action.data.uid)
            this.emitChange()
            break

        case 'DELETE_SCENE':
            for (let game_uid in this._games) {
                const index = this._games[game_uid].scenes.indexOf(action.uid)
                if (index != -1) {
                    this._games[game_uid].scenes.splice(index, 1)
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


export default new GameStore()
