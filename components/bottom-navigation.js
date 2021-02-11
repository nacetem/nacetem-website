import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import EmailIcon from '@material-ui/icons/Email';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router'
import IconButton from '@material-ui/core/IconButton';


export default function BottomMenu() {
  const [value, setValue] = React.useState('recents');
  const router = useRouter()
  return (
    <BottomNavigation style={{marginTop:60}} value={value} onChange={(event, newValue) => { setValue(newValue); return router.push(value) }}
      showLabels>
      <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
        <Grid>
          <IconButton color="primary" aria-label="https://webmail.nacetem.gov.ng">
            <a href="https://webmail.nacetem.gov.ng"><EmailIcon /></a>
          </IconButton>
        </Grid>
        
        <Grid>
          <IconButton color="primary" aria-label="librarian@nacetem.gov.ng">
            <a href="librarian@nacetem.gov.ng"><LocalLibraryIcon /></a>
          </IconButton>
        </Grid>
        <Grid>
          <IconButton color="primary" aria-label="webmaster@nacetem.gov.ng">
            <a href="webmaster@nacetem.gov.ng"><DeveloperModeIcon /></a>
          </IconButton>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}
{/* <NavLink href="http://www.nacetem.gov.ng/webmail">Webmail</NavLink><br/>
<NavLink href="mailto:dg.ceo@nacetem.gov.ng">dg.ceo@nacetem.gov.ng</NavLink><br />
<NavLink href="mailto:librarian@nacetem.gov.ng">librarian@nacetem.gov.ng</NavLink> */}
