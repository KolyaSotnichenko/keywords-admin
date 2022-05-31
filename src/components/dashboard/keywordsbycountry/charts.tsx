import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { ApexOptions } from "apexcharts"
import { Chart } from "src/components/chart"

const Charts = () => {

    const chartRadialBarOptions: ApexOptions = {
        chart: {
            height: 253,
            type: 'radialBar',
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
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    }

    const chartRadialBarSeries = [44, 55, 67, 83]

    const chartPieOptions: ApexOptions = {
        chart: {
            width: 253,
            type: 'pie',
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
            type: 'donut',
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
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontSize: '32px',
                                fontFamily: 'Jost'
                            }}
                        >
                            Where does it lead
                        </Typography>
                        <Box>
                            <Chart options={chartRadialBarOptions} series={chartRadialBarSeries} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontSize: '32px',
                                fontFamily: 'Jost'
                            }}
                        >
                            Key frequency
                        </Typography>
                        <Box>
                            <Chart options={chartPieOptions} series={chartPieSeries} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontSize: '32px',
                                fontFamily: 'Jost'
                            }}
                        >
                            Complaints
                        </Typography>
                        <Box>
                            <Chart options={chartDonutOptions} series={chartDonutSeries} />
                        </Box>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default Charts