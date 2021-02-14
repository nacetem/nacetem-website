import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

 
export default class FbPage extends Component {
  render() {
    return (
      <FacebookProvider appId="300067793354315">
        <Page href="https://www.facebook.com/facebook" tabs="timeline" />
      </FacebookProvider> 
      // <Paper ellevation={3} style={{width:345,maxHeight:800,backgroundColor:"mediumorchid"}}>
      // <h1>FB</h1> 
      // </Paper>  
    );
  }
}