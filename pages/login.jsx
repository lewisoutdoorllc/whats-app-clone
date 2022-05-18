import { Button } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
// import { auth, provider } from '../firebase';
import { signInWithGooglePopup, createUserDocumentFromAuth, auth, googleProvider } from '../firebase';

const logGoogleUser = async () => {
    // const {user} = await signInWithGooglePopup(provider).catch(alert);
    // NEED TO FIX THE REDIRETION TO THE HOMEPAGE
    const { user } = await signInWithGooglePopup();
    const userDocRef = await {
        if () {
            return <Login />
        }
    };
    // if (!user) return <Login />
}

function Login() {

    // const signIn = () => {
    //     auth.signInWithPopup(provider).catch(alert);
    // };

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Image
                    style={{marginBottom: 20}}
                    src="/img/whatsapp-icon-1.png"
                    alt="Whatsapp Icon"
                    width="200"
                    height="200"

                />
                <Button onClick={logGoogleUser} variant='outlined' >Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
`;

const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
`;

// const Logo = styled.img``;

