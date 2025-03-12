import { Box, Button, TextField, Stack, Typography, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';
import { handleDownload } from '../libs/handleDownload';
import { uploadImages } from '../constants/constantas';
import { toast } from 'react-toastify';

const DownloadCatalog = () => {
  const { xs, sm, md, lg} = useMedia();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: '', number: '+998' });
  const [errors, setErrors] = useState({ name: false, number: false });
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNumberChange = (value) => {
    const sanitized = value.replace(/\D/g, '').slice(0, 12);
    setFormData((prev) => ({
      ...prev,
      number: sanitized.startsWith('998') ? `+${sanitized}` : `+998${sanitized.slice(0, 9)}`,
    }));
  };

  const handleClick = () => {
    const isValidName = formData.name.trim().length >= 3;
    const isValidNumber = formData.number.startsWith('+998') && formData.number.length === 13;

    if (isValidName && isValidNumber) {
      handleDownload(uploadImages);
      toast.success(t('download_success'));
    } else {
      toast.error(t('field_required'));
      setTimeout(()=>{
        toast.error(t('download_failed'));
      }, 500)
      
    }
  };

  return (
    <Box width="90%" mx='auto' height={!(xs||sm) ?'420px' : 'auto'} bgcolor="#FAFAFA">
      <Box height="100%" width="100%" display="flex" position="relative" boxShadow={'0 0 3px 0 rgb(0,0,0)'}
           borderRadius='12px'>

        <Stack height="100%" width={xs || sm ? '100%' : '60%'} gap="0.5rem" justifyContent="center" px="2rem">
          <Typography fontWeight="600" variant="h4" color="#000">
            {t('downloadSection.title')}
          </Typography>
          <Typography color="#000">{t('downloadSection.helperText')}</Typography>

          <Box display="grid" gridTemplateColumns={xs ? '1fr' : '1fr 1fr 1fr'} width='100%' gap={2} py={2}>
            <TextField fullWidth
              placeholder={t('downloadSection.name')}
              variant="outlined"
              sx={{ height: '3rem' }}
              error={errors.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <TextField fullWidth
              placeholder="901234567"
              variant="outlined"
              sx={{ height: '3rem' }}
              value={formData.number}
              error={errors.number}
              onChange={(e) => handleNumberChange(e.target.value)}
            />
            <Button fullWidth sx={{ height: '3rem', bgcolor: 'green', borderRadius: '6px' }} onClick={handleClick}>
              <Typography color="#fff">{t('downloadSection.download')}</Typography>
            </Button>
          </Box>
        </Stack>

        {/* image */}
          <Box
            height={lg ? '110%' : '140%'}
            width="50%"
            position="absolute"
            right="-5%"
            top={lg ? '-10%' : '-20%'}
            zIndex={1}
            display={xs || sm || md ? 'none' : 'block'}
          >
            <Box component="img" src="/book.webp" height="100%" width="100%" />
          </Box>
       
      </Box>
    </Box>
  );
};

export default DownloadCatalog;