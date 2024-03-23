import * as React from 'react';
import { Modal } from 'src/components/Modal/Modal';
import { useState } from 'react';
import { HeaderContainer, LogoWrapper, Logo, LogoImage} from 'src/components/Header/Header.style';

export const Header = () => {
    const modalProps = {
        modalTitle: "OMG 서비스",
        modalContent: "Omg는 Oh Mobile Game의 약자로써, 각종 모바일 게임에 대한 캐릭터 조회가 가능한 사이트입니다. 현재는 메이플스토리M만 지원하고 있으며 추후 카트라이더 러쉬플러스, V4, 바람의 나라 등 여러 게임을 지원할 예정입니다."
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
      <HeaderContainer>
          <LogoWrapper>
              <Logo><a href="/"><LogoImage src="/images/logo.png"/></a></Logo>
          </LogoWrapper>
          <Modal 
            handleModalClose={handleModalClose} 
            handleModalOpen={handleModalOpen} 
            isModalOpen={isModalOpen}
            modalProps={modalProps}
            />
      </HeaderContainer>
    );
}