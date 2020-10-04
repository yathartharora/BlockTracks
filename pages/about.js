import React,{Component } from 'react';
import {Card, Image} from 'semantic-ui-react';
import Layout from '../ethereum/Component/Layout';
import logo from '../images/logo.jpeg'

class About extends Component {

    renderCards() {
        const items = [
            {
                header: 'Voter',
                meta: 'The King',
                description: 'Register yourself as a voter once and then you can participate in any election. Remember you are the KING MAKER. Please VOTE wisely.',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: 'About Project',
                meta: 'Solidity Smart Contract',
                description: 'A decentralized Voting system. Register yourself as a voter and you are all set to go. No alterations are possible and your vote cannot be changed once voted.',
            },
            {
                header: 'Yatharth Arora',
                meta: 'Project Developer',
                description: 'You can drop an email at yathartharora1999@gmail.com for further queries or reach me at my Twitter handle: @YatharthArora8 ',
            },
            {
                header: 'Tools and Libraries',
                meta: '',
                description: 'The Frontend has been developed using Next.js and the smart contract has been written in Solidity. Further the Project makes use of MetaMask and runs on Ropsten Test Network'
            },
            {
                header: 'Version',
                meta: 'Versioning sucks',
                description: '{web3: 1.0.0-beta.26} , {next:^4.1.4} , {react: 16.3.1} , {Solidity:^0.4.25} , {ganache-cli:^6.1.1} , {mocha:^^8.1.1}'
            }
        ];
        return <Card.Group items={items}/>;
    }


    render(){
        return(
            <Layout>
                <div>
                {this.renderCards()}
                </div>
                <br></br>
                <div>
                    <h1><strong>Concept behind BlockTracks</strong></h1>
                    <p> Hello Okay Enter the details here</p>
                </div>
                <div style={{marginTop: 10, marginLeft: 300}}>
                    <Image src={logo} size="big" />
                </div>

            </Layout>
        );
    }
}

export default About; 