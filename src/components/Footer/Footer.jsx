import React from "react"
import { FooterContainer, FooterText } from "./Footer.style"

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                <div>운영자 스카니아/황창구리</div>
                <div><b>문의 및 요청사항 </b><a href="mailto:changhyeon.h@kakao.com">changhyeon.h@kakao.com</a></div>
                <div>Data based on NEXON Open API</div>
            </FooterText>
        </FooterContainer>
    )
}