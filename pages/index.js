import React, {Component} from 'react';
import Layout from '../ethereum/Component/Layout';
import {Form, Button, Input, Message, Image} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import firm from '../ethereum/firm';
import logo from '../images/logo.jpeg';


class Tracking extends Component{

    state ={
        name: '',
        id: '',
        errormessage: '',
        loading: false
    }

    onSubmit = async(event) => {
        event.preventDefault();

        this.setState({loading:true, errormessage: ''})
        try {
            const pass = '0x' + this.state.id
            const accounts = await web3.eth.getAccounts();
            await firm.methods.createnewFirm(this.state.name, pass).send({
                from: accounts[0],
                gas: '1000000'
            })
        } catch (error) {
            this.setState({errormessage: error.message})       
        }

        this.setState({loading: false});
    }


    render(){
        return(
            <Layout>
                <h2>Register Your Firm With Us</h2>
                <Form onSubmit={this.onSubmit} error={!!this.state.errormessage}>
                    <Form.Field>
                        <label>Organization Name</label>
                        <Input 
                          value={this.state.name}
                          onChange={event => this.setState({name: event.target.value})}
                        />
                        <label>HASH - KEY</label>
                        <Input 
                         label = "0x"
                         labelPosition = "left"
                         placeholder = 'Should be unique and of the form "0x + {8 alphanumeric characters}" '
                         value={this.state.id}
                         onChange = {event => this.setState({id: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header='Oops!'content={this.state.errormessage} />
                    <Button secondary loading ={this.state.loading}>Register</Button>
                </Form>

                <div style={{marginTop: 50, marginLeft: 300}}>
                    <Image src={logo} size="big"/>
                </div>

            </Layout>
        )
    }
}

export default Tracking;