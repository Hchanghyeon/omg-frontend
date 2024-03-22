import * as React from 'react';
import { HeaderContainer, LogoWrapper, Logo, LogoImage} from 'src/components/Header/Header.style';
import { Chip } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});  

export const Header = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <HeaderContainer>
          <LogoWrapper>
              <Logo><a href="/"><LogoImage src="/images/logo.png"/></a></Logo>
          </LogoWrapper>
          <React.Fragment>
            <Chip label="정보" onClick={handleClickOpen} sx={{backgroundColor:'white', color:'#3f3bde'}} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Omg는 무슨 서비스인가요?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Omg는 Oh Mobile Game의 약자로써, 각종 모바일 게임에 대한 캐릭터 조회가 가능한 사이트입니다. 현재는 메이플스토리M만 지원하고 있으며 추후 카트라이더 러쉬플러스, V4, 바람의 나라 등 여러 게임을 지원할 예정입니다.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>확인</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
      </HeaderContainer>
    );
}