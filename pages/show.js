import React, {Component} from 'react';
import firm from '../ethereum/firm';
import Layout from '../ethereum/Component/Layout';
import {Card, Button, Image} from 'semantic-ui-react';
import {Link} from '../routes';
import logo from '../images/logo.jpeg'

class RegisterAsVoter extends Component {

    static async getInitialProps() {
        const firms = await firm.methods.getDeployedContracts().call();
        //console.log(matches.length);
        return {firms};
    }

    renderPositions() {
        const items = this.props.firms.map(address => {
            return{
                header: (`${address.name}`),
                description: (
                    (`${address.sender}`)
                ),
                meta: (<Link route={`/firms/${address.sender}`}>
                <a>Check Your Product</a>
            </Link>),
                fluid: true
            };
        });
        return <Card.Group items={items}></Card.Group>
    }


    render(){
        return(
            <Layout>
                <div>
                    {this.renderPositions()}
                </div>

                <div style={{marginTop: 50, marginLeft: 300}}>
                    <Image src={logo} size="big"/>
                </div>
            </Layout>
        )
    }
}

export default RegisterAsVoter;