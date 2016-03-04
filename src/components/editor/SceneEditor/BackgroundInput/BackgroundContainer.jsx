import React from 'react'
import {Input} from 'react-bootstrap'

import StoreConnector from '../../../../connectors/StoreConnector'
import ImageStore from '../../../../stores/ImageStore'

import ImageSelector from './ImageSelector'


export default StoreConnector(
    class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                searchCriterion: '',
                searchResults: [],
                showSelector: false
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

            // Filter image options.
            const matches = this.props.imageOptions.filter((image) => {
                // Keep images whose names contain the given criterion.
                if (image.name.toLowerCase().indexOf(criterion_ci) > -1) {
                    return true
                }

                // Keep images that have a tag matching the given criterion.
                for (let tag of image.tags) {
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

        handleChoice(image) {
            this.props.onChange(image)
            this.setState({
                showSelector: false
            })
        }

        render() {
            const {onChange, label, help, value, ...props} = this.props

            // If there isn't any image value, we show the image selector
            // rather than the image preview.
            if ((this.state.showSelector) || (!value)) {
                const images = (this.state.searchCriterion != '')
                    ? this.state.searchResults
                    : this.props.imageOptions

                return (
                    <Input label={label}>
                        <ImageSelector
                            onSearch={this.handleSearch}
                            onChoice={this.handleChoice}
                            images={images}
                            searchCriterion={this.state.searchCriterion}
                        />
                    </Input>
                )
            }

            const src = ImageStore.get(value).urls[0]
            return (
                <Input label={label} help={help}>
                    <img
                        onClick={this.showSelector}
                        className="ovn-scene-background-input"
                        src={src}
                    />
                </Input>
            )
        }
    },

    // Handle ImageStore changes.
    ImageStore, (props) => ({
        imageOptions: ImageStore.all()
    })
)
