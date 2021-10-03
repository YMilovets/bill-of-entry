import React from 'react'
import Context from '../contexts/context';

export default function Content(props) {
    const {reg, confirm, activated} = useContext(Context);
    return (
        <div className="wrapper">
            {reg}
        </div>
    )
}
