import React, {Component} from 'react'
import { Button, Icon, Card, Image, Reveal } from 'semantic-ui-react'
import Layout from '../ethereum/Component/Layout';
import intro from '../images/intro.jpeg';
import myself from '../images/myself.jpg';

const description = [
    'Ordinary Human from a special planet on a mission to decentralize power.'
  ].join(' ')

class ButtonExampleSocial extends Component{

    render(){
        return(
            <Layout>
                
                <div style={{float: "right"}}>
                    <Reveal animated='rotate'>
                        <Reveal.Content visible>
                            <Image circular size='large' src={intro} />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image circular size='large' src={myself} />
                        </Reveal.Content>
                        
                    </Reveal>
                </div>
                <div style={{marginTop:'10px', float:"left"}}> 
                
                    <a href="https://www.facebook.com/yatharth.arora.52/">
                        <Button color="facebook">
                            <Icon name="facebook"/> Facebook
                        </Button>
                    </a>
                    
                    <a href="https://twitter.com/YatharthArora8">
                        <Button color="twitter">
                            <Icon name="twitter"/> Twitter
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/yatharth-a-389663128/">
                        <Button color="linkedin">
                            <Icon name="linkedin" /> LinkedIn
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/yathartharora_/">
                        <Button color="instagram">
                            <Icon name="instagram" /> Instagram
                        </Button>
                    </a>
                    <a>
                        <Button color="youtube">
                            <Icon name="youtube" /> YouTube
                        </Button>
                    </a>
                </div>

                <div style={{float: "left", marginTop: 10}}>
                    <Card>
                        <Card.Content header="About Me" />
                        <Card.Content description={description} />
                        <Card.Content extra>
                            <Icon name="user" />3rd year Undergrad
                        </Card.Content>
                    </Card>
                </div>

            </Layout>
        )
    }

}

 

export default ButtonExampleSocial
