import React from 'react';
import './styles.scss';

type Props = {
    text:string;
}

const ButtonIcon = ({ text }: Props) => (
   <button className="btn btn-primary btn">
       <h2 className="btn-title">{text}</h2>
   </button>

);

export default ButtonIcon;