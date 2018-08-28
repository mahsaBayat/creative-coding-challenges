// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    title: string,
    imageSrc?: string,
};

const StyledContainer = styled.div`
    height: 200px;
    background-image: url(${props => props.imageSrc});
    background-repeat: repeat;
    background-size: 100px 100px;
    margin: 0 75px 24px;
`;

const StyledHeader = styled.h1`
    /* background-color: #ff4a4a; */
    color: #f2f2f2;
    font-size: 75px;
    line-height: 74px;
    font-weight: 700;
    text-align: center;
    vertical-align: center;
    padding: 50px;
    margin: 0 75px 24px;
    font-family: 'Open Sans', sans-serif;
`;
class Header extends PureComponent<Props> {
    render() {
        const { title, imageSrc } = this.props;
        return (
            <StyledContainer imageSrc={imageSrc}>
                <StyledHeader>{title}</StyledHeader>
            </StyledContainer>
        );
    }
}

export default Header;
