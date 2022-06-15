import { Box, Card, Container, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { DashboardLayout } from "src/components/dashboard/dashboard-layout";
import KeywordsByCountry from "src/components/dashboard/keywordsbycountry/map";
import Charts from "../browse/charts";

import { ChartPie as ChartPieIcon } from "src/icons/chart-pie";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Head from "next/head";


function createData1(
  domain: string,
  project: string,
  key: string,
  data: string,
  country: string,
) {
  return { domain, project, key, data, country };
}

function createData2(
  domain: string,
  count_reports: number
) {
  return { domain, count_reports };
}

const rows1 = [
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  createData1('Domain', 'Project', 'Key', 'Data', 'Country'),
  
];

const rows2 = [
  createData2('Domain', 0),
  createData2('Domain', 0),
  createData2('Domain', 0),
  createData2('Domain', 0),
  createData2('Domain', 0),
  createData2('Domain', 0),
  createData2('Domain', 0),
  createData2('Domain', 0),
]

const Complaints: NextPage = () => {
    return (
        <>
          <Head>
            <title>
              Complaints
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
                pl: 11,
                pt: '14px',
                height: '70px',
                background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(66, 141, 255, 0.31) 100%)'
              }
            }}>
            <Box sx={{margin: '0 5px'}}>
              <ChartPieIcon fontSize="large" color='secondary' />
            </Box>
            <Box sx={{margin: '0 5px'}}>
              <Typography variant="h4" color="secondary"
                sx={{
                  fontFamily: 'Jua'
                }}
              >
                Complaints
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
                      display: 'none'
                    }
                  }}
                >
                  <Box sx={{display: 'flex', alignItems: 'center', margin: '0 -5px'}}>
                    <Box sx={{margin: '0 5px'}}>
                      <ChartPieIcon fontSize="large" color='secondary' />
                    </Box>
                    <Box sx={{margin: '0 5px'}}>
                      <Typography variant="h4" color="secondary"
                        sx={{
                          fontFamily: 'Jua'
                        }}
                      >
                        Complaints
                      </Typography>
                    </Box>
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
                sx={{
                  '@media screen and (max-width: 480px)':{
                    display: 'none'
                  }
                }}
              >
                <Card sx={{p: 5, mt: 5, background: '#222543', borderRadius: '30px'}}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650, border: '1px solid white' }} size="small" aria-label="a dense table">
                    <TableHead sx={{border: '1px solid white'}}>
                      <TableRow sx={{border: '1px solid white'}}>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}}><Typography sx={{color: '#ffffff', fontWeight: 700}}>DOMAIN</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, #3C90FF 0%, #BE35FF 100%);'}} align="left"><Typography sx={{color: 'secondary.main', fontWeight: 700}}>PROJECT</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="left"><Typography sx={{color: '#ffffff', fontWeight: 700}}>KEY</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="left"><Typography sx={{color: '#ffffff', fontWeight: 700}}>DATA</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="left"><Typography sx={{color: '#ffffff', fontWeight: 700}}>COUNTRY</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows1.map((row) => (
                        <TableRow
                          key={row.domain}
                          sx={{ 
                            '&:last-child td, &:last-child th': {
                               border: 0 
                            }, 
                            '&:hover': {
                              background: 'rgba(60, 144, 255, 0.3);'
                            },
                            '@media screen and (max-width: 480px)': {
                              '.css-1s7p6hx-MuiTableRow-root': {
                                background: 'red'
                              }
                            }  
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.domain}
                          </TableCell>
                          <TableCell align="left">{row.project}</TableCell>
                          <TableCell align="left">{row.key}</TableCell>
                          <TableCell align="left">{row.data}</TableCell>
                          <TableCell align="left">{row.country}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      m: '0 -10px'
                    }}
                  >
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronLeft fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography>
                        page
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '83px',
                        height: '35px',
                        m: '0 10px',
                        '& .css-9vjw2o-MuiInputBase-root-MuiOutlinedInput-root': {
                          height: '35px',
                        },
                        '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                          border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                          borderRadius: '7px',
                          borderImageSlice: 1,
                          borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                        }
                      }}
                    >
                      <TextField
                        id="outlined-number"
                        // label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{
                          ".MuiOutlinedInput-root":{
                            color: 'secondary.main'
                          }
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography>
                        out of 22
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronRight fontSize="large" />
                    </Box>
                  </Box>
                </Box>
                </Card>
                <Card sx={{p: 5, mt: 5, background: '#222543', borderRadius: '30px'}}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650, border: '1px solid white' }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow sx={{border: '1px solid white'}}>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}}><Typography sx={{color: '#ffffff', fontWeight: 700}}>DOMAIN</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="center"><Typography sx={{color: '#ffffff', fontWeight: 700}}>COUNT REPORTS</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows2.map((row) => (
                        <TableRow
                          key={row.domain}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': {background: 'rgba(60, 144, 255, 0.3);'} }}
                        >
                          <TableCell component="th" scope="row">
                            {row.domain}
                          </TableCell>
                          <TableCell align="center">{row.count_reports}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      m: '0 -10px',
                      '& .css-9vjw2o-MuiInputBase-root-MuiOutlinedInput-root': {
                        height: '35px',
                      },
                      '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                        border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                        borderRadius: '7px',
                        borderImageSlice: 1,
                        borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronLeft fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography>
                        page
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '83px',
                        height: '35px',
                        m: '0 10px',
                      }}
                    >
                      <TextField
                        id="outlined-number"
                        // label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{
                          ".MuiOutlinedInput-root":{
                            color: 'secondary.main'
                          }
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography>
                        out of 11
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronRight fontSize="large" />
                    </Box>
                  </Box>
                </Box>
                </Card>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{
                  '@media screen and (min-width: 480px)':{
                    display: 'none'
                  }
                }}
              >
                <Box sx={{mt: 3}}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650, border: '1px solid white' }} size="small" aria-label="a dense table">
                    <TableHead sx={{border: '1px solid white'}}>
                      <TableRow sx={{border: '1px solid white'}}>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}}><Typography sx={{color: '#ffffff', fontWeight: 700, '@media screen and (max-width: 480px)': {fontSize: '16px'}}}>DOMAIN</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, #3C90FF 0%, #BE35FF 100%);'}} align="left"><Typography sx={{color: 'secondary.main', fontWeight: 700, '@media screen and (max-width: 480px)': {fontSize: '16px'}}}>PROJECT</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="left"><Typography sx={{color: '#ffffff', fontWeight: 700, '@media screen and (max-width: 480px)': {fontSize: '16px'}}}>KEY</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="left"><Typography sx={{color: '#ffffff', fontWeight: 700, '@media screen and (max-width: 480px)': {fontSize: '16px'}}}>DATA</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="left"><Typography sx={{color: '#ffffff', fontWeight: 700, '@media screen and (max-width: 480px)': {fontSize: '16px'}}}>COUNTRY</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows1.map((row) => (
                        <TableRow
                          key={row.domain}
                          sx={{ 
                            '&:last-child td, &:last-child th': { 
                              border: 0 
                            }, 
                            '&:hover': {
                              background: 'rgba(60, 144, 255, 0.3);'
                            },
                            '@media screen and (max-width: 480px)': {
                              backgroundColor: '#0c0f19'
                            } 
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.domain}
                          </TableCell>
                          <TableCell align="left">{row.project}</TableCell>
                          <TableCell align="left">{row.key}</TableCell>
                          <TableCell align="left">{row.data}</TableCell>
                          <TableCell align="left">{row.country}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      m: '0 -10px'
                    }}
                  >
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer',
                        '@media screen and (max-width: 480px)': {
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }
                      }}
                    >
                      <ChevronLeft fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography
                        sx={{
                          '@media screen and (max-width: 480px)': {
                            fontSize: '16px'
                          }
                        }}
                      >
                        page
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '83px',
                        height: '35px',
                        m: '0 10px',
                        '& .css-9vjw2o-MuiInputBase-root-MuiOutlinedInput-root': {
                          height: '35px',
                        },
                        '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                          border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                          borderRadius: '7px',
                          borderImageSlice: 1,
                          borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                        }
                      }}
                    >
                      <TextField
                        id="outlined-number"
                        // label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{
                          ".MuiOutlinedInput-root":{
                            color: 'secondary.main'
                          }
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography
                        sx={{
                          '@media screen and (max-width: 480px)': {
                            fontSize: '16px'
                          }
                        }}
                      >
                        out of 22
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer',
                        '@media screen and (max-width: 480px)': {
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }
                      }}
                    >
                      <ChevronRight fontSize="large" />
                    </Box>
                  </Box>
                </Box>
                </Box>
                <Box sx={{mt: 3}}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650, border: '1px solid white' }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow sx={{border: '1px solid white'}}>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}}><Typography sx={{color: '#ffffff', fontWeight: 700}}>DOMAIN</Typography></TableCell>
                        <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="center"><Typography sx={{color: '#ffffff', fontWeight: 700}}>COUNT REPORTS</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows2.map((row) => (
                        <TableRow
                          key={row.domain}
                          sx={{ 
                            '&:last-child td, &:last-child th': { 
                              border: 0 
                            }, 
                            '&:hover': {
                              background: 'rgba(60, 144, 255, 0.3);'
                            },
                            '@media screen and (max-width: 480px)': {
                              backgroundColor: '#0c0f19'
                            }  
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.domain}
                          </TableCell>
                          <TableCell align="center">{row.count_reports}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      m: '0 -10px',
                      '& .css-9vjw2o-MuiInputBase-root-MuiOutlinedInput-root': {
                        height: '35px',
                      },
                      '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                        border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                        borderRadius: '7px',
                        borderImageSlice: 1,
                        borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer',
                        '@media screen and (max-width: 480px)': {
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }
                      }}
                    >
                      <ChevronLeft fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography
                        sx={{
                          '@media screen and (max-width: 480px)': {
                            fontSize: '16px'
                          }
                        }}
                      >
                        page
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '83px',
                        height: '35px',
                        m: '0 10px'
                      }}
                    >
                      <TextField
                        id="outlined-number"
                        // label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{
                          ".MuiOutlinedInput-root":{
                            color: 'secondary.main'
                          }
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        m: '0 10px'
                      }}
                    >
                      <Typography
                        sx={{
                          '@media screen and (max-width: 480px)': {
                            fontSize: '16px'
                          }
                        }}
                      >
                        out of 11
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '72px',
                        background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%);',
                        m: '0 10px',
                        cursor: 'pointer',
                        '@media screen and (max-width: 480px)': {
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }
                      }}
                    >
                      <ChevronRight fontSize="large" />
                    </Box>
                  </Box>
                </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        </>
    )
}

Complaints.getLayout = (page) => (
    <AuthGuard>
      <DashboardLayout>
        {page}
      </DashboardLayout>
    </AuthGuard>
  );
  
export default Complaints;