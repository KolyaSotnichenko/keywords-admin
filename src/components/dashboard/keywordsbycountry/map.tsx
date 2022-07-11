import { Box, MenuItem, Select, Typography } from "@mui/material"
import Card from "@mui/material/Card"
import Image from "next/image"

import america1 from '../../../../public/static/countries/america1.png'
import america2 from '../../../../public/static/countries/america2.png'
import europa from '../../../../public/static/countries/europa.png'
import asia from '../../../../public/static/countries/asia.png'
import africa from '../../../../public/static/countries/africa.png'
import { Chart } from "src/components/chart"
import { ApexOptions } from "apexcharts"

import eyeIcon from '../../../../public/eye.png'



const KeywordsByCountry = () => {

    const chartOptions: ApexOptions = {
        chart: {
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["North America", "South America", "Europa", "Australia", "Asia", "Africa"],
        },
    }

    const chartSeries = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]

    return (
        <>
            <Card 
              sx={{
                p: 5, 
                background: '#222543', 
                borderRadius: '30px', 
                height: '943px',
                '@media screen and (max-width: 480px)': {
                  pl: 2,
                  pr: 2,
                  height: '40%'
                }
              }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
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
                        Keywords by country
                    </Typography>
                    <Box
                      sx={{
                        position: 'relative',
                        '@media screen and (min-width: 480px)': {
                          display: 'none'
                        }
                      }}
                    >
                      <Box 
                        sx={{
                          position: 'absolute',
                          zIndex: 2,
                          left: 7,
                          top: 3
                        }}
                      >
                        <Image src={eyeIcon} width={24} height={24} />
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
                          width: '38px',
                          height: '29px',
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
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '70%',
                        mt: 4,
                        '@media screen and (max-width: 480px)': {
                          height: '35%'
                        }
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '425px',
                            height: '345px',
                            '@media screen and (max-width: 480px)': {
                              width: '130px',
                            }
                        }}
                    >
                        <Image src={america1} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '236px',
                            top: '330px',
                            width: '199px',
                            height: '215px',
                            '@media screen and (max-width: 480px)': {
                              width: '40px',
                              top: '68%',
                              left: '25%'
                            }
                        }}
                    >
                        <Image src={america2} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '420px',
                            width: '225px',
                            height: '247px',
                            '@media screen and (max-width: 480px)': {
                              width: '70px',
                              top: 0,
                              left: '47%'
                            }
                        }}
                    >
                        <Image src={europa} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '522px',
                            top: '8px',
                            width: '450px',
                            height: '373px',
                            '@media screen and (max-width: 480px)': {
                              width: '94px',
                              top: '17%',
                              left: '61%'
                            }
                        }}
                    >
                        <Image src={asia}/>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '406px',
                            top: '236px',
                            width: '199px',
                            height: '224px',
                            '@media screen and (max-width: 480px)': {
                              width: '66px',
                              top: '49%',
                              left: '46%'
                            }
                        }}
                    >
                        <Image src={africa} />
                    </Box>
                </Box>
                <Box
                >
                    <Chart 
                        type='bar'
                        height={213} 
                        options={chartOptions}
                        series={chartSeries}
                    />
                </Box>
            </Card>
        </>
    )
}

export default KeywordsByCountry