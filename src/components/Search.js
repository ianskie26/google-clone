import React from "react"
import MicIcon from '@mui/icons-material/Mic';

export default function Search() {

    const input = React.useRef('')

    return (
        <div>
            <div className="banner">
                <div className="logo">
                    <img src="./images/google.png" alt="" />
                </div>
            </div>
            <div className="search--wrapper">
                <div className="gcse-searchbox-only" enableAutoComplete="true"></div>
            </div>
        </div>
        
        

    )
}