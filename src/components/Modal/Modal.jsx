import React from 'react';
import { Chip } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});  

export const Modal = (props) => {
    const { handleModalOpen, handleModalClose, isModalOpen, modalProps} = props;
    const { modalTitle, modalContent } = modalProps;

    return (
        <React.Fragment>
            <Chip label="정보" onClick={handleModalOpen} sx={{backgroundColor:'white', color:'#3f3bde'}} />
            <Dialog
                open={isModalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleModalClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                       {modalContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>확인</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}