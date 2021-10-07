import { connect } from 'react-redux'
import { actions } from '../../redux-store'
import ReactDiffViewer from 'react-diff-viewer';

import './CompareModal.css';

const CompareModalComp = ({ comparisonJson, dispatch, events, selectedEvents }) => {
    const closeModal = () => dispatch({
        type: actions.CLOSE_COMPARE_SELECTED_EVENTS
    });

    return <div className="modal">
        <div className="modalContent">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="wrapper">
                <div className="one">
                    <h3>{Object.keys(selectedEvents)[0]}</h3>
                </div>
                <div className="two">
                    <h3>{Object.keys(selectedEvents)[1]}</h3>
                </div>
            </div>
            {comparisonJson && <ReactDiffViewer 
            oldValue={JSON.stringify(comparisonJson[0], null, 2)} 
            newValue={JSON.stringify(comparisonJson[1], null, 2)} 
            splitView={true} />}
        </div>
    </div>
};

export const CompareModal = connect(state => state)(CompareModalComp)