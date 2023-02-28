import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeloading } from '../../../store/actions/loading.action';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const styles = {
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  paper: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    outline: 'none'
  }
};

const StyledCircularProgress = styled(CircularProgress)({
  marginRight: '15px'
});

const StyledTypography = styled(Typography)({
  variant: 'subtitle1'
});

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

class Loading extends Component {
  handleClose = () => {
    this.props.changeloading({
      open:false
    })
  };

  render() {
    const { loading } = this.props;
    return (
      <StyledModal open={loading.open} onClose={this.handleClose}>
        <div style={styles.paper}>
          <StyledCircularProgress size={20} />
          <StyledTypography>{loading.msg}</StyledTypography>
        </div>
      </StyledModal>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loadingReducer
});

const mapDispatchToProps = dispatch => ({
  changeloading: value => dispatch(changeloading(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
