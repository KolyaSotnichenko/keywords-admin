import { Box, Typography } from "@mui/material"
import Card from "@mui/material/Card"
import Image from "next/image"

import america1 from '../../../../public/static/countries/america1.png'
import america2 from '../../../../public/static/countries/america2.png'
import europa from '../../../../public/static/countries/europa.png'
import asia from '../../../../public/static/countries/asia.png'
import africa from '../../../../public/static/countries/africa.png'
import { Chart } from "src/components/chart"
import { ApexOptions } from "apexcharts"


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
            <Card sx={{p: 5, background: '#222543', borderRadius: '30px', height: '943px'}}>
                <Box>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontSize: '32px',
                            fontFamily: 'Jost'
                        }}
                    >
                        Keywords by country
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '70%',
                        mt: 4
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }}
                    >
                        <Image src={america1} width={425} height={345} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '236px',
                            top: '330px'
                        }}
                    >
                        <Image src={america2} width={199} height={215} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '420px'
                        }}
                    >
                        <Image src={europa} width={225} height={247} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '522px',
                            top: '8px'
                        }}
                    >
                        <Image src={asia} width={450} height={373} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '406px',
                            top: '236px'
                        }}
                    >
                        <Image src={africa} width={199} height={224} />
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