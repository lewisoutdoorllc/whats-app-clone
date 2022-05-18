// import React from 'react'
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';

function Sidebar() {

    const createChat = () => {
        const input = prompt('Please enter an email you would like to use for you chat'
        );
        // checking to make sure there is an input
        if (!input) return null;

        if (EmailValidator.validate(input)) {
            // Need to add the chat into the DB
        }
    }

    return (
        <Container>
            <Header>
                {/* USER AVATAR */}
                <UserAvatar />
                {/* HEADER ICONS SECTION */}
                <IconsContainer>
                    {/* icon button if wrapping the button gives the buttons a nice hover effect
                built in with using the material ui */}
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            {/* SEARCH CHATS INPUT */}
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>
            {/* START NEW CHAT BUTTON */}
            <SidebarButton onClick={createChat}>
                Start a new chat
            </SidebarButton>

            {/* Area for list of different chats */}

        </Container>
    );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 2px;
`;

const SidebarButton = styled(Button)`
width: 100%;
/* to override the material ui &&&{} can be used */
&&&{
    border-top: 1px solid whitesmoke;
border-bottom: 1px solid whitesmoke;
}

`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
/* flex 1 allows to take up the entire width of the container */
flex: 1;
`;

const Header = styled.header`
display: flex;
position: sticky;
top: 0;
z-index: 1;
background-color: white;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;

:hover {
opacity: 0.8;
}
`;

const IconsContainer = styled.div``;