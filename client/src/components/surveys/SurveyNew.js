import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);

    //    this.state = { showReview: false };
    // }

    state = { showReview: false };

    renderContent() {
        if (this.state.showReview) {
            return <SurveyFormReview />;
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })}/>;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default SurveyNew;