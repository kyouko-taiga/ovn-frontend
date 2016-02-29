import BaseStore from './BaseStore'


const SCENES = {
    'game-0.scene-0': {
        uid: 'game-0.scene-0',
        title: 'Scene 1',
        items: [
            'game-0.scene-0.item-0', 'game-0.scene-0.item-1', 'game-0.scene-0.item-2',
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
        default:
            break
        }
    }
}


export default new SceneStore()
