import React, {Component} from 'react';
import {Menu, Label, Icon} from 'semantic-ui-react';
import {Link} from '../../routes';

export default () => {

    return(
      <Menu style={{marginTop: '10px'}}>
            <Link route="/">
                <a className="item">
                <Label color='blue'>REGISTER</Label>
                </a>
            </Link>

            <Link route="/">
                <a className="item">
                <Icon name="handshake" />
                </a>
            </Link>

            <Link route="/login">
                <a className="item">
                <Label color='blue'>LOGIN</Label>
                </a>
            </Link>

            <Link route="/">
                <a className="item">
                <Icon name="handshake" />
                </a>
            </Link>


            <Link route="/show">
                <a className="item">
                <Label color='blue'>CHECK YOUR PRODUCT</Label>
                </a>
            </Link>

            <Menu.Menu position="right">
                <Link route='/about'>
                    <a className="item">About Us</a>
                </Link>
                <Link route='developer'>
                    <a className="item">Developer</a>
                </Link>
                <Link>
                    <Icon name="bitcoin" size="big" color="yellow"/>
                </Link>
                <Link>
                    <Icon name="github" size="big"/>
                </Link>
                <Link>
                    <Icon name="git" size="big"/>
                </Link>
                
            </Menu.Menu>
        </Menu>
    );
}