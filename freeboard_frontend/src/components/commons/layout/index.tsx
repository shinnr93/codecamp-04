import { ReactChild } from "react"
import styled from '@emotion/styled'
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
`;

const Body = styled.div`
`;

const BodyWrapper = styled.div`
    display: flex;
`;

const Sidebar = styled.div`
    width: 200px;
    height: 900px;
    background-color: yellow;
`;

const HIDDEN_HEADERS = [
    "/12-05-modal-address-state-prev"
]

const HIDDEN_FOOTERS = [
    "/12-05-modal-address-state-prev"
]

interface ILayoutProps {
    children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    console.log(router);
    
    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
    const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath)
    
    return(
        <Wrapper>
            {!isHiddenHeader && <Header />}
            <Banner />
            <Navigation />
            <BodyWrapper>
                <Sidebar>Sidebar</Sidebar>
                <Body>{props.children}</Body>
            </BodyWrapper>
            {!isHiddenFooter && <Footer />}
        </Wrapper>
    )

}