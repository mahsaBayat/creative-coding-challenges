// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { d3 } from 'd3';

type Props = {
    content: string,
    onClick?: Function,
    className?: string,
};
class Button extends PureComponent<Props> {
    render() {
        let dataset = ['Hello', 'world'];
        d3
            .selectAll('p')
            .data(dataset)
            .append('p')
            .text(d);
        return (
            <div>
                <script src="https://d3js.org/d3.v5.min.js" />
                <button
                    className={this.props.className}
                    onClick={this.props.onClick}
                >
                    {this.props.content}
                </button>
            </div>
        );
    }
}
// using styled() as a function is to wrap an existing not-styled component
const StyledButton = styled(Button)`
    display: inline-block;
    padding: 0.7em 1.4em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.3em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: #ffffff;
    background-color: #f17281;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    text-align: center;
    position: relative;
`;
export default StyledButton;

// // @flow

// import React, { PureComponent } from 'react';
// import styled from 'styled-components';

// type Props = {
//     content: string,
//     onClick?: Function,
//     className?: string,
// };

// class Button extends PureComponent<Props> {
//     render() {
//         return (
//             <button
//                 className={this.props.className}
//                 onClick={this.props.onClick}
//             >
//                 {this.props.content}
//             </button>
//         );
//     }
// }

// // using styled() as a function is to wrap an existing not-styled component
// const StyledButton = styled(Button)`
//     display: inline-block;
//     padding: 0.7em 1.4em;
//     margin: 0 0.3em 0.3em 0;
//     border-radius: 0.3em;
//     box-sizing: border-box;
//     text-decoration: none;
//     font-family: 'Roboto', sans-serif;
//     text-transform: uppercase;
//     font-weight: 400;
//     color: #ffffff;
//     background-color: #f17281;
//     box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
//     text-align: center;
//     position: relative;
// `;

// export default StyledButton;
