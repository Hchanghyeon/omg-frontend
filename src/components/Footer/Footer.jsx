import React from "react"
import { FooterContainer, FooterText } from "./Footer.style"

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                <div><b>문의 및 요청사항</b></div>
                <div><a href="mailto:changhyeon.h@kakao.com">changhyeon.h@kakao.com</a></div>
            </FooterText>
        </FooterContainer>
    )
}