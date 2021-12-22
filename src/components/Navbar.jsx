import { AppBar, Drawer, IconButton, List, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import logo from '../images/code.png';
import {Link, animateScroll as scroll} from 'react-scroll';
import { BuildTwoTone, ContactMailTwoTone, EmojiObjectsTwoTone, InfoTwoTone} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'


const links = [
        {
                id:"about",
                text:"Sobre Mi",
                icon: <InfoTwoTone/>
        },
        {
                id:"skills",
                text:"Technical Skills",
                icon: <EmojiObjectsTwoTone/>
        },
        {
                id:"mywork",
                text:"Mis Proyectos",
                icon: <BuildTwoTone/>
        },
        {
                id:"contact",
                text:"Contacto",
                icon: <ContactMailTwoTone/>
        },
        
];


const Navbar = () => {
        const classes = useStyles();
        const [open, setOpen] = useState(false);
        return (
                <>
                <AppBar position='sticky' className={classes.root}>
                    <Toolbar className={classes.toolbar}>
                            <img src={logo} className={classes.logo} alt="Logo" />
                            <List className={classes.menu}>
                                    {
                                            links.map(({id,text},index) => (
                                                    <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                                            ))
                                    }
                            </List>
                            <IconButton className={classes.menubutton} edge="end">
                                <MenuIcon />
                          </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                        <IconButton> {/*hace clicable un icono*/}

                        </IconButton>

                </Drawer>
                </>
        )
}

/**Estilos */
const useStyles = makeStyles((theme) => ({
        
        root:{
                backgroundColor:"#fafafa",
                top:0,
                left:0,
                right:0,
        },

        toolbar:{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center",
        },

        logo:{
                width:"4rem",
                height:"4rem",
                "&:hover":{
                        cursor: "pointer",
                }
        },
        menu:{
                [theme.breakpoints.down("sm")] : {
                        display:"none",
                },
                "& a":{
                     color:"#333",
                     fontSize:"1.4rem",
                     fontWeight:"bold",
                     marginLeft: "3rem",
                     
                },
                "& a:hover":{
                        cursor:"pointer",
                        color: "tomato",
                        borderBottom:"3px solid tomato",
                },
        },
        menubutton:{
                display: "none",
                [theme.breakpoints.down("sm")]:{
                        display:"block",
                        color:"tomato",
                        position:"absolute",
                        right:10,
                } 
        },
}))
export default Navbar
