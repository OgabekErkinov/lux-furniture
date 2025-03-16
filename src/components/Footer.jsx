import { Box, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';

const Footer = () => {
    const { t } = useTranslation();
    const { xs, sm, md, lg, xl } = useMedia();

    return (
        <Box component="footer" width="100%" bgcolor="#fff" pt={2} px={2} boxShadow={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                {/* Logo va Yozuv */}
                <Stack direction="row" alignItems="center">
                    <Link href="/" sx={{mt : '10px'}}>
                        <Box component="img" src='/logo.webp' sx={{ height: { xs: "60px", md: "80px" }, width: "auto" }} />
                    </Link>
                    <Typography fontSize='12px' fontWeight="bold" display={{ xs: "none", sm: "block" }} width='128px'>
                        {t("logoText")}
                    </Typography>
                </Stack>

                {/* Ijtimoiy tarmoqlar */}
                <Stack alignItems='center' spacing={1}>
                    <Typography display={{ xs: 'none', md: 'block' }} fontSize='16px' textAlign='center'>
                        {t('socialText')}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Link href="https://chinar.uz" target="_blank">
                            <FaWhatsapp color="green" size="24px" />
                        </Link>
                        <Link href="https://t.me/@Only_2008" target="_blank">
                            <FaTelegram color="#20aabd" size="24px" />
                        </Link>
                    </Stack>
                </Stack>

                {/* Telefon raqam */}
                <Stack textAlign="center">
                    <Typography fontSize={{ xs: "14px", md: "16px" }}>{t("callUs")}</Typography>
                    
                    {/* Ish vaqti */}
                <Stack textAlign="center" display={{ xs: 'none', md: 'flex' }} direction='row'>
                    <Typography fontWeight="600" fontSize={{ xs: "16px", md: "18px" }}>+998 71 500 00 00</Typography>
                </Stack>
                </Stack>

                
            </Stack>
        </Box>
    );
}

export default Footer;