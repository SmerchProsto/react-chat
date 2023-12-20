import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
    const {auth} = useContext(Context);
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        console.log(user)
    }
    return (
        <Container>
           <Grid
               container
               style={{height: window.innerHeight - 50}}
               alignItems={"center"}
               justifyContent={"center"}
           >
               <Grid
                   container
                   alignItems={"center"}
                   direction={"column"}
                   style={{width:400, background: 'lightgray', borderRadius: '20px'}}
               >
                   <Box p={5}>
                       <Button onClick={login} style={{background: 'white'}} variant={"outlined"}>Войти с помощью Google</Button>
                   </Box>
               </Grid>
           </Grid>
        </Container>
    );
};

export default Login;