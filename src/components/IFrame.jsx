// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    sourceCode: string,
    sandbox: string,
    title: string,
    width?: number,
    height?: number,
};

const Container = styled.div`
    border: 0;
    border-width: 0;
`;
class IFrame extends PureComponent<Props> {
    renderSrcDoc() {
        return `
        <head><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script></head>
     <body>
       <script>${this.props.sourceCode}</script>
     </body>
     `;
    }
    render() {
        return (
            <Container>
                <iframe
                    // because we want to invode the function right at the start, we add () to it.
                    srcDoc={this.renderSrcDoc()}
                    title={this.props.title}
                    width={this.props.width}
                    height={this.props.height}
                    sandbox={this.props.sandbox}
                />
            </Container>
        );
    }
}

export default IFrame;
