
import React from 'react';
import MainButton from './_generalbutton';
import styles from './_friendbar.module.css'
import {
    Button,
    Drawer,
    Menu,
    MenuItem,
    Alert
} from "@mui/material";
import FriendListSidebar from './_friendbar';
import { useState, useEffect } from 'react';

function Menua(props) {

    const logout = () => {
        alert("This will log you out, not integrated yet")
    };

    const deleteuser = () => {
        alert("This will delete all tracklist, not integrated yet")
    };

    const [anchorFriendlist, setFriendlist] = useState(null);
    // const openFriendlist = (event) => {
    //     setFriendlist(event.currentTarget);
    // };
    const closeFriendlist = () => {
        setFriendlist(null);
    };
    const openAndclose = (event) => {
        props.function();
        setFriendlist(event.currentTarget);
    }

    const friends = [
        {
          id: 1,
          name: "Alice",
          avatar: "/dashboard/Avatar.png",
        
        },
        {
          id: 2,
          name: "Bobby",
          avatar: "/dashboard/Avatar.png",
        },
        {
          id: 3,
          name: "Charlie",
          avatar: "/dashboard/Avatar.png",
        },
        {
          id: 4,
          name: "Diana",
          avatar: "/dashboard/Avatar.png",
        },
        {
            id: 4,
            name: "Ellen",
            avatar: "/dashboard/Avatar.png",
          },
      ];

      const [searchTerm, setSearchTerm] = useState("");

      const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
      };
    return (
        <Menu
            id="simple-menu"
            anchorEl={props.anchor}
            keepMounted
            open={Boolean(props.anchor)}
            onClose={props.function}
        >   
            <MenuItem>
            <MainButton name="Log Out" loc={logout}/>
            </MenuItem>
            <MenuItem>
            <MainButton name="Delete User Data" loc={deleteuser}/>
            </MenuItem>
            <MenuItem>
            <MainButton name="Friends" loc={openAndclose}/>
            </MenuItem>
            
            <Drawer
                anchor="left"
                open={Boolean(anchorFriendlist)}
                onClose={closeFriendlist}
        
            >
                <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", backgroundColor: "rgb(2, 12, 21)"}}>
                <h2 className={styles.mainheadtext} style = {{alignSelf:"center"}}>FRIEND LIST</h2>
                <input className={styles.search}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style = {{alignSelf:"center"}}
                />
            </div>
                <FriendListSidebar friends={friends} searchTerm={searchTerm}/>
            </Drawer>
        </Menu>

    );
}

export default Menua;
