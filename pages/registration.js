import React, {Component} from 'react';
import Layout from '../ethereum/Component/Layout';
import Track from '../ethereum/track';
import web3 from '../ethereum/web3';
import { Input, Form, Message, Button, Image } from 'semantic-ui-react';
import logo from '../images/logo.jpeg';
import sjcl from 'sjcl';

class Registration extends Component {

    static async getInitialProps(props){
        return{
            address: props.query.address
        };
    }

    state = {
        productname: '',
        productbrand: '',
        productprice: '',
        productsize: '',
        productcode: '',
        isresold: false,
        hash: '',
        loading: false,
        errormessage: ''
    }


    onSubmit = async(event) => {

        event.preventDefault();
        this.setState({loading:true, errormessage: ''});

        console.log(this.props.address);
        const products = Track(this.props.address);

        const pass = this.state.productname + this.state.productbrand + this.state.productprice + this.state.productsize + this.state.productcode + this.state.isresold;
        const myBitArray = sjcl.hash.sha256.hash(pass)
        const myHash = sjcl.codec.hex.fromBits(myBitArray)
        console.log(myHash);

        
        try {
            const accounts = await web3.eth.getAccounts();
            await products.methods.Register("0x"+myHash).send({
                from: accounts[0],
                gas: '1000000'
            });
        } catch (error) {
            this.setState({errormessage: error.message});
        }
        this.setState({loading: false});
    }

    render(){
        return(
            <Layout>
                <h2>Register your product here!</h2>
                <Form onSubmit={this.onSubmit} error={!!this.state.errormessage}>
                    <Form.Field>
                        <label>Product Name</label>
                        <Input
                        value = {this.state.productname}
                        onChange = {event => this.setState({productname: event.target.value})}
                        />
                        <label>Product Brand</label>
                        <Input
                         value = {this.state.productbrand}
                         onChange = {event => this.setState({productbrand: event.target.value})}
                        />

                        <label>Product Price</label>
                        <Input
                         value = {this.state.productprice}
                         onChange = {event => this.setState({productprice: event.target.value})}
                        />

                        <label>Product Size</label>
                        <Input
                         value = {this.state.productsize}
                         onChange = {event => this.setState({productsize: event.target.value})}
                        />

                        <label>Product Code</label>
                        <Input
                         value = {this.state.productcode}
                         onChange = {event => this.setState({productcode: event.target.value})}
                        />

                    </Form.Field>
                    <Message error header='Oops!'content={this.state.errormessage} />
                    <Button secondary loading ={this.state.loading}>Register My Product</Button>

                </Form>

                <div style={{marginTop: 50, marginLeft: 300}}>
                    <Image src={logo} size="big"/>
                </div>
            </Layout>
        )
    }
}

export default Registration;