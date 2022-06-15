import { Divider } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { ApexOptions } from "apexcharts"
import { Chart } from "src/components/chart"
import { HasBrandSVG } from "src/icons/hasBrandIcon"
import { NoBrandSVG } from "src/icons/noBrandIcon"


const Charts = () => {

    const chartRadialBarOptions: ApexOptions = {
        chart: {
            width: 253,
            height: 253,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                
                // total: {
                //   show: true,
                //   label: 'Total',
                //   formatter: function (w) {
                //     // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                //     return 249
                //   }
                // }
              }
            }
        },
        labels: ['no brand', 'has brand'],
    }

    const chartRadialBarSeries = [44, 55]

    const chartPieOptions: ApexOptions = {
        chart: {
            width: 253,
            height: 253,
            toolbar: {
                show: false
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
    }

    const chartPieSeries = [44, 55, 13, 43, 22]

    const chartDonutOptions: ApexOptions = {
        chart: {
            width: 253,
            height: 253,
            toolbar: {
                show: false
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
        }]
    }

    const chartDonutSeries = [44, 55, 41, 17, 15]

    return(
        <>
            <Card sx={{p: 5, mt: 5, background: '#222543', borderRadius: '30px'}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        '@media screen and (max-width: 480px)': {
                            flexDirection: 'column',
                        }

                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontSize: '32px',
                                    fontFamily: 'Jost'
                                }}
                            >
                                Where does it lead
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '0 -5px'
                            }}
                        >
                            <Chart type='radialBar' options={chartRadialBarOptions} series={chartRadialBarSeries} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Box>
                                    <Typography
                                        color="#c4c4c4"
                                        sx={{
                                            fontSize: '16px',
                                            fontFamily: 'Jost'
                                        }}
                                    >
                                        Total
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        color="#ffffff"
                                        sx={{
                                            fontSize: '20px',
                                            fontFamily: 'Jost'
                                        }}
                                    >
                                        100
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{pt: '14px'}} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: '16px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        // alignItems: 'center',
                                        margin: '0 -5px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <HasBrandSVG />
                                    </Box>
                                    <Box>
                                        <Typography>
                                            has brand
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography>
                                        55
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{pt: '16px'}} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: '16px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        // alignItems: 'center',
                                        margin: '0 -5px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <NoBrandSVG />
                                    </Box>
                                    <Box>
                                        <Typography>
                                            no brand
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography>
                                        44
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{pt: '16px'}} />
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontSize: '32px',
                                    fontFamily: 'Jost'
                                }}
                            >
                                Key frequency
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Chart type='pie' options={chartPieOptions} series={chartPieSeries} />
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontSize: '32px',
                                    fontFamily: 'Jost'
                                }}
                            >
                                Complaints
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Chart type='donut' options={chartDonutOptions} series={chartDonutSeries} />
                        </Box>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default Charts