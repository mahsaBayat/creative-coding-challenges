// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    sourceCode: string,
    sandbox: string,
    title: string,
    width: number,
    height: number,
};
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
            <iframe
                // because we want to invode the function right at the start, we add () to it.
                srcDoc={this.renderSrcDoc()}
                title={this.props.title}
                width={this.props.width}
                height={this.props.height}
                align={this.props.align}
                sandbox={this.props.sandbox}
            />
        );
    }
}

export default IFrame;
