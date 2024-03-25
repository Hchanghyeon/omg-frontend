import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ErrorModal = ({ handleErrorModalOpen, handleErrorModalClose, errorModalOpen, errorModalTitle, errorModalContent }) => {
    return (
        <React.Fragment>
            <Dialog
                onClose={handleErrorModalClose}
                aria-labelledby="customized-dialog-title"
                open={errorModalOpen}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {errorModalTitle}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleErrorModalClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {errorModalContent}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleErrorModalClose}>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}