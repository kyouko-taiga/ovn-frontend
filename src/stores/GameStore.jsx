import BaseStore from './BaseStore'


const GAMES = {
    'game-0': {
        uid: 'game-0',
        scenes: ['game-0.scene-0']
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
        default:
            break
        }
    }
}


export default new GameStore()
