import React, {Component} from 'react';
import Layout from '../ethereum/Component/Layout';
import { Form, Input, Button, Message, Image } from 'semantic-ui-react';
import firm from '../ethereum/firm';
import {Link, Router} from '../routes'; 
import Tracker from '../ethereum/track';
import logo from '../images/logo.jpeg';

class Login extends Component {


    state = {
        name: '',
        id: '',
        address: '',
        loading: false,
        errormessage: ''
    }

    onSubmit = async(event) => {
        event.preventDefault();
        this.setState({loading: true,  errormessage: ''});
        this.state.address.toString();
        console.log(this.state.address);
        //const product = Tracker(this.state.address)
        try {
            const pass = "0x" + this.state.id;
            const value = await firm.methods.isRegistered(pass).call();
            console.log(value);
            if(value=== true){
                Router.pushRoute(`/firms/${this.state.address}/registration`);
            }
        } catch (error) {
            this.setState({errormessage: error.message});
        }
        this.setState({loading: false});
    }

    render(){
        return(
            <Layout>
                <h2>Enter the credentials to register your product</h2>
                <Form onSubmit={this.onSubmit} error={!!this.state.errormessage}>
                    <Form.Field>
                        <label>Organization Name</label>
                        <Input 
                         value={this.state.name}
                         onChange = {event => this.setState({name: event.target.value})}
                        />

                        <label>HASH - KEY</label>
                        <Input
                         label = '0x'
                         labelPosition = "left"  
                         value={this.state.id}
                         onChange= {event => this.setState({id: event.target.value})}
                        />

                        <label>Contract address</label>
                        <Input 
                         value = {this.state.address}
                         onChange = {event => this.setState({address: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header='Oops!'content={this.state.errormessage} />
                    <Button secondary loading ={this.state.loading}>Register</Button>
                </Form>

                <div style={{marginTop: 50, marginLeft: 300}}>
                    <Image src={logo} size="big"/>
                </div>
            </Layout>
        );
    }
}

export default Login;