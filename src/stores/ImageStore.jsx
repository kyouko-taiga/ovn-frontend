import BaseStore from './BaseStore'


const IMAGES = {
    'room.jpg': {
        uid: 'room.jpg',
        name: 'Room',
        urls: ['/resources/images/common/room.jpg'],
        tags: ['Background', 'Indoor']
    },
    'garden.jpg': {
        uid: 'garden.jpg',
        name: 'Garden',
        urls: ['/resources/images/common/garden.jpg'],
        tags: ['Background', 'Outdoor']
    }
}


class ImageStore extends BaseStore {
    constructor() {
        super()
        this.subscribe(() => this._registerToActions.bind(this))

        this._images = IMAGES
    }

    get(uid) {
        return this._images.hasOwnProperty(uid)
            ? this._images[uid]
            : null
    }

    all() {
        let rv = []
        for (let uid in this._images) {
            rv.push(this._images[uid])
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


export default new ImageStore()
