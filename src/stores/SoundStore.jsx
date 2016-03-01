import BaseStore from './BaseStore'


const SOUNDS = {
    'room.mp3': {
        uid: 'room.mp3',
        name: 'Room music',
        urls: ['/resources/sounds/common/room.mp3'],
        duration: 78,
        tags: ['Background', 'Indoor']
    },
    'garden.mp3': {
        uid: 'garden.mp3',
        name: 'Garden music',
        urls: ['/resources/sounds/common/garden.mp3'],
        duration: 68,
        tags: ['Background', 'Outdoor']
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

    all() {
        let rv = []
        for (let uid in this._sounds) {
            rv.push(this._sounds[uid])
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


export default new SoundStore()
