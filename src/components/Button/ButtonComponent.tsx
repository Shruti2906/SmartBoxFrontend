import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IonButton } from '@ionic/react';
interface ButtonPropos{
    title:string;
    style:any;
    onClick?: () => void;
};

const ButtonComponent: React.FC<ButtonPropos> = ({ title, style, onClick }) => {
    return (
        <button className='btn' style={style} onClick={onClick}>
        {title}
    </button>
        // <a className='btn' style={ style } >{ title }</a>
    );
}


export default ButtonComponent;
