import React, {Component} from 'react';
import Layout from '../../ethereum/Component/Layout';
import duplicate from '../../images/duplicate.jpg';
import {Image } from 'semantic-ui-react';

class False extends Component {
    render(){
        return(
            <Layout>
                <h1>We regret to inform you that you have been sold a counterfeit Product!! </h1>
                <h1>Please contact your seller for a replacement/refund.</h1>

                <Image src={duplicate} size="large"/>
            </Layout>
        )
    }
}

export default False;