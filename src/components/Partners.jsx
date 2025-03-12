import { Box, Stack, Typography, Slider } from '@mui/material';
import React, { useState } from 'react';
import useMedia from '../hooks/useMedia';
import { useTranslation } from 'react-i18next';

const partnersBrends = [
  { year: 2008, logo: '/partners/a.png' }, { year: 2009, logo: '/partners/abba.png' },
  { year: 2010, logo: '/partners/adamari.png' }, { year: 2011, logo: '/partners/akbarshoh.png' },
  { year: 2012, logo: '/partners/alfatiha.png' }, { year: 2013, logo: '/partners/aljabr.png' },
  { year: 2014, logo: '/partners/arabbayevna.png' }, { year: 2015, logo: '/partners/asxab.png' },
  { year: 2016, logo: '/partners/auto.png' }, { year: 2017, logo: '/partners/azko.png' },
  { year: 2018, logo: '/partners/bm.png' }, { year: 2018, logo: '/partners/bosfor.png' },
  { year: 2019, logo: '/partners/cti.png' }, { year: 2019, logo: '/partners/europol.png' },
  { year: 2020, logo: '/partners/general.png' }, { year: 2020, logo: '/partners/kiwi.png' },
  { year: 2021, logo: '/partners/nefrit.png' }, { year: 2022, logo: '/partners/niners.png' },
  { year: 2023, logo: '/partners/novza.png' }, { year: 2023, logo: '/partners/travel.png' },
  { year: 2024, logo: '/partners/uzmetal.png' }
];

const Partners = () => {
  const { t } = useTranslation();
  const { xs, sm, md, lg, xl } = useMedia();
  const [selectedYear, setSelectedYear] = useState(2024);

  const yearSize = xl ? '30px' : lg ? '24px' : md ? '20px' : '18px';
  const headingSize = xl ? '35px' : lg ? '30px' : md ? '24px' : '16px';

  const getColumns = () => (xs ? 2 : sm ? 3 : md ? 4 : 5);
  const filteredPartners = partnersBrends.filter((partner) => partner.year <= selectedYear);

  return (
    <Box width="90%" minHeight='320px' my="1rem" mx="auto">
      <Stack width="100%" alignItems="center" gap="1rem">
        {/* Heading Section */}
        <Typography fontSize={headingSize} fontWeight="400" color="#000000" textAlign="center">
          {t('partnerSection.heading')}
        </Typography>

        {/* Year Slider */}
        <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
          <Typography color="grey" fontSize={yearSize}>2008</Typography>
          <Slider
            value={selectedYear}
            onChange={(e, newValue) => setSelectedYear(newValue)}
            min={2008}
            max={2024}
            step={1}
            marks
            sx={{
              width: '80%',
              '& .MuiSlider-track': { backgroundColor : 'black' },
              '& .MuiSlider-thumb': { backgroundColor: 'black' },
              '& .MuiSlider-rail': { backgroundColor: 'black' }
            }}
          />
          <Typography color="#000000" fontSize={yearSize}>2024</Typography>
        </Box>

        {/* Partners Grid Section */}
        <Box
          width="100%"
          display="grid"
          gap="1rem"
          gridTemplateColumns={`repeat(${getColumns()}, 1fr)`}
          sx={{ px: 2 }}
        >
          {filteredPartners.map(({ logo }) => (
            <Box
              key={logo}
              height="140px"
              borderRadius="10px"
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow="0 4px 6px rgba(0,0,0,0.1)"
              sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}
            >
              <Box component="img" src={logo} alt={logo} height="100%" sx={{ objectFit: 'contain' }} />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Partners;
