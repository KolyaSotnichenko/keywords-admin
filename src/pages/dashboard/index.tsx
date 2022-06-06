import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import {
  Box,

  Container,

  Grid,
  MenuItem,
  Select,

  Typography
} from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
// import { OverviewBanner } from '../../components/dashboard/overview/overview-banner';
// import { OverviewCryptoWallet } from '../../components/dashboard/overview/overview-crypto-wallet';
// import { OverviewInbox } from '../../components/dashboard/overview/overview-inbox';
// import { OverviewLatestTransactions } from '../../components/dashboard/overview/overview-latest-transactions';
// import { OverviewPrivateWallet } from '../../components/dashboard/overview/overview-private-wallet';
// import { OverviewTotalBalance } from '../../components/dashboard/overview/overview-total-balance';
// import { OverviewTotalTransactions } from '../../components/dashboard/overview/overview-total-transactions';
// import { ArrowRight as ArrowRightIcon } from '../../icons/arrow-right';
// import { Briefcase as BriefcaseIcon } from '../../icons/briefcase';
// import { Download as DownloadIcon } from '../../icons/download';
// import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';
// import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../icons/information-circle-outlined';
// import { Reports as ReportsIcon } from '../../icons/reports';
// import { Users as UsersIcon } from '../../icons/users';
import { gtm } from '../../lib/gtm';

import { Home as HomeIcon } from '../../icons/home';
import KeywordsByCountry from 'src/components/dashboard/keywordsbycountry/map';
import Charts from 'src/components/dashboard/keywordsbycountry/charts';
import eyeIcon from '../../../public/eye.png'

const Overview: NextPage = () => {
  const [displayBanner, setDisplayBanner] = useState<boolean>(true);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    // Restore the persistent state from local/session storage
    const value = globalThis.sessionStorage.getItem('dismiss-banner');

    if (value === 'true') {
      // setDisplayBanner(false);
    }
  }, []);

  // const handleDismissBanner = () => {
  //   // Update the persistent state
  //   // globalThis.sessionStorage.setItem('dismiss-banner', 'true');
  //   setDisplayBanner(false);
  // };

  return (
    <>
      <Head>
        <title>
          Dashboard: Overview | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          '@media screen and (max-width: 480px)': {
            py: 0
          }
        }}
      >
        <Box 
          sx={{
          display: 'none', 
          alignItems: 'center', 
          margin: '0 -5px',
          '@media screen and (max-width: 480px)':{
            display: 'flex',
            pl: 8,
            pt: '14px',
            height: '70px',
            background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(66, 141, 255, 0.31) 100%)'
          }
        }}>
          <Box sx={{margin: '0 5px'}}>
            <HomeIcon fontSize="large" color='secondary' />
          </Box>
          <Box sx={{margin: '0 5px'}}>
            <Typography variant="h4" color="secondary"
              sx={{
                fontFamily: 'Jua'
              }}
            >
              Overview
            </Typography>
          </Box>
        </Box>
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item
                sx={{
                  '@media screen and (max-width: 480px)': {
                    width: '100%',
                    display: 'none'
                  }
                }}
              >
                <Box 
                  sx={{
                    display: 'flex', 
                    alignItems: 'center', 
                    margin: '0 -5px',
                  }}>
                  <Box sx={{margin: '0 5px'}}>
                    <HomeIcon fontSize="large" color='secondary' />
                  </Box>
                  <Box sx={{margin: '0 5px'}}>
                    <Typography variant="h4" color="secondary"
                      sx={{
                        fontFamily: 'Jua'
                      }}
                    >
                      Overview
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  m: -1
                }}
              >
                {/* <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Reports
                </Button> */}
                <Box
                  sx={{
                    position: 'relative',
                    '@media screen and (max-width: 480px)': {
                      display: 'none'
                    }
                  }}
                >
                  <Box 
                    sx={{
                      position: 'absolute',
                      zIndex: 2,
                      left: 14,
                      top: 5
                    }}
                  >
                    <Image src={eyeIcon} width={45} height={45} />
                  </Box>
                  <Select
                    MenuProps={{
                      PaperProps: {
                        style: {
                          background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(104, 79, 255, 0) 100%)',
                          filter: 'drop-shadow(7.91971px 7.91971px 15.8394px rgba(0, 0, 0, 0.25))',
                        }
                      }
                    }}
                    sx={{
                      width: '72px',
                      height: '54px',
                      background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)',
                      borderRadius: '40px',
                      '.css-1oibolj-MuiSvgIcon-root-MuiSelect-icon':{
                        display: 'none'
                      },
                      '.css-z51fcz-MuiButtonBase-root-MuiMenuItem-root:hover':{
                        color: 'secondary.main'
                      }
                      
                    }}
                  >
                    <MenuItem value="all project" sx={{fontFamily: 'Jost'}}>
                      all projects
                    </MenuItem>
                    <MenuItem value="projectX" sx={{fontFamily: 'Jost'}}>
                      projectX
                    </MenuItem>
                    <MenuItem value="projectN" sx={{fontFamily: 'Jost'}}>
                      projectN
                    </MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <KeywordsByCountry />
              <Charts />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Overview.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Overview;
