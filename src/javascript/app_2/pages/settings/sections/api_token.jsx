import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContentHeader from '../components/content_header.jsx';

class ApiToken extends PureComponent {
    render() {
        const { title, description } = this.props;
        return (
            <div className='settings__content_container'>
                <ContentHeader title={title} description={description} />
                <div className='settings__content_form_container'>
                    {/* content here */}
                </div>
            </div>
        );
    }
}

ApiToken.propTypes = {
    title      : PropTypes.string,
    description: PropTypes.string,
};

export default ApiToken;