import { Grid, Typography, Select, MenuItem, Card, Checkbox, FormGroup, FormControlLabel, Divider, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { NextPage } from "next";
import Image from 'next/image'
import Head from "next/head";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { DashboardLayout } from "src/components/dashboard/dashboard-layout";

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import calendarIcon from '../../../public/calendar.png'
import qIcon from '../../../public/qIcon.png'
import icon1 from '../../../public/icon1.png'
import icon2 from '../../../public/icon2.png'
import pageIcon from '../../../public/page.png'
import exportIcon from '../../../public/export.png'


import { ChartBar } from "src/icons/chart-bar";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const columns: GridColDef[] = [
  { 
    field: 'site',
    headerName: 'Site', 
    width: 188,
    sortable: false,
  },
  { 
    field: 'publisher', 
    headerName: 'Publisher', 
    width: 167,
    sortable: false,
  },
  { 
    field: 'keywords', 
    headerName: 'Keywords', 
    width: 167,
    sortable: false,
  },
  { 
    field: 'text', 
    headerName: 'Titles and text', 
    width: 294,
    sortable: false,
  },
  { 
    field: 'countries', 
    headerName: 'Countries', 
    width: 172,
    sortable: false,
  },
  { 
    field: 'ads', 
    headerName: 'Ads', 
    width: 106,
    sortable: false,
  },
];

const rows = [
  {
    id: 0,
    siteSelect: (
      <>
        <Select>
          <MenuItem value={1}>
            text
          </MenuItem>
          <MenuItem value={2}>
            text
          </MenuItem>
          <MenuItem value={3}>
            text
          </MenuItem>
        </Select>
      </>
    ),
    publisherSelect: (
      <>
        <Select>
          <MenuItem value={1}>
            text
          </MenuItem>
          <MenuItem value={2}>
            text
          </MenuItem>
          <MenuItem value={3}>
            text
          </MenuItem>
        </Select>
      </>
    ),
    keywordsSelect: (
      <>
        <Select>
          <MenuItem value={1}>
            text
          </MenuItem>
          <MenuItem value={2}>
            text
          </MenuItem>
          <MenuItem value={3}>
            text
          </MenuItem>
        </Select>
      </>
    ),
    textSelect: (
      <>
        <Select>
          <MenuItem value={1}>
            text
          </MenuItem>
          <MenuItem value={2}>
            text
          </MenuItem>
          <MenuItem value={3}>
            text
          </MenuItem>
        </Select>
      </>
    ),
    countriesSelect: (
      <>
        <Select>
          <MenuItem value={1}>
            text
          </MenuItem>
          <MenuItem value={2}>
            text
          </MenuItem>
          <MenuItem value={3}>
            text
          </MenuItem>
        </Select>
      </>
    ),
    adsSelect: (
      <>
        <Select>
          <MenuItem value={1}>
            text
          </MenuItem>
          <MenuItem value={2}>
            text
          </MenuItem>
          <MenuItem value={3}>
            text
          </MenuItem>
        </Select>
      </>
    )
  },
  { id: 1,site: 'site', publisher: 'Text', keywords: 'Text', text: 'Text', countries: 'Text', ads: 'Ads'},
  { id: 2,site: 'site', publisher: 'Text', keywords: 'Text', text: 'Text', countries: 'Text', ads: 'Ads'},
  { id: 3,site: 'site', publisher: 'Text', keywords: 'Text', text: 'Text', countries: 'Text', ads: 'Ads'},
  { id: 4,site: 'site', publisher: 'Text', keywords: 'Text', text: 'Text', countries: 'Text', ads: 'Ads'},
  { id: 5,site: 'site', publisher: 'Text', keywords: 'Text', text: 'Text', countries: 'Text', ads: 'Ads'},
];

const Results: NextPage = () => {

  

    return (
        <>
          <Head>
            <title>
              Result
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
                  pl: 2,
                  pt: '14px',
                  height: '70px',
                  background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(66, 141, 255, 0.31) 100%)'
                }
              }}>
                  <Box sx={{margin: '0 5px'}}>
                    <ChartBar fontSize="large" color='secondary' />
                  </Box>
                  <Box sx={{margin: '0 5px'}}>
                    <Typography variant="h4" color="secondary"
                      sx={{
                        fontFamily: 'Jua'
                      }}
                    >
                      Results
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
                        <ChartBar fontSize="large" color='secondary' />
                      </Box>
                      <Box sx={{margin: '0 5px'}}>
                        <Typography variant="h4" color="secondary"
                          sx={{
                            fontFamily: 'Jua'
                          }}
                        >
                          Results
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
                  <Card 
                    sx={{
                      p: 5, 
                      mt: 2, 
                      background: '#222543', 
                      borderRadius: '30px',
                      '@media screen and (max-width: 480px)': {
                        p: 2,
                        background: 'transparent'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '0 -5px',
                        gap: '10px',
                        flexWrap: 'wrap'
                      }}
                    >
                      <Box
                        // sx={{
                        //   margin: '0 5px'
                        // }}
                      >
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '37px',
                            width: '300px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            },
                            '@media screen and (min-width: 1440px) and (max-width: 1600px)': {
                              width: '230px'
                            },
                            '@media screen and (max-width: 480px)': {
                              width: '144px',
                              height: '24'
                            }
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                background: 'linear-gradient(180deg, #B14FFF 0%, #3C90FF 100%)',
                              }
                            }
                          }}
                        >
                          <MenuItem value={1}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '0 -5px'
                              }}
                            >
                              <Box 
                                sx={{ 
                                  margin: '0 5px',
                                  width: '23px',
                                  height: '23px',
                                  '@media screen and (max-width: 480px)': {
                                    width: '14px',
                                    height: '14px'
                                  }
                                }}
                              >
                                <Image src={calendarIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost',
                                    '@media screen and (max-width: 480px)': {
                                      fontSize: '12px'
                                    }
                                  }}
                                >
                                  2022-01-01-2022-12-02
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={2}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '0 -5px'
                              }}
                            >
                              <Box
                                sx={{
                                  margin: '0 5px',
                                  width: '23px',
                                  height: '23px',
                                  '@media screen and (max-width: 480px)': {
                                    width: '14px',
                                    height: '14px'
                                  }
                                }}
                              >
                                <Image src={calendarIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost',
                                    '@media screen and (max-width: 480px)': {
                                      fontSize: '12px'
                                    }
                                  }}
                                >
                                  2022-01-01-2022-12-02
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={3}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '0 -5px'
                              }}
                            >
                              <Box 
                                sx={{ 
                                  margin: '0 5px',
                                  width: '23px',
                                  height: '23px',
                                  '@media screen and (max-width: 480px)': {
                                    width: '14px',
                                    height: '14px'
                                  } 
                                }}
                              >
                                <Image src={calendarIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost',
                                    '@media screen and (max-width: 480px)': {
                                      fontSize: '12px'
                                    }
                                  }}
                                >
                                  2022-01-01-2022-12-02
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        </Select>
                      </Box>
                      <Box 
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <FormGroup>
                          <FormControlLabel control={<Checkbox sx={{
                            width: '28px',
                            height: '28px',
                            fontFamily: 'Jost',
                            border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                            borderRadius: '50%',
                            borderImageSlice: 1,
                            borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            '.css-i4bv87-MuiSvgIcon-root':{
                              // borderRadius: '50%',
                            // borderImageSlice: 1,
                            // borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            // fill: "red"
                            }
                          }} />} label="has brand" />
                        </FormGroup>
                        <Box
                          sx={{
                            cursor: 'pointer',
                            width: '22px',
                            height: '23px',
                            '@media screen and (max-width: 480px)': {
                              width: '13px',
                              heigth: '14px'
                            }
                          }}
                        >
                          <Image src={qIcon} width={22} height={23}/>
                        </Box>
                      </Box>
                      <Box>
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '37px',
                            width: '142px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            },
                            '@media screen and (max-width: 480px)': {
                              width: '135px'
                            }
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                background: 'linear-gradient(180deg, #B14FFF 0%, #3C90FF 100%)',
                              }
                            }
                          }}
                        >
                          <MenuItem value={1}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  All Countries
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={2}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Country 1
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={3}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Country 2
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        </Select>
                      </Box>
                      <Box>
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '37px',
                            width: '174px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            },
                            '@media screen and (max-width: 480px)': {
                              width: '135px'
                            }
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                background: 'linear-gradient(180deg, #B14FFF 0%, #3C90FF 100%)',
                              }
                            }
                          }}
                        >
                          <MenuItem value={1}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Projects(1/514)
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={2}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Projects(2/514)
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={3}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Projects(3/514)
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        </Select>
                      </Box>
                      <Box>
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '37px',
                            width: '300px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            },
                            '@media screen and (min-width: 1440px) and (max-width: 1600px)': {
                              width: '230px'
                            },
                            '@media screen and (max-width: 480px)': {
                              width: '287px'
                            }
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                background: 'linear-gradient(180deg, #B14FFF 0%, #3C90FF 100%)',
                              }
                            }
                          }}
                        >
                          <MenuItem value={1}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Common:(9/23),Report:(0/2)
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={2}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Common:(9/23),Report:(0/2)
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                          <MenuItem value={3}>
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Common:(9/23),Report:(0/2)
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        </Select>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '8px',
                          width: '76px',
                          height: '38px',
                          background: 'linear-gradient(180deg, #B14FFF 0%, #2D80FF 100%)',
                          pt: 1
                        }}
                      >
                        <Box>
                          <Image src={icon1} width={32} height={30}/>
                        </Box>
                        <Box>
                          <Image src={icon2} width={32} height={30}/>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        mt: '26px',
                        mb: '24px',
                        height: '1px',
                        width: '100%',
                        backgroundColor: '#ffffff'
                      }}
                    >
                    </Box> 
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0 -5px'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        <Box sx={{margin: '0 5px'}}>
                          <Typography
                            sx={{
                              fontFamily: 'Jost'
                            }}
                          >
                            on page
                          </Typography>
                        </Box>
                        <Box sx={{margin: '0 5px'}}>
                          <Select
                            IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                            sx={{
                              height: '25px',
                              width: '80px',
                              '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                                border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                                borderRadius: '7px',
                                borderImageSlice: 1,
                                borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                              },
                              // '@media screen and (min-width: 1440px) and (max-width: 1600px)': {
                              //   width: '230px'
                              // }
                              '.css-3gw1fi-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                                pr: '10px !important'
                              },
                            }}
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  background: 'linear-gradient(180deg, #B14FFF 0%, #3C90FF 100%)',
                                }
                              }
                            }}
                          >
                            <MenuItem value={1}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  margin: '0 -2px'
                                }}
                              >
                                <Box sx={{ margin: '0 2px' }}>
                                  <Image src={pageIcon} width={12} height={12} />
                                </Box>
                                <Box sx={{ margin: '0 2px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      fontFamily: 'Jost'
                                    }}
                                  >
                                    10
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                            <MenuItem value={2}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  margin: '0 -2px'
                                }}
                              >
                                <Box
                                  sx={{
                                    margin: '0 2px',
                                  }}
                                >
                                  <Image src={pageIcon} width={12} height={12} />
                                </Box>
                                <Box sx={{ margin: '0 2px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      fontFamily: 'Jost'
                                    }}
                                  >
                                    20
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                            <MenuItem value={3}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  margin: '0 -2px'
                                }}
                              >
                                <Box sx={{ margin: '0 2px' }}>
                                  <Image src={pageIcon} width={12} height={12} />
                                </Box>
                                <Box sx={{ margin: '0 2px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      fontFamily: 'Jost'
                                    }}
                                  >
                                    30
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                          </Select>
                        </Box>
                        <Box sx={{margin: '0 5px'}}>
                          <Select
                            IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                            sx={{
                              height: '25px',
                              width: '110px',
                              '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                                border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                                borderRadius: '7px',
                                borderImageSlice: 1,
                                borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                              },
                              // '@media screen and (min-width: 1440px) and (max-width: 1600px)': {
                              //   width: '230px'
                              // }
                              '.css-3gw1fi-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                                pr: '10px !important'
                              },
                            }}
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  background: 'linear-gradient(180deg, #B14FFF 0%, #3C90FF 100%)',
                                }
                              }
                            }}
                          >
                            <MenuItem value={1}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  margin: '0 -2px'
                                }}
                              >
                                <Box sx={{ margin: '0 2px' }}>
                                  <Image src={exportIcon} width={12} height={12} />
                                </Box>
                                <Box sx={{ margin: '0 2px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      fontFamily: 'Jost'
                                    }}
                                  >
                                    Export
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                            <MenuItem value={2}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  margin: '0 -2px'
                                }}
                              >
                                <Box
                                  sx={{
                                    margin: '0 2px',
                                  }}
                                >
                                  <Image src={exportIcon} width={12} height={12} />
                                </Box>
                                <Box sx={{ margin: '0 2px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      fontFamily: 'Jost'
                                    }}
                                  >
                                    Export
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                            <MenuItem value={3}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  margin: '0 -2px'
                                }}
                              >
                                <Box sx={{ margin: '0 2px' }}>
                                  <Image src={exportIcon} width={12} height={12} />
                                </Box>
                                <Box sx={{ margin: '0 2px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      fontFamily: 'Jost'
                                    }}
                                  >
                                    Export
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                          </Select>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          margin: '0 -5px'
                        }}
                      >
                        <Box sx={{margin: '0 5px'}}>
                          <Typography
                            sx={{
                              fontFamily: 'Jost'
                            }}
                          >
                            Showing
                          </Typography>
                        </Box>
                        <Box sx={{margin: '0 5px'}}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '18px',
                              fontFamily: 'Jost'
                            }}
                          >
                            1-20
                          </Typography>
                        </Box>
                        <Box sx={{margin: '0 5px'}}>
                          <Typography
                            sx={{
                              fontFamily: 'Jost'
                            }}
                          >
                            of
                          </Typography>
                        </Box>
                        <Box sx={{margin: '0 5px'}}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '18px',
                              fontFamily: 'Jost'
                            }}
                          >
                            258
                          </Typography>
                        </Box>
                        <Box sx={{margin: '0 5px'}}>
                          <Typography
                            sx={{
                              fontFamily: 'Jost'
                            }}
                          >
                            items
                          </Typography>
                        </Box>
                      </Box> 
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: '400px',
                        mt: '24px'
                      }}
                    >
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        sx={{
                            border: '1px solid #ffffff',
                            borderRadius: '7px',
                            '.MuiDataGrid-columnSeparator': {
                              display: 'none',
                            },
                            '.MuiDataGrid-cell':{
                              border: 'none'
                            },
                            '.MuiDataGrid-columnHeaders':{
                              border: 'none'
                            },
                            '.MuiDataGrid-footerContainer': {
                              border: 'none'
                            },
                            '.MuiDataGrid-menuIcon': {
                              display: 'none'
                            },
                            '.MuiDataGrid-footerContainer': {
                              display: 'none'
                            },
                            '.MuiDataGrid-columnHeaderTitle': {
                              fontSize: '19px',
                              fontWeight: 700,
                              fontFamily: 'Jost'
                            },
                            '.MuiDataGrid-columnHeader:nth-child(even)': {
                              background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%)'
                            },
                            '.MuiDataGrid-cell:nth-child(even)': {
                              background: 'linear-gradient(90deg, rgba(45, 128, 255, 0.3) -0.19%, rgba(190, 53, 255, 0.3) 99.81%)'
                            }
                        }}
                      />
                    </Box>
                  </Card>
                </Grid>
                <Grid item md={12} xs={12}>
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
                            <Typography
                              sx={{
                                fontFamily: 'Jost'
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
                                border: 'double 2px transparent',
                                borderRadius: '80px',
                                borderImageSlice: 1,
                                borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'content-box, border-box',
                              },
                              borderRadius: '50px',
                              border: '2px solid transparent',
                              background: 'linear-gradient(to bottom, #3C90FF, #BE35FF) border-box',
                              // mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                              maskComposite: "exclude",
                              '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                              '-webkit-mask-composite': 'xor'
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
                              },
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
                            fontFamily: 'Jost'
                          }}
                        >
                          out of 151
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
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
    )
}

Results.getLayout = (page) => (
    <AuthGuard>
      <DashboardLayout>
        {page}
      </DashboardLayout>
    </AuthGuard>
  );
  
export default Results;