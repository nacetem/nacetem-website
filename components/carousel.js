import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import maincss from '../styles/main.module.css'



export default function Slider(props)
{
    var items = [
        
        {
           name: "National Centre for Technology Management",
            description: "Managing Technology for Sustainable Development",
            imgsrc:"images/slide1bg.jpg",
            readmore:"Read More",
            // backgroundColor: '#ffe084'
        },
        {
            name: "Nigeria's Foremost Institution in Science, Technology and Innovation (STI) Management",
            description: "Explore our evidenced-based STI resaeaches and data",
            imgsrc:"images/slider1.png",
            readmore:"Explore",
            // backgroundColor: '#d9d9d9'
            
        },
        {
            name: "Policy Research Projects Aimed at assisting Policy Makers in STI Management Activities ",
            description: "and Provides Evidence-based Advice in the Formulation of STI Policy for Sustainable Development",
            imgsrc:"images/crousel_img1.jpg",
            readmore:"Detailed information",
            // backgroundColor: '#ff7c7c'
        },
        {
            name: "Capacity Building Programmes",
            description: "Specifically Designed to Address Knowledge Gaps Existing Within the National Innovation System",
            imgsrc:"images/slide2bg.jpg",
            readmore:"Enrol Now",
            // backgroundColor: '#ffb6b9'
        },
    ]
 
    return (
        <Carousel interval={8000} animation={"fade"}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}



function Item(props){
    const { backgroundColor, imgsrc, name, description, readmore} = props.item;
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex', /* or inline-flex */
            '& > *': {
                // margin: theme.spacing(5),
                // width: theme.spacing(60),
                // height: theme.spacing(60),
            },
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '800',
            maxHeight: '300',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          content: {
            position: 'absolute', /* Position the background text */
            bottom: 0, /* At the bottom. Use top:0 to append it to the top */
            background: '#d2a679', /* Fallback color */
            background: 'rgba(0, 0, 0, 0.5)', /* Black background with 0.5 opacity */
            color: '#f1f1f1', /* Grey text */
            width: '100%', /* Full width */
            padding: '20px', /* Some padding */
            marginBottom: '20px',
          },
        card: {
            // backgroundColor,
            borderRadius: 5,
            // padding: '75px 50px',
            // margin: '0px 25px',
            
            width: 700,
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        card1: {
            // backgroundColor: '#ffe084',
            borderRadius: 5,
            // padding: '35px 20px',
            // margin: '0px 25px',
            width: 1280,
            // boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flex:1
        },
        card2: {
            // backgroundColor,
            borderRadius: 5,
            padding: theme.spacing(2),
            // margin: '5%',
            // width: 500,
            // height: 300,
            // boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            flex:1
        },
        ml:{
            marginLeft:30,
        },
    }));
    const classes = useStyles(); 
    return (
        <div className={classes.container}>
            <img src={imgsrc}  alt={description} className={maincss.carousel_image}/>
            {/* <div id='logo' style={{background: `url(${imgsrc})`, width: "100%", backgroundRepeat: 'no-repeat'}}></div> */}
            <div className={classes.content}>
                <Typography variant="h4" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {description}
                </Typography>
                <Button variant="contained" color="secondary">{readmore}</Button> 
            </div>
        </div>
    )
}