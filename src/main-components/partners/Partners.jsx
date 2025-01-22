import { Box } from "@mui/material"
import useScreenSizes from "../../hooks/ScreenSizes"

const partnersBrends = ['/partners/a.png', '/partners/abba.png', '/partners/adamari.png','/partners/akbarshoh.png','/partners/alfatiha.png',
    '/partners/aljabr.png', '/partners/arabbayevna.png', '/partners/asxab.png', '/partners/auto.png', '/partners/azko.png',
    '/partners/bm.png', '/partners/bosfor.png', '/partners/cti.png', '/partners/europol.png', '/partners/general.png',
    '/partners/kiwi.png', '/partners/nefrit.png','/partners/niners.png', '/partners/novza.png', '/partners/travel.png', '/partners/uzmetal.png'
]


const Partners = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='auto' width='100%' display='grid' gap = '0.5rem'
    gridTemplateColumns={xlgScreen ? 'repeat(6, auto)' : lgScreen ? 'repeat(4, auto)': mdScreen ? 'repeat(3, auto)' : 'repeat(2,auto)'}>
        {
            partnersBrends.map((brand, idx) => {
                return (
                    <Box height = '140px' width = '140px' borderRadius='10px' overflow='hidden' key={idx}>
                        <Box component='img' src={brand} height='100%' width='100%'/>
                    </Box>
                )
                
            })
        }

    </Box>
  )
}

export default Partners
