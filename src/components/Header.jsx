// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    title: string,
    imageSrc?: string,
};

const StyledHeader = styled.h1`
    color: #ff4a4a;
    /* color: #f2f2f2; */
    background: #ff4a4a;
    font-size: 75px;
    line-height: 74px;
    font-weight: 700;
    text-align: center;
    margin: 0 5px 24px;
    padding: 10px;
    margin: 0 5px 24px;
    font-family: 'Open Sans', sans-serif;
    background-image: url(${props => props.imageSrc});
`;

class Header extends PureComponent<Props> {
    render() {
        const { title, imageSrc, description } = this.props;
        return (
            <div>
                <StyledHeader imageSrc={imageSrc}>{title}</StyledHeader>
            </div>
        );
    }
}

export default Header;
