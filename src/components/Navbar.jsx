import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import logo from '../images/code.png';
import {Link, animateScroll as scroll} from 'react-scroll';
import { BuildTwoTone, Cancel, ContactMailTwoTone, EmojiObjectsTwoTone, InfoTwoTone} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'

const links = [
        {
                id:"about",
                text:"Sobre Mi",
                icon: <InfoTwoTone fontSize='large'/>
        },
        {
                id:"skills",
                text:"Technical Skills",
                icon: <EmojiObjectsTwoTone fontSize='large'/>
        },
        {
                id:"mywork",
                text:"Mis Proyectos",
                icon: <BuildTwoTone fontSize='large'/>
        },
        {
                id:"contact",
                text:"Contacto",
                icon: <ContactMailTwoTone fontSize='large'/>
        },
        
];


const Navbar = () => {
        const classes = useStyles();
        const [open, setOpen] = useState(true);
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
                            <IconButton className={classes.menubutton} onClick={() => setOpen(true)} edge="end">
                                <MenuIcon />
                          </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                        <IconButton  onClick={() => setOpen(false)}> {/*hace clicable un icono*/}
                                    <Cancel fontSize='large' className={classes.cancelIcon}/>
                        </IconButton>
                        <Divider/>
                        {
                           links.map(({id,text, icon},index) => (
                                <Link className={classes.sidebar} key={index} to={id} spy={true} smooth={true} duration={500} offset={-70} activeClass='active'>
                                        <ListItem component="h5">
                                                <span>
                                                        <ListItemIcon>
                                                                {icon}
                                                        </ListItemIcon>
                                                </span>
                                                {text}
                                        </ListItem>
                                </Link>
                          ))
                        }

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
        
        cancelIcon:{
                color:"tomato",
                
        },
        
        sidebar:{
                width:"40vw",
                [theme.breakpoints.down("sm")]:{
                        width:"60vw",
                },
                "& h5":{
                        margin: theme.spacing(10,0,0,4),
                        fontSize:"1,4rem",
                        color:"#333",
                        fontWeight:"bold",
                },
                "& h5:hover":{
                        color:"tomato",
                        cursor:"pointer",
                }

        },
}))
export default Navbar
