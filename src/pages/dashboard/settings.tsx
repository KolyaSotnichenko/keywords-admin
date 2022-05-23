import { Grid, Typography, Select, MenuItem, Card } from "@mui/material";
import { Box, Container } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { DashboardLayout } from "src/components/dashboard/dashboard-layout";
import { ChartPie } from "src/icons/chart-pie";
import { Truck } from "src/icons/truck";

import keyIcon from '../../../public/key.png'


const Settings: NextPage = () => {
    return (
        <>
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
                    <Box sx={{display: 'flex', alignItems: 'center', margin: '0 -5px'}}>
                      <Box sx={{margin: '0 5px'}}>
                        <Truck fontSize="large" color='secondary' />
                      </Box>
                      <Box sx={{margin: '0 5px'}}>
                        <Typography variant="h4" color="secondary">
                          Settings
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
                  <Card sx={{display: 'flex',justifyContent: 'space-between', p: 5, mt: 5, background: '#linear-gradient(90deg, rgba(66, 141, 255, 0.3) 0%, rgba(177, 79, 255, 0.3) 99.98%);', borderRadius: '30px'}}>
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          margin: '0 -5px'
                        }}
                      >
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                          <ChartPie fontSize="large" color='secondary' />
                        </Box>
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                           <Typography
                              sx={{
                                fontSize: '29px'
                              }}
                            >
                              Complaints
                            </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          margin: '0 -5px'
                        }}
                      >
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                          <Image src={keyIcon} width={36} height={38} />
                        </Box>
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '29px'
                            }}
                          >
                            Settings
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
    )
}

Settings.getLayout = (page) => (
    <AuthGuard>
      <DashboardLayout>
        {page}
      </DashboardLayout>
    </AuthGuard>
  );
  
export default Settings;