import BaseStore from './BaseStore'


const SOUNDS = {
    'room.ogg': {
        uid: 'room.ogg',
        name: 'Room music',
        url: '/resources/common/room.ogg'
    },
    'garden.ogg': {
        uid: 'garden.ogg',
        name: 'Room music',
        url: '/resources/common/garden.ogg'
    }
}


class SoundStore extends BaseStore {
    constructor() {
        super()
        this.subscribe(() => this._registerToActions.bind(this))

        this._sounds = SOUNDS
    }

    get(uid) {
        return this._sounds.hasOwnProperty(uid)
            ? this._sounds[uid]
            : null
    }

    _registerToActions(action) {
        switch(action.actionType) {
        default:
            break
        }
    }
}


export default new SoundStore()
