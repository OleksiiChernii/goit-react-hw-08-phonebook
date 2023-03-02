import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
import Button from "@mui/material/Button";
import styled from 'styled-components';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserMenuDiv>
            <p>Welcome, {user.name}</p>
            <Button type='button' onClick={() => dispatch(logOut())} variant="contained">
                Logout
            </Button>
        </UserMenuDiv>
    )
}

const UserMenuDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

