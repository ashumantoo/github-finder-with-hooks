import React, { Component } from 'react';
import PropTypes from 'prop-types'


class RepoItem extends Component {
    static propsType = {
        repo: PropTypes.object.isRequired,
    }
    render() {
        return (
            <div className="card">
                <h3>
                    <a href={this.props.repo.html_url}>{this.props.repo.name}</a>
                </h3>
            </div>
        )
    }
}

export default RepoItem;