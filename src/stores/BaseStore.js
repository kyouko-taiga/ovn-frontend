import {EventEmitter} from 'events'

import AppDispatcher from '../dispatchers/AppDispatcher'


export default class BaseStore extends EventEmitter {
    constructor() {
        super()
    }

    subscribe(actionSubscribe) {
        this._dispatchToken = AppDispatcher.register(actionSubscribe())
    }

    get dispatchToken() {
        return this._dispatchToken
    }

    emitChange() {
        this.emit('CHANGE')
    }

    addChangeListener(callback) {
        this.on('CHANGE', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('CHANGE', callback)
    }

    /**
        Returns the current max listener value for the emitter.

        .. note::
            Node v0.12.7 does't implement EventEmitter.getMaxListeners, so
            define it here. This method should be removed if you know you'll
            be running this code on a more recent version of Node.
     */
    getMaxListeners() {
        if (typeof super.getMaxListeners === 'function') {
            return super.getMaxListeners()
        }

        if (typeof this._maxListeners === 'undefined') {
            return EventEmitter.defaultMaxListeners
        } else {
            return this._maxListeners
        }
    }
}
