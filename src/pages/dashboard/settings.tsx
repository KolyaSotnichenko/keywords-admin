import { Grid, Typography, Select, MenuItem, Card, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch, Tooltip, makeStyles } from "@mui/material";
import { Box, Container } from "@mui/system";
import Collapse from '@mui/material/Collapse';
import { NextPage } from "next";
import Image from "next/image";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { DashboardLayout } from "src/components/dashboard/dashboard-layout";
import { ChartPie } from "src/icons/chart-pie";
import { Truck } from "src/icons/truck";

import keyIcon from '../../../public/key.png'
import folderIcon from '../../../public/folder.png'
import exelIcon from '../../../public/exel.png'
import geoIcon from '../../../public/geo.png'
import addIcon from '../../../public/add.png'
import deleteIcon from '../../../public/delete.png'
import pencilIcon from '../../../public/pencil.png'
import worldIcon from '../../../public/world.png'
import documentIcon from '../../../public/document.png'
import tooltipImage from '../../../public/tooltipImage.png'
import comp from '../../../public/static/comp.png'
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import Head from "next/head";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {KeyIcon} from '../../icons/key'


function createData(
  project: string,
  key: number,
  geo: string,
) {
  return { project, key, geo};
}

const rows = [
  createData('Project', 123, 'geo',),
  createData('Project', 123, 'geo',),
  createData('Project', 123, 'geo',),
  createData('Project', 123, 'geo',),
  createData('Project', 123, 'geo',),
]

function createComplaintsData(
  website: string,
  geo: string,
  project: string,
  notes: string
) {
  return {website, geo, project, notes}
}

const rowsComplaints = [
  createComplaintsData('Website', 'geo', 'project', 'notes'),
  createComplaintsData('Website', 'geo', 'project', 'notes'),
  createComplaintsData('Website', 'geo', 'project', 'notes'),
  createComplaintsData('Website', 'geo', 'project', 'notes'),
]

const Settings: NextPage = () => {

  const [activeSettings, setActiveSettings] = useState<boolean>(true)
  const [checked, setChecked] = useState<boolean>(true)

  const switchHandler = (event) => {
    setChecked(event.target.checked)
  }

  

    return (
        <>
          <Head>
            <title>
              Settings
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
                <Truck fontSize="large" color='secondary' />
              </Box>
              <Box sx={{margin: '0 5px'}}>
                <Typography variant="h4" color="secondary"
                  sx={{
                    fontFamily: 'Jua'
                  }}
                >
                  Settings
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
                        <Truck fontSize="large" color='secondary' />
                      </Box>
                      <Box sx={{margin: '0 5px'}}>
                        <Typography variant="h4" color="secondary"
                          sx={{
                            fontFamily: 'Jua'
                          }}
                        >
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
                  <Card 
                    sx={{ 
                      height: '75px',
                      display: 'flex',
                      justifyContent: 'space-between', 
                      mt: 5, 
                      background: 'linear-gradient(90deg, rgba(66, 141, 255, 0.3) 0%, rgba(177, 79, 255, 0.3) 99.98%);', 
                      borderRadius: '30px',
                      '@media screen and (max-width: 480px)': {
                        height: '42px',
                        mt: 2
                      }
                    }}
                  >
                    <Box
                      onClick={() => setActiveSettings(false)}
                      sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        p: 2,
                        cursor: 'pointer',
                        background: !activeSettings ? 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)' : 'none',
                        boxShadow: !activeSettings ? '3.24394px 3.24394px 3.24394px rgba(0, 0, 0, 0.5)' : 'none',
                        '@media screen and (max-width: 480px)': {
                          p: 0
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '0 -5px'
                        }}
                      >
                        <Box
                          sx={{
                            width: '45px',
                            height: '44px',
                            margin: '0 5px',
                            display: 'flex',
                            alignItems: 'center',
                            '.MuiSvgIcon-root': {
                              color: 'secondary', 
                            },
                            '@media screen and (max-width: 480px)': {
                              width: '36px',
                              height: '35px',
                              pt: '5px',
                              pl: '10px'
                            }
                          }}
                        >
                          {/* <ChartPie 
                            fontSize="large" 
                            color={!activeSettings ? 'secondary' : 'white'}
                          /> */}
                          <Image src={comp} />
                        </Box>
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                           <Typography
                              color={!activeSettings ? 'secondary.main' : '#ffffff'}
                              sx={{
                                fontSize: '29px',
                                fontFamily: 'Jost',
                                '@media screen and (max-width: 480px)': {
                                  fontSize: '23px',
                                }
                              }}
                            >
                              Complaints
                            </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                    onClick={() => setActiveSettings(true)}
                      sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        p: 2,
                        cursor: 'pointer',
                        background: activeSettings ? 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)' : 'none',
                        boxShadow: activeSettings ? '3.24394px 3.24394px 3.24394px rgba(0, 0, 0, 0.5)' : 'none',
                        '@media screen and (max-width: 480px)': {
                          p: 0
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '0 -5px'
                        }}
                      >
                        <Box
                          sx={{
                            width: '45px',
                            height: '44px',
                            margin: '0 5px',
                            display: 'flex',
                            alignItems: 'center',
                            '@media screen and (max-width: 480px)': {
                              width: '36px',
                              height: '35px',
                              pt: '5px',
                              // pl: '10px'
                            }
                          }}
                        >
                          <Image src={keyIcon} />
                          {/* <KeyIcon fontSize="large" color={activeSettings ? 'secondary' : 'white'}  /> */}
                        </Box>
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                          <Typography
                            color={activeSettings ? 'secondary.main' : '#ffffff'}
                            sx={{
                              fontSize: '29px',
                              fontFamily: 'Jost',
                              '@media screen and (max-width: 480px)': {
                                fontSize: '23px'
                              }
                            }}
                          >
                            Settings
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                  {activeSettings && (
                    <>
                    <Card 
                      sx={{ 
                        justifyContent: 'space-between', 
                        p: 5, 
                        mt: 5, 
                        background: '#linear-gradient(90deg, rgba(66, 141, 255, 0.3) 0%, rgba(177, 79, 255, 0.3) 99.98%);', 
                        borderRadius: '30px',
                        '@media screen and (max-width: 480px)': {
                          p: 0,
                          background: 'transparent',
                          borderRadius: 0,
                          height: '20%'
                        } 
                      }}
                    >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: '32px',
                        fontFamily: 'Jost',
                        '@media screen and (max-width: 480px)': {
                          fontSize: '21px'
                        }
                      }}
                    >
                      Add keys
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'none',
                          '@media screen and (max-width: 480px)': {
                            display: 'flex',
                            flexDirection: 'column',
                          }
                        }}
                      >
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '41px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                              '.MuiMenuItem-gutters:hover':{
                                color: 'secondary.main'
                              }
                            },
                            '@media screen and (max-width: 480px)': {
                              height: '27px',
                            }
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                background: 'linear-gradient(180deg, rgba(177, 79, 255, 1.0) 0%, rgba(160, 144, 255, 1.0) 100%)',
                                filter: 'drop-shadow(7.91971px 7.91971px 15.8394px rgba(0, 0, 0, 0.25))',
                              }
                            }
                          }}
                        >
                          <MenuItem value={1}>
                            <Tooltip 
                              title={
                                <>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      margin: '0 -5px'
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: '205px',
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: '14px',
                                          fontFamily: 'Jost'
                                        }}
                                      >
                                      BetAmo Обзор казино и бонусы  (это заголовок)
                                      BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйте захватывающие слоты и другие игры! Бонусы и акции казино. К сожалению, ..BetAmo Обзор казино и бонусы  (это заголовок)
                                      BetAmo было основано в . Имеет лицензии от: 

                                      ttttttttttttttxshsh
                                      hrhrhr
                                      hrjry
                                      sdjtyh
                                      dhd5
                                      BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйтонусы и акции казино. К сожалению, ..
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Image src={tooltipImage} width={97} height={512} />
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Image src={tooltipImage} width={97} height={512} />
                                    </Box>
                                  </Box>
                                </>
                              }
                              placement="right-end"
                            >
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
                                      width: '15px',
                                      height: '15px'
                                    } 
                                  }}
                                >
                                  <Image src={folderIcon} width={23} height={23} />
                                </Box>
                                <Box sx={{ margin: '0 5px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700,
                                      fontFamily: 'Jost',
                                      '@media screen and (max-width: 480px)': {
                                        fontSize: '13px'
                                      }
                                    }}
                                  >
                                    Project 1
                                  </Typography>
                                </Box>
                              </Box>
                            </Tooltip>
                          </MenuItem>
                          <MenuItem value={2}>
                          <Tooltip 
                              title={
                                <>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      margin: '0 -5px'
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: '205px',
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: '14px',
                                          fontFamily: 'Jost'
                                        }}
                                      >
                                      BetAmo Обзор казино и бонусы  (это заголовок)
                                      BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйте захватывающие слоты и другие игры! Бонусы и акции казино. К сожалению, ..BetAmo Обзор казино и бонусы  (это заголовок)
                                      BetAmo было основано в . Имеет лицензии от: 

                                      ttttttttttttttxshsh
                                      hrhrhr
                                      hrjry
                                      sdjtyh
                                      dhd5
                                      BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйтонусы и акции казино. К сожалению, ..
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Image src={tooltipImage} width={97} height={512} />
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Image src={tooltipImage} width={97} height={512} />
                                    </Box>
                                  </Box>
                                </>
                              }
                              placement="right-end"
                            >
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
                                      width: '15px',
                                      height: '15px'
                                    } 
                                  }}
                                >
                                  <Image src={folderIcon} width={23} height={23} />
                                </Box>
                                <Box sx={{ margin: '0 5px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700,
                                      fontFamily: 'Jost',
                                      '@media screen and (max-width: 480px)': {
                                        fontSize: '13px'
                                      }
                                    }}
                                  >
                                    Project 2
                                  </Typography>
                                </Box>
                              </Box>
                            </Tooltip>
                          </MenuItem>
                          <MenuItem value={3}>
                          <Tooltip 
                              title={
                                <>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      margin: '0 -5px'
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: '205px',
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: '14px',
                                          fontFamily: 'Jost'
                                        }}
                                      >
                                      BetAmo Обзор казино и бонусы  (это заголовок)
                                      BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйте захватывающие слоты и другие игры! Бонусы и акции казино. К сожалению, ..BetAmo Обзор казино и бонусы  (это заголовок)
                                      BetAmo было основано в . Имеет лицензии от: 

                                      ttttttttttttttxshsh
                                      hrhrhr
                                      hrjry
                                      sdjtyh
                                      dhd5
                                      BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйтонусы и акции казино. К сожалению, ..
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Image src={tooltipImage} width={97} height={512} />
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Image src={tooltipImage} width={97} height={512} />
                                    </Box>
                                  </Box>
                                </>
                              }
                              placement="right-end"
                            >
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
                                      width: '15px',
                                      height: '15px'
                                    }  
                                  }}
                                >
                                  <Image src={folderIcon} width={23} height={23} />
                                </Box>
                                <Box sx={{ margin: '0 5px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700,
                                      fontFamily: 'Jost',
                                      '@media screen and (max-width: 480px)': {
                                        fontSize: '13px'
                                      }
                                    }}
                                  >
                                    Project 3
                                  </Typography>
                                </Box>
                              </Box>
                            </Tooltip>
                          </MenuItem>
                        </Select>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            height: '45px',
                            widht: '394px',
                            alignItems: 'center',
                            border: '1px solid',
                            borderRadius: '7px',
                            borderImageSlice: 1,
                            borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            margin: '0 -5px',
                            '@media screen and (max-width: 480px)': {
                              mt: 2,
                              ml: 0,
                              width: '180px'
                            }
                          }}
                        >
                          <Box sx={{ margin: '0 5px' }}>
                            <Image src={keyIcon} width={24} height={24} />
                          </Box>
                          <Box
                            sx={{
                              margin: '0 5px',
                              '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
                                width: '296px',
                              },
                              '@media screen and (max-width: 480px)': {
                                '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
                                  width: '100px',
                                  heigth: '33px'
                                },
                              },
                              '& .css-j4fmve-MuiInputBase-root-MuiInput-root:before': {
                                border: 'none'
                              },
                              '& .css-j4fmve-MuiInputBase-root-MuiInput-root:after': {
                                border: 'none'
                              },
                            }}
                          >
                            <TextField id="standard-basic" variant="standard" />
                          </Box>
                          <Box
                            sx={{
                              // display: 'flex',
                              width: '26px',
                              height: '26px',
                              textAlign: 'center',
                              pt: '4px',
                              borderRadius: '50%',
                              background: 'linear-gradient(180deg, #B14FFF 0%, #2D80FF 100%);',
                              margin: '0 5px',
                            }}
                          >
                            <Image src={exelIcon} width={17} height={17} />
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'none',
                          margin: '0 -10px',
                          '@media screen and (max-width: 480px)': {
                            display: 'flex',
                            flexDirection: 'column',
                          }
                        }}
                      >
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '41px',
                            width: '198px',
                            margin: '0 10px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            },
                            '@media screen and (max-width: 480px)': {
                              height: '27px',
                              width: '110px'
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
                              <Box sx={{ margin: '0 5px' }}>
                                <Image src={geoIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost',
                                    '@media screen and (max-width: 480px)': {
                                      fontSize: '13px'
                                    }
                                  }}
                                >
                                  GEO 1
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
                                }}
                              >
                                <Image src={geoIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost',
                                    '@media screen and (max-width: 480px)': {
                                      fontSize: '13px'
                                    }
                                  }}
                                >
                                  GEO 2
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
                              <Box sx={{ margin: '0 5px' }}>
                                <Image src={geoIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost',
                                    '@media screen and (max-width: 480px)': {
                                      fontSize: '13px'
                                    }
                                  }}
                                >
                                  GEO 3
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        </Select>
                        <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: '171px',
                          height: '45px',
                          background: 'linear-gradient(90deg, #3CFFF9 0.36%, #00FF66 100.36%);',
                          borderRadius: '9px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 -5px',
                          '@media screen and (max-width: 480px)': {
                            width: '90px',
                            height: '30px',
                            mt: '25px',
                            ml: 2
                          }
                        }}
                      >
                        <Box
                          sx={{
                            margin: '0 5px',
                            pt: 1,
                            width: '23px',
                            height: '23px',
                            '@media screen and (max-width: 480px)': {
                              height: '16px',
                              width: '16px',
                              pt: 0,
                            }
                          }}
                        >
                          <Image src={addIcon} width={23} height={23} />
                        </Box>
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '20px',
                              fontWeight: 700,
                              fontFamily: 'Jost',
                              '@media screen and (max-width: 480px)': {
                                fontSize: '13px'
                              }
                            }}
                          >
                            ADD
                          </Typography>
                        </Box>
                      </Box>
                      </Box>
                      <Box 
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          '@media screen and (max-width: 480px)': {
                            display: 'none'
                          }
                        }}
                      >
                      <Select
                        IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                        sx={{
                          height: '41px',
                          width: '30%',
                          '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                            borderImageSlice: 1,
                            borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                            '.MuiMenuItem-gutters:hover':{
                              color: 'secondary.main'
                            }
                          }
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              background: 'linear-gradient(180deg, rgba(177, 79, 255, 1.0) 0%, rgba(160, 144, 255, 1.0) 100%)',
                              filter: 'drop-shadow(7.91971px 7.91971px 15.8394px rgba(0, 0, 0, 0.25))',
                            }
                          }
                        }}
                      >
                        <MenuItem value={1}>
                          <Tooltip 
                            title={
                              <>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: '205px',
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: '14px',
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                    BetAmo Обзор казино и бонусы  (это заголовок)
                                    BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйте захватывающие слоты и другие игры! Бонусы и акции казино. К сожалению, ..BetAmo Обзор казино и бонусы  (это заголовок)
                                    BetAmo было основано в . Имеет лицензии от: 

                                    ttttttttttttttxshsh
                                    hrhrhr
                                    hrjry
                                    sdjtyh
                                    dhd5
                                    BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйтонусы и акции казино. К сожалению, ..
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={tooltipImage} width={97} height={512} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={tooltipImage} width={97} height={512} />
                                  </Box>
                                </Box>
                              </>
                            }
                            placement="right-end"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '0 -5px'
                              }}
                            >
                              <Box sx={{ margin: '0 5px' }}>
                                <Image src={folderIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Project 1
                                </Typography>
                              </Box>
                            </Box>
                          </Tooltip>
                        </MenuItem>
                        <MenuItem value={2}>
                        <Tooltip 
                            title={
                              <>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: '205px',
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: '14px',
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                    BetAmo Обзор казино и бонусы  (это заголовок)
                                    BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйте захватывающие слоты и другие игры! Бонусы и акции казино. К сожалению, ..BetAmo Обзор казино и бонусы  (это заголовок)
                                    BetAmo было основано в . Имеет лицензии от: 

                                    ttttttttttttttxshsh
                                    hrhrhr
                                    hrjry
                                    sdjtyh
                                    dhd5
                                    BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйтонусы и акции казино. К сожалению, ..
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={tooltipImage} width={97} height={512} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={tooltipImage} width={97} height={512} />
                                  </Box>
                                </Box>
                              </>
                            }
                            placement="right-end"
                          >
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
                                }}
                              >
                                <Image src={folderIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Project 2
                                </Typography>
                              </Box>
                            </Box>
                          </Tooltip>
                        </MenuItem>
                        <MenuItem value={3}>
                        <Tooltip 
                            title={
                              <>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: '205px',
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: '14px',
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                    BetAmo Обзор казино и бонусы  (это заголовок)
                                    BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйте захватывающие слоты и другие игры! Бонусы и акции казино. К сожалению, ..BetAmo Обзор казино и бонусы  (это заголовок)
                                    BetAmo было основано в . Имеет лицензии от: 

                                    ttttttttttttttxshsh
                                    hrhrhr
                                    hrjry
                                    sdjtyh
                                    dhd5
                                    BetAmo было основано в . Имеет лицензии от: Malta Gaming Authority (MGA). Попробуйтонусы и акции казино. К сожалению, ..
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={tooltipImage} width={97} height={512} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={tooltipImage} width={97} height={512} />
                                  </Box>
                                </Box>
                              </>
                            }
                            placement="right-end"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '0 -5px'
                              }}
                            >
                              <Box sx={{ margin: '0 5px' }}>
                                <Image src={folderIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  Project 3
                                </Typography>
                              </Box>
                            </Box>
                          </Tooltip>
                        </MenuItem>
                      </Select>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          // justifyContent: 'space-between',
                          height: '45px',
                          width: '30%',
                          alignItems: 'center',
                          border: '1px solid',
                          borderRadius: '7px',
                          borderImageSlice: 1,
                          borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                          margin: '0 -5px'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '90%'
                          }}
                        >
                          <Box sx={{ margin: '0 5px' }}>
                            <Image src={keyIcon} width={24} height={24} />
                          </Box>
                          <Box
                            sx={{
                              margin: '0 5px',
                              width: '100%',
                              '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
                                width: '296px'
                              },
                              '& .css-j4fmve-MuiInputBase-root-MuiInput-root:before': {
                                border: 'none'
                              },
                              '& .css-j4fmve-MuiInputBase-root-MuiInput-root:after': {
                                border: 'none'
                              },
                            }}
                          >
                            <TextField sx={{width: '100%'}} id="standard-basic" variant="standard" />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            // display: 'flex',
                            width: '26px',
                            height: '26px',
                            textAlign: 'center',
                            pt: '4px',
                            borderRadius: '50%',
                            background: 'linear-gradient(180deg, #B14FFF 0%, #2D80FF 100%);',
                            margin: '0 5px',
                          }}
                        >
                          <Image src={exelIcon} width={17} height={17} />
                        </Box>
                      </Box>
                      <Box
                        sx={{}}
                      >
                        <Select
                          IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                          sx={{
                            height: '41px',
                            width: '198px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
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
                                margin: '0 -5px'
                              }}
                            >
                              <Box sx={{ margin: '0 5px' }}>
                                <Image src={geoIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  GEO 1
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
                                }}
                              >
                                <Image src={geoIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  GEO 2
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
                              <Box sx={{ margin: '0 5px' }}>
                                <Image src={geoIcon} width={23} height={23} />
                              </Box>
                              <Box sx={{ margin: '0 5px' }}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'Jost'
                                  }}
                                >
                                  GEO 3
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        </Select>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: '171px',
                          height: '45px',
                          background: 'linear-gradient(90deg, #3CFFF9 0.36%, #00FF66 100.36%);',
                          borderRadius: '9px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 -5px'
                        }}
                      >
                        <Box
                          sx={{
                            margin: '0 5px',
                            pt: 1
                          }}
                        >
                          <Image src={addIcon} width={23} height={23} />
                        </Box>
                        <Box
                          sx={{
                            margin: '0 5px'
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '20px',
                              fontWeight: 700,
                              fontFamily: 'Jost'
                            }}
                          >
                            ADD
                          </Typography>
                        </Box>
                      </Box>
                      </Box>
                    </Box>
                  </Card>
                  <Card 
                    sx={{ 
                      p: 5, 
                      pb: 3, 
                      mt: 5, 
                      background: '#linear-gradient(90deg, rgba(66, 141, 255, 0.3) 0%, rgba(177, 79, 255, 0.3) 99.98%);', 
                      borderRadius: '30px',
                      '@media screen and (max-width: 480px)': {
                        borderRadius: 0,
                        background: 'transparent',
                        p: 0
                      } 
                    }}
                  >
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, border: '1px solid white' }} aria-label="simple table">
                          <TableHead sx={{ border: '1px solid white' }}>
                            <TableRow sx={{ border: '1px solid white' }}>
                              <TableCell sx={{ background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }}>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={folderIcon} width={22} height={19} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: '#ffffff',
                                        fontWeight: 700,
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                      PROJECT
                                    </Typography>
                                  </Box>
                                </Box>
                              </TableCell>
                              <TableCell sx={{ background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }} align="right">
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'end',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={keyIcon} width={22} height={19} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: '#ffffff',
                                        fontWeight: 700,
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                      KEY
                                    </Typography>
                                  </Box>
                                </Box>
                              </TableCell>
                              <TableCell sx={{ background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }} align="right">
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={geoIcon} width={22} height={19} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: '#ffffff',
                                        fontWeight: 700,
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                      GEO
                                    </Typography>
                                  </Box>
                                </Box>
                              </TableCell>
                              <TableCell sx={{ background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }} align="right">
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    // justifyContent: 'center',
                                    margin: '0 -5px'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Image src={deleteIcon} width={22} height={19} />
                                  </Box>
                                  <Box
                                    sx={{
                                      margin: '0 5px'
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: '#ffffff',
                                        fontWeight: 700,
                                        fontFamily: 'Jost'
                                      }}
                                    >
                                      DELETE
                                    </Typography>
                                  </Box>
                                </Box>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.project}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.project}
                                </TableCell>
                                <TableCell style={{ width: '100px' }}>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      color: 'secondary.main',
                                      height: '28px',
                                      border: '1px solid',
                                      borderRadius: '7px',
                                      borderImageSlice: 1,
                                      borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                                    }}
                                  >
                                    {row.key}
                                  </Box>
                                </TableCell>
                                <TableCell style={{ width: '183px' }} align="left">{row.geo}</TableCell>
                                <TableCell style={{ width: '150px' }}>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      margin: '0 -5px',
                                      // width: '137px',
                                      height: '29px',
                                      background: 'linear-gradient(89.96deg, #FF35A2 0.36%, #BE35FF 98.83%)',
                                      borderRadius: '8px'
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        margin: '0 5px',
                                        pt: '5px'
                                      }}
                                    >
                                      <Image src={deleteIcon} width={21} height={18} />
                                    </Box>
                                    <Box
                                      sx={{
                                        margin: '0 5px'
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: '16px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost'
                                        }}
                                      >
                                        DELETE
                                      </Typography>
                                    </Box>
                                  </Box>
                                </TableCell>
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
                                fontFamily: 'Jost'
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
                              cursor: 'pointer'
                            }}
                          >
                            <ChevronRight fontSize="large" />
                          </Box>
                        </Box>
                      </Box>
                    </Card></>
                  )}
                  {!activeSettings && (
                    <>
                      <Card 
                        sx={{
                          p: 3, 
                          mt: 5, 
                          background: '#222543', 
                          borderRadius: '30px',
                          '@media screen and (max-width: 480px)': {
                            background: 'transparent',
                            p: 0,
                            height: '38%'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 3
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              margin: '0 -5px'
                            }}
                          >
                            <Box
                              sx={{
                                margin: '0 5px',
                                '@media screen and (max-width: 480px)': {
                                  width: '16px',
                                  height: '16px'
                                }
                              }}
                            >
                              <Image src={pencilIcon} width={23} height={23} />
                            </Box>
                            <Box
                              sx={{
                                margin: '0 5px'
                              }}
                            >
                              <Typography
                                  variant="subtitle2"
                                  sx={{
                                      fontSize: '32px',
                                      fontFamily: 'Jost',
                                      '@media screen and (max-width: 480px)': {
                                        fontSize: '20px'
                                      }
                                  }}
                              >
                                  Filing a complaint
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Switch 
                              checked={checked} 
                              onChange={switchHandler} 
                              sx={{

                              }}
                            />
                          </Box>
                        </Box>
                          <Collapse in={checked}>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin: '0 -5px'
                              }}
                            >
                              <Select
                                IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                                sx={{
                                  width: '521px',
                                  height: '56px',
                                  margin: '0 10px',
                                  '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                                    border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                                    borderRadius: '7px',
                                    borderImageSlice: 1,
                                    borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                                  },
                                  '@media screen and (max-width: 480px)': {
                                    height: '31px',
                                    width: '132px'
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
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Image src={worldIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        WEBSITE 1
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
                                      }}
                                    >
                                      <Image src={worldIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        WEBSITE 2
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                                <MenuItem value={3}>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: '0 -5px'
                                    }}
                                  >
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Image src={worldIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        WEBSITE 3
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                              </Select>
                              <Select
                                IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                                sx={{
                                  width: '279px',
                                  height: '56px',
                                  margin: '0 10px',
                                  '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                                    border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                                    borderRadius: '7px',
                                    borderImageSlice: 1,
                                    borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                                  },
                                  '@media screen and (max-width: 480px)': {
                                    height: '31px',
                                    width: '104px'
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
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Image src={geoIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        GEO 1
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
                                      }}
                                    >
                                      <Image src={geoIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        GEO 2
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                                <MenuItem value={3}>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: '0 -5px'
                                    }}
                                  >
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Image src={geoIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        GEO 3
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                              </Select>
                              <Select
                                IconComponent = { () =>  <ExpandMoreIcon sx={{color: 'white'}} /> }
                                sx={{
                                  width: '345px',
                                  height: '56px',
                                  margin: '0 10px',
                                  '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                                    border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                                    borderRadius: '7px',
                                    borderImageSlice: 1,
                                    borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
                                  },
                                  '@media screen and (max-width: 480px)': {
                                    height: '31px',
                                    width: '132px'
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
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Image src={folderIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        PROJECT 1
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
                                      }}
                                    >
                                      <Image src={folderIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        PROJECT 2
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                                <MenuItem value={3}>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: '0 -5px'
                                    }}
                                  >
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Image src={folderIcon} width={26} height={26} />
                                    </Box>
                                    <Box sx={{ margin: '0 5px' }}>
                                      <Typography
                                        sx={{
                                          fontSize: '20px',
                                          fontWeight: 700,
                                          fontFamily: 'Jost',
                                          '@media screen and (max-width: 480px)': {
                                            fontSize: '16px'
                                          }
                                        }}
                                      >
                                        PROJECT 3
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                              </Select>
                            </Box>
                            <TextField
                              placeholder="Your note"
                              multiline
                              rows={3}
                              // maxRows={4}
                              sx={{
                                width: '100%',
                                mt: 3,
                                background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(66, 141, 255, 0.31) 100%);',
                                border: '1px solid #ffffff',
                                borderRadius: '9px'
                              }}
                            />
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'end',
                                mt: 3
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  width: '171px',
                                  height: '45px',
                                  background: 'linear-gradient(90deg, #3CFFF9 0.36%, #00FF66 100.36%);',
                                  borderRadius: '9px',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  margin: '0 -5px',
                                  '@media screen and (max-width: 480px)': {
                                    margin: '0 3px'
                                  }
                                }}
                              >
                                <Box
                                  sx={{
                                    margin: '0 5px',
                                    pt: 1
                                  }}
                                >
                                  <Image src={addIcon} width={23} height={23} />
                                </Box>
                                <Box
                                  sx={{
                                    margin: '0 5px'
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700,
                                      fontFamily: 'Jost',
                                      '@media screen and (max-width: 480px)': {
                                        fontSize: '18px',
                                      }
                                    }}
                                  >
                                    ADD
                                  </Typography>
                                </Box>
                              </Box>
                              
                            </Box>
                          </Collapse>
                      </Card>
                      <Card 
                        sx={{
                          p: 3, 
                          mt: 5, 
                          background: '#222543', 
                          borderRadius: '30px',
                          '@media screen and (max-width: 480px)': {
                            background: 'transparent',
                            p: 0,
                          }
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            pt: '10px',
                            margin: '0 -5px'
                          }}
                        >
                          <Box
                              sx={{
                                margin: '0 5px',
                                width: '30px',
                                height: '30px',
                                '@media screen and (max-width: 480px)': {
                                  width: '18px',
                                  height: '21px'
                                }
                              }}
                            >
                              <Image src={documentIcon}/>
                            </Box>
                            <Box
                              sx={{
                                margin: '0 5px'
                              }}
                            >
                              <Typography
                                  variant="subtitle2"
                                  sx={{
                                      fontSize: '32px',
                                      fontFamily: 'Jost',
                                      '@media screen and (max-width: 480px)': {
                                        fontSize: '20px'
                                      }
                                  }}
                              >
                                  White list
                              </Typography>
                            </Box>
                        </Box>
                        <Box sx={{mt: 3}}>
                          <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, border: '1px solid white' }} aria-label="simple table">
                              <TableHead sx={{ border: '1px solid white' }}>
                                <TableRow sx={{ border: '1px solid white' }}>
                                  <TableCell sx={{ background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }}>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        margin: '0 -5px'
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          margin: '0 5px'
                                        }}
                                      >
                                        <Image src={worldIcon} width={22} height={19} />
                                      </Box>
                                      <Box
                                        sx={{
                                          margin: '0 5px'
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            color: '#ffffff',
                                            fontWeight: 700,
                                            fontFamily: 'Jost'
                                          }}
                                        >
                                          WEBSITE
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </TableCell>
                                  <TableCell sx={{width: '214px', background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }} align="right">
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        margin: '0 -5px'
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          margin: '0 5px'
                                        }}
                                      >
                                        <Image src={geoIcon} width={22} height={19} />
                                      </Box>
                                      <Box
                                        sx={{
                                          margin: '0 5px'
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            color: '#ffffff',
                                            fontWeight: 700,
                                            fontFamily: 'Jost'
                                          }}
                                        >
                                          GEO
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </TableCell>
                                  <TableCell sx={{width: '214px', background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }} align="right">
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        margin: '0 -5px'
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          margin: '0 5px'
                                        }}
                                      >
                                        <Image src={folderIcon} width={22} height={19} />
                                      </Box>
                                      <Box
                                        sx={{
                                          margin: '0 5px'
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            color: '#ffffff',
                                            fontWeight: 700,
                                            fontFamily: 'Jost'
                                          }}
                                        >
                                          PROJECT
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </TableCell>
                                  <TableCell sx={{ background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);' }} align="right">
                                    <Tooltip
                                      title="text text text text" 
                                      placement="top-start"
                                      componentsProps={{
                                        tooltip: {
                                          sx: {
                                            background: 'linear-gradient(180deg, rgba(69, 140, 255, 0.5) 5.73%, rgba(104, 79, 255, 0.51) 82.81%);'
                                          }
                                        }
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          margin: '0 -5px'
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            margin: '0 5px'
                                          }}
                                        >
                                          <Image src={pencilIcon} width={22} height={19} />
                                        </Box>
                                        <Box
                                          sx={{
                                            margin: '0 5px'
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: '#ffffff',
                                              fontWeight: 700,
                                              fontFamily: 'Jost'
                                            }}
                                          >
                                            NOTES
                                          </Typography>
                                        </Box>
                                      </Box>
                                    </Tooltip>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rowsComplaints.map((row) => (
                                  <TableRow
                                    key={row.website}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {row.website}
                                    </TableCell>
                                    <TableCell align="left">{row.geo}</TableCell>
                                    <TableCell sx={{fontSize: '16px', fontWeight: 700}} align="left">{row.project}</TableCell>
                                    <TableCell align="left">
                                      <Tooltip 
                                        title="text text text text" 
                                        placement="top-start"
                                        componentsProps={{
                                          tooltip: {
                                            sx: {
                                              background: 'linear-gradient(180deg, rgba(69, 140, 255, 0.5) 5.73%, rgba(104, 79, 255, 0.51) 82.81%);'
                                            }
                                          }
                                        }}
                                      >
                                        <Typography
                                          sx={{fontSize: '16px', fontWeight: 700}}
                                        >
                                          {row.notes}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
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
                                  fontFamily: 'Jost'
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
                                cursor: 'pointer'
                              }}
                            >
                              <ChevronRight fontSize="large" />
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    </>
                  )}
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <Box>
                    
                  </Box>
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