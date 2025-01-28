import { Box, Button, Stack, Typography } from '@mui/material'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { uploadImages } from '../../constants/constantas'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const DownloadButton = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()

    // download images function.........
    const handleDownload = async () => {
             const zip = new JSZip()
    
              const imagePromises = uploadImages.map(async (url, index) => {
              const response = await fetch(url);
              const blob = await response.blob();
              zip.file(`image${index + 1}.png`, blob);
            });
    
            await Promise.all(imagePromises);
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            saveAs(zipBlob, 'images.zip');
        }

  return (
    <Box width='100%'  display='grid' gridTemplateColumns={xlgScreen||lgScreen ? '1.5fr 1fr' : '1fr 3fr 1fr'}
         >
        {!(xlgScreen || lgScreen) && <Box></Box>}
        <Button disableTouchRipple data-aos = 'zoom-in' data-aos-delay="600" onClick={handleDownload}>
            <Box position='absolute' zIndex='1' left='-10%' display={xlgScreen ? 'block' : 'none'} 
                 bottom='20%' height='60%' width='30%'>
                <Box component='img' src='/book.png' height='100%' width='100%' />
            </Box>

            <Stack bgcolor='green' color='#FFFFFF' width='100%' height='5rem' justifyContent='center' borderRadius='10px'>
                <Typography variant='h4' fontWeight='600' fontSize={smScreen ? '12px' : '16px'}>{t('home.downloadCatalog')}</Typography>
                <Typography fontSize={smScreen ? '8px' : '10px'}>{t('home.buttonDesc')}</Typography>
            </Stack>
        </Button>
       
    </Box>
  )
}

export default DownloadButton
