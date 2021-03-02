import React from 'react';


function index() {
    return (
        <div className="header_container">
            <div className="header_left">
                <div className="header_navbar_toogle"><img alt="NavBar" src="" /></div>
                <div className="header_logo">Chat App</div>
            </div>
            <div className="header_right">
                <div className="header_searchbar">Search</div>
                <div className="header_dropdown">Profile</div>
            </div>

        </div>
    );
}

export default index;