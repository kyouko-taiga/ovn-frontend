import BaseStore from './BaseStore'


const CHARACTERS = {
    'tsukihi': {
        uid: 'tsukihi',
        game_uid: 'game-0',
        name: 'Tsukihi'
    },
    'karen': {
        uid: 'karen',
        game_uid: 'game-0',
        name: 'Karen'
    },
}


class CharacterStore extends BaseStore {
    constructor() {
        super()
        this.subscribe(() => this._registerToActions.bind(this))

        this._characters = CHARACTERS
    }

    get(uid) {
        return this._characters.hasOwnProperty(uid)
            ? this._characters[uid]
            : null
    }

    all() {
        let rv = []
        for (let uid in this._characters) {
            rv.push(this._characters[uid])
        }
        return rv
    }

    _registerToActions(action) {
        switch(action.actionType) {
        default:
            break
        }
    }
}


export default new CharacterStore()
