import React from 'react';

export default function NumberInput(props) {

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" value={props.value} onChange={e => props.onChange(e.target.value)} id={props.id} min={props.min} max={props.max} />
        </div>
    );
}


