import React, {Component} from 'react';
import Layout from '../../ethereum/Component/Layout';
import authentic from '../../images/authentic.jpg';
import {Image } from 'semantic-ui-react';

class True extends Component {
    render(){
        return(
            <Layout>
                <h1>Yes! Your product is as authentic as You</h1>

                <Image src={authentic} size="large" />
            </Layout>
        )
    }
}

export default True;