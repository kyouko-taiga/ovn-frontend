import React from 'react'
import {Row, Col, Alert, Input} from 'react-bootstrap'


class ImageTable extends React.Component {
    makeChoiceHandler(uid) {
        return ((e) => {
            this.props.onChoice(uid)
        })
    }

    render() {
        if (this.props.images.length == 0) {
            return (
                <Alert bsStyle="warning">
                    {"You don't have any image resource matching the crietria."}
                </Alert>
            )
        }

        const images = this.props.images.map((image, index) => {
            return (
                <Col key={index} xs={3}>
                    <img
                        onClick={this.makeChoiceHandler(image.uid)}
                        src={image.urls[0]}
                    />
                    <div className="text-center">
                        {image.name}
                    </div>
                </Col>
            )
        })

        return (
            <Row>
                <div className="ovn-image-selector">
                    {images}
                </div>
            </Row>
        )
    }
}


export default class ImageSelector extends React.Component {
    constructor(props) {
        super(props)

        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e) {
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div>
                <Input
                    onChange={this.handleSearchChange}
                    type="text" placeholder="Filter by name and tags"
                    addonBefore={<i className="fa fa-search" />}
                    value={this.props.searchCriterion}
                />
                <ImageTable onChoice={this.props.onChoice} images={this.props.images} />
            </div>
        )
    }
}
