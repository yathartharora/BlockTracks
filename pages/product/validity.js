import React, {Component} from 'react';
import Layout from '../../ethereum/Component/Layout';
import { Form, Input, Button, Message, Image } from 'semantic-ui-react';
import Track from '../../ethereum/track';
import web3 from '../../ethereum/web3';
import {Link, Router} from '../../routes';
import logo from '../../images/logo.jpeg';


class Validity extends Component {

    state = {
        hash: '',
        loading: false,
        errormessage: ''
    };

    static async getInitialProps(props){
        const {address} = props.query;

        return {address};
    }

    onSubmit = async(event) => {
        event.preventDefault();
        this.setState({loading: true, errormessage: ''});
        const product = Track(this.props.address);
        try {
            const accounts = await web3.eth.getAccounts();
            const pass = "0x" + this.state.hash;
            pass.toString();
            typeof(pass);
            const value = await product.methods.checkValidity(pass).call();
            console.log(value);
            if(value===true)
                Router.pushRoute('/product/true')
            if(value===false)
                Router.pushRoute('/product/false')
        } catch (error) {
            this.setState({errormessage: error.message});
        }
        this.setState({loading: false});
    }
    render(){
        return(
            <Layout>
                <div>
                    <h3>Note: Enter the 64 characters long Unique hash given to you by the seller while purchasing your product.</h3>
                    <h4>If the product is authentic you will recieve a confirmation for the same.</h4>
                </div>

                <div style={{float: "left"}}>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errormessage}>
                        <Form.Field>
                         <label>Enter the hash(0x)</label>
                          <Input
                            label='0x'
                            labelPosition="left"
                            value = {this.state.hash}
                            onChange = {event => this.setState({hash: event.target.value})}
                            
                          />
                        </Form.Field>
                        <Message error header='Oops!'content={this.state.errormessage} />
                        <Button secondary loading ={this.state.loading}>Check Validity</Button>
                    </Form>
                </div>

                <div style={{marginTop: 50, marginLeft: 300, float: "left"}}>
                    <Image src={logo} size="big"/>
                </div>
            </Layout>
        )
    }
}

export default Validity;