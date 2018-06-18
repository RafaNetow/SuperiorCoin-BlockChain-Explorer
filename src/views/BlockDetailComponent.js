import React, {Component} from "react";
import BlockTransactionComponent from "./BlockTransactionComponent";
import ActivityIndicator from "react-activity-indicator";
import {searchBlockchain} from "./services/api.js";

export default class BlockComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            block: null
        }
    }

    componentDidMount() {
        searchBlockchain(this.props.routeParams.height).then((data) => {
            console.log(data)
            let nextState = this.state;
            nextState.block = data.data.data
            this.setState(nextState)
        })
    }
    
}