import React, { PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool.isRequired,
  errorMessage: PropTypes.object.isRequired
};

export default class ErrorModal extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.close();
  }

  handleKeyDown(e) {
    const { open } = this.props;
    if (
      e.keyCode === 13 &&
      (e.ctrlKey || e.meta) &&
      open
      ) {
        e.preventDefault();
      }
  }

  render() {
    const {
      close,
      open,
      errorMessage
    } = this.props;
    
    return (
      <Modal
        animation={ true }
        dialogClassName='challenge-error-modal'
        keyboard={ true }
        onHide={ close }
        onKeyDown={ this.handleKeyDown }
        show={ open }
        >
        <Modal.Header
          className='challenge-list-header'
          closeButton={ true }
          >
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <div className='row'>
              {errorMessage}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block={ true }
            bsSize='large'
            bsStyle='primary'
            onClick={this.close}
            >
            Try again!
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ErrorModal.displayName = 'ErrorModal';
ErrorModal.propTypes = propTypes;
