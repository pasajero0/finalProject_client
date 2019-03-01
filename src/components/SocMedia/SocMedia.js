import React, {Component} from 'react';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import '../Header/Header.scss';

//создание компонента с иконками соц-сетей
class SocMedia extends Component  {

    render(){
        return (
            <div className="socmedia">
                <a href="https://twitter.com" target="a_blank" title="twitter"className="socmedia__icon"><FaTwitter /></a>
                <a href="https://facebook.com" target="a_blank" title="facebook"className="socmedia__icon"><FaFacebookF /></a>
                <a href="https://google.com" target="a_blank" title="google+"className="socmedia__icon"><FaGooglePlusG /></a>
                <a href="https://pinterest.com" target="a_blank" title="pinterest"className="socmedia__icon"><FaPinterestP/></a>
            </div>
        )
    }
}

export default SocMedia;