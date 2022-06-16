
import React from 'react';
import {CheckBox, Border, Indicator, Label } from './checkbox.styles';


export default function Checkbox({checked, label, ...props}) {
    console.log("checked");
    return (
       
    <CheckBox checked={checked}>
        <Border checked={checked} {...props}>
            <Indicator checked={checked}  {...props}/>
        </Border>

        <Label>{label}</Label>
    </CheckBox>
    )
};