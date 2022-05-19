import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import image from 'next/image';
import Head from 'next/head';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { OverviewBanner } from '../../components/dashboard/overview/overview-banner';
import { OverviewCryptoWallet } from '../../components/dashboard/overview/overview-crypto-wallet';
import { OverviewInbox } from '../../components/dashboard/overview/overview-inbox';
import { OverviewLatestTransactions } from '../../components/dashboard/overview/overview-latest-transactions';
import { OverviewPrivateWallet } from '../../components/dashboard/overview/overview-private-wallet';
import { OverviewTotalBalance } from '../../components/dashboard/overview/overview-total-balance';
import { OverviewTotalTransactions } from '../../components/dashboard/overview/overview-total-transactions';
import { ArrowRight as ArrowRightIcon } from '../../icons/arrow-right';
import { Briefcase as BriefcaseIcon } from '../../icons/briefcase';
import { Download as DownloadIcon } from '../../icons/download';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../icons/information-circle-outlined';
import { Reports as ReportsIcon } from '../../icons/reports';
import { Users as UsersIcon } from '../../icons/users';
import { gtm } from '../../lib/gtm';

import { Home as HomeIcon } from '../../icons/home';
import KeywordsByCountry from 'src/components/dashboard/keywordsbycountry/map';
// import eyeIcon from '../../eye.png'

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

  const handleDismissBanner = () => {
    // Update the persistent state
    // globalThis.sessionStorage.setItem('dismiss-banner', 'true');
    setDisplayBanner(false);
  };

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
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <HomeIcon fontSize="large" color='secondary' />
                  <Typography variant="h4" color="secondary">
                    Overview
                  </Typography>
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
                  }}
                >
                  <Box 
                    sx={{
                      position: 'absolute',
                      zIndex: 2,
                      left: 20,
                      top: 10
                    }}
                  >
                    <HomeIcon fontSize='large' />
                    {/* <Image src={eyeIcon} width={44} height={45} /> */}
                  </Box>
                  <Select
                    MenuProps={{
                      style: {
                        color: 'secondary'
                      },
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
                      
                    }}
                  >
                    <MenuItem value="all project">
                      all projects
                    </MenuItem>
                    <MenuItem value="projectX">
                      projectX
                    </MenuItem>
                    <MenuItem value="projectN">
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
