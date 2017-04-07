import { Component } from 'react';

export default class IndexPage extends Component {

    static async getInitialProps ({ req }) {
        return req
            ? { userAgent: req.headers['user-agent'] }
            : { userAgent: navigator.userAgent };
    }

    render () {
        const { userAgent } = this.props;

        return (
            <h1>Hello World! { userAgent }</h1>
        );
    }

};
