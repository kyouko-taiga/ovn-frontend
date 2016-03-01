import assign from 'object-assign'

import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import SoundStore from '../../../../stores/SoundStore'

import SoundEditorContainer from './SoundEditorContainer'
import SoundSelector from './SoundSelector'


export default StoreConnector(
    class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                searchCriterion: '',
                searchResults: [],
                showSelector: false,
                selectedSound: null
            }

            this.showSelector = this.showSelector.bind(this)
            this.hideSelector = this.hideSelector.bind(this)
            this.handleSearch = this.handleSearch.bind(this)
            this.handleChoice = this.handleChoice.bind(this)
        }

        showSelector() {
            this.setState({showSelector: true})
        }

        hideSelector() {
            this.setState({showSelector: false})
        }

        handleSearch(criterion) {
            // Ignore the criterion's character case.
            const criterion_ci = criterion.toLowerCase()

            // Filter sound options.
            const matches = this.props.soundOptions.filter((sound) => {
                // Keep sounds whose names contain the given criterion.
                if (sound.name.toLowerCase().indexOf(criterion_ci) > -1) {
                    return true
                }

                // Keep sounds that have a tag matching the given criterion.
                for (let tag of sound.tags) {
                    if (tag.toLowerCase().indexOf(criterion_ci) > -1) {
                        return true
                    }
                }

                return false
            })

            this.setState({
                searchCriterion: criterion,
                searchResults: matches
            })
        }

        handleChoice(sound) {
            this.setState({
                showSelector: false,
                selectedSound: sound
            })
        }

        render() {
            // If there isn't any selected sound, we show the sound selector
            // rather than the sound editor.
            const sound = this.state.selectedSound || this.props.event.sound
            if ((this.state.showSelector) || (!sound)) {
                const sounds = (this.state.searchCriterion != '')
                    ? this.state.searchResults
                    : this.props.soundOptions

                return (
                    <SoundSelector
                        onSearch={this.handleSearch}
                        onChoice={this.handleChoice}
                        sounds={sounds}
                        searchCriterion={this.state.searchCriterion}
                    />
                )
            }

            const {event, ...props} = this.props

            return (
                <SoundEditorContainer
                    showSelector={this.showSelector}
                    event={assign(event, {sound: sound})}
                    {...props}
                />
            )
        }
    },

    // Handle SoundStore changes.
    SoundStore, (props) => ({soundOptions: SoundStore.all()})
)
