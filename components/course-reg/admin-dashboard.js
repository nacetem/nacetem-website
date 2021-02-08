import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import AdminSidebar from './admin-sidebar'
import ElevateAppBar from '../header'
import Head from 'next/head'

export default function AdminDashboard({children}) {
  return (<>
    <ElevateAppBar/>
    <Head>
        <title>Admin (NACETEM)</title>
    </Head>
    <Grid container>

      <Grid item xs={12} lg={3}>
        <AdminSidebar/>
      </Grid>

      <Grid item xs={12} lg={9}>
        <Paper style={{margin:20, padding:20}}>
          {children}          
        </Paper>
      </Grid>
      
    </Grid>   
   
    </>);
}
