import { Grid, Typography, Select, MenuItem, Card, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box, Container } from "@mui/system";
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
import { ChevronLeft, ChevronRight } from "@mui/icons-material";


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
                  <Card sx={{justifyContent: 'space-between', p: 5, mt: 5, background: '#linear-gradient(90deg, rgba(66, 141, 255, 0.3) 0%, rgba(177, 79, 255, 0.3) 99.98%);', borderRadius: '30px'}}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                            fontSize: '32px'
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
                        <Select
                          sx={{
                            height: '41px',
                            '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                              border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                              borderRadius: '7px',
                              borderImageSlice: 1,
                              borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
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
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '0 -5px'
                              }}
                            >
                              <Box sx={{margin: '0 5px'}}>
                                <Image src={folderIcon} width={23} height={23}/>
                              </Box>
                              <Box sx={{margin: '0 5px'}}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700
                                  }}
                                >
                                  Project 1
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
                                <Image src={folderIcon} width={23} height={23}/>
                              </Box>
                              <Box sx={{margin: '0 5px'}}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700
                                  }}
                                >
                                  Project 2
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
                              <Box sx={{margin: '0 5px'}}>
                                <Image src={folderIcon} width={23} height={23}/>
                              </Box>
                              <Box sx={{margin: '0 5px'}}>
                                <Typography
                                  sx={{
                                    fontSize: '20px',
                                    fontWeight: 700
                                  }}
                                >
                                  Project 3
                                </Typography>
                              </Box>
                            </Box>
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
                            margin: '0 -5px'
                          }}
                        >
                          <Box sx={{margin: '0 5px'}}>
                            <Image src={keyIcon} width={24} height={24} />
                          </Box>
                          <Box
                            sx={{
                              margin: '0 5px',
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
                        <Box
                          sx={{

                          }}
                        >
                          <Select
                            sx={{
                              height: '41px',
                              width: '198px',
                              '& .css-1fal6dt-MuiOutlinedInput-notchedOutline': {
                                border: '1 px solid linear-gradient(90deg, rgba(60,144,255,1) 100%, rgba(190,53,255,1) 100%)',
                                borderRadius: '7px',
                                borderImageSlice: 1,
                                borderImageSource: 'linear-gradient(to bottom, #3C90FF, #BE35FF)',
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
                                <Box sx={{margin: '0 5px'}}>
                                  <Image src={geoIcon} width={23} height={23}/>
                                </Box>
                                <Box sx={{margin: '0 5px'}}>
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700
                                    }}
                                  >
                                    Geo 1
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
                                  <Image src={geoIcon} width={23} height={23}/>
                                </Box>
                                <Box sx={{margin: '0 5px'}}>
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700
                                    }}
                                  >
                                    Geo 2
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
                                <Box sx={{margin: '0 5px'}}>
                                  <Image src={geoIcon} width={23} height={23}/>
                                </Box>
                                <Box sx={{margin: '0 5px'}}>
                                  <Typography
                                    sx={{
                                      fontSize: '20px',
                                      fontWeight: 700
                                    }}
                                  >
                                    Geo 3
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
                            <Image src={addIcon} width={23} height={23}/>
                          </Box>
                          <Box
                            sx={{
                              margin: '0 5px'
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: '20px',
                                fontWeight: 700
                              }}
                            >
                              Add
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                  </Card>
                  <Card sx={{p: 5, pb: 3, mt: 5, background: '#linear-gradient(90deg, rgba(66, 141, 255, 0.3) 0%, rgba(177, 79, 255, 0.3) 99.98%);', borderRadius: '30px'}}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650, border: '1px solid white' }} aria-label="simple table">
                        <TableHead sx={{border: '1px solid white'}}>
                          <TableRow sx={{border: '1px solid white'}}>
                            <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}}>
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
                                  <Image src={folderIcon} width={22} height={19}/>
                                </Box>
                                <Box
                                  sx={{
                                    margin: '0 5px'
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: '#ffffff',
                                      fontWeight: 700
                                    }}
                                  >
                                    PROJECT
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="right">
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
                                  <Image src={keyIcon} width={22} height={19}/>
                                </Box>
                                <Box
                                  sx={{
                                    margin: '0 5px'
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: '#ffffff',
                                      fontWeight: 700
                                    }}
                                  >
                                    KEY
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="right">
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
                                  <Image src={geoIcon} width={22} height={19}/>
                                </Box>
                                <Box
                                  sx={{
                                    margin: '0 5px'
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: '#ffffff',
                                      fontWeight: 700
                                    }}
                                  >
                                    GEO
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell sx={{background: 'linear-gradient(180deg, rgba(60, 144, 255, 0.3) 0%, rgba(190, 53, 255, 0.3) 100%);'}} align="right">
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
                                  <Image src={deleteIcon} width={22} height={19}/>
                                </Box>
                                <Box
                                  sx={{
                                    margin: '0 5px'
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: '#ffffff',
                                      fontWeight: 700
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
                              <TableCell style={{width: '100px'}}>
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
                              <TableCell style={{width: '183px'}} align="left">{row.geo}</TableCell>
                              <TableCell style={{width: '150px'}}>
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
                                        fontWeight: 700
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