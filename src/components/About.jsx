import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const About = ({title, id, dark}) => {
        const classes = useStyles();
        return (
                <div className={`${classes.section} ${dark && classes.sectiondark}`}>
                       <div className={classes.sectioncontent} id={id}>
                               <Typography variant='h3'>{title}</Typography>
                       </div>
                </div>
        )
}


/**Estilos */
const useStyles = makeStyles((theme) => ({
  section: {
          minHeight: "100vh",
  },

  sectiondark:{
          background:"#333",
          color:"#fff",
  },
  sectioncontent:{
          maxWidth:'80vw',
          margin:'0 auto',
  }
}))
export default About
