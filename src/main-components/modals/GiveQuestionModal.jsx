import { Box, Button, Input, Stack, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { logoUrl } from '../../constants/constantas';
import { useTranslation } from 'react-i18next';
import useScreenSizes from '../../hooks/ScreenSizes';
import { useState } from 'react';
import axios from 'axios';

const GiveQuestionModal = ({ closeModal }) => {
    const { t } = useTranslation();
    const modalTexts = t('givingQuestion.modal', { returnObjects: true });
    const { lgScreen, xlgScreen } = useScreenSizes();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [errors, setErrors] = useState({ name: '', phoneNumber: '', questionText: '' });

    const handlePhoneNumber = (string) => {
        const filtredNumber = string.replace(/\D/g, '').slice(0, 12);
        if (filtredNumber.length > 3) {
            if (filtredNumber.startsWith('998')) {
                setPhoneNumber(`+${filtredNumber}`);
            } else {
                setPhoneNumber(`+998${filtredNumber.slice(0, 9)}`);
            }
        } else {
            setPhoneNumber(filtredNumber);
        }
        setErrors((prev) => ({ ...prev, phoneNumber: '' }));
    };

    const validateForm = () => {
        let newErrors = { name: '', phoneNumber: '', questionText: '' };

        if (name.length < 3) newErrors.name = modalTexts.errorFill;
        if (phoneNumber.length !== 13) newErrors.phoneNumber = modalTexts.errorFill;
        if (questionText.length < 5) newErrors.questionText = modalTexts.errorFill;

        setErrors(newErrors);
        return Object.values(newErrors).every((err) => err === '');
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
        const myId = "8158030030";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageContent = `Full Name: ${name}\nPhone Number: ${phoneNumber}\nQuestion: ${questionText}`;

        axios
            .post(url, {
                chat_id: myId,
                text: messageContent,
            })
            .then(() => {
                setName('');
                setPhoneNumber('');
                setQuestionText('');
                setErrors({ name: '', phoneNumber: '', questionText: '' });
            })
            .catch((error) => {
                setErrors((prev) => ({
                    ...prev,
                    questionText: `${modalTexts.errorSend} ${error.message}`,
                }));
            });
    };

    return (
        <Box height="100vh" width="100vw" position="fixed" zIndex={10} top="0" bgcolor="#ffffff">
            <Stack height="80%" width="100%" my="auto">
                {/* Close Button */}
                <Box height="20vh" width="100%" display="flex" justifyContent="flex-end" pr="2rem" pt="1rem">
                    <Button sx={{ height: '48px', width: '48px', position: 'absolute', zIndex: '3' }}
                        onClick={() => closeModal(false)}>
                        <CloseOutlined sx={{ height: '100%', width: '100%', color: '#000000' }} />
                    </Button>
                </Box>

                {/* Modal Content */}
                <Box height="90vh" width="100%" display="flex" justifyContent="center">
                    <Stack height="100%" width={!(xlgScreen || lgScreen) ? '100%' : '70%'} minWidth="300px" alignItems="center" gap="1rem">
                        <Box component="img" src={logoUrl} height="90px" width="280px" />
                        <Stack height="auto" width="100%" my="1rem" alignItems="center">
                            <Typography color="#000000" fontSize={(xlgScreen || lgScreen) ? '32px' : '24px'} textAlign="center">
                                {modalTexts.title}
                            </Typography>
                            <Typography width={(xlgScreen || lgScreen) ? '60%' : '100%'} textAlign="center" color="#000000"
                                fontSize={(xlgScreen || lgScreen) ? '18px' : '14px'}>
                                {modalTexts.titleHelper}
                            </Typography>
                        </Stack>

                        {/* Input Fields */}
                        <Stack width="300px" height="auto" alignItems="center" gap="1rem">
                            <Box width="100%">
                                <Input disableUnderline placeholder={modalTexts.name}
                                    sx={{
                                        height: '40px', width: '100%',
                                        border: '1px solid #006400', borderRadius: '6px', px: '10px',
                                        outline: 'none'
                                    }}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setErrors((prev) => ({ ...prev, name: '' }));
                                    }}
                                />
                                {errors.name && <Typography color="#FF0000" fontSize="12px">{errors.name}</Typography>}
                            </Box>

                            <Box width="100%">
                                <Input disableUnderline placeholder="998901234567"
                                    sx={{
                                        height: '40px', width: '100%',
                                        border: '1px solid #006400', borderRadius: '6px', px: '10px',
                                        outline: 'none'
                                    }}
                                    value={phoneNumber}
                                    onChange={(e) => handlePhoneNumber(e.target.value)}
                                />
                                {errors.phoneNumber && <Typography color="#FF0000" fontSize="12px">{errors.phoneNumber}</Typography>}
                            </Box>

                            <Box width="100%">
                                <Input disableUnderline placeholder={modalTexts.yourQuestion}
                                    multiline rows={4}
                                    sx={{
                                        width: '100%', border: '1px solid #006400',
                                        borderRadius: '6px', px: '10px', outline: 'none'
                                    }}
                                    value={questionText}
                                    onChange={(e) => {
                                        setQuestionText(e.target.value);
                                        setErrors((prev) => ({ ...prev, questionText: '' }));
                                    }}
                                />
                                {errors.questionText && <Typography color="#FF0000" fontSize="12px">{errors.questionText}</Typography>}
                            </Box>
                        </Stack>

                        {/* Submit Button */}
                        <Stack height="auto" width="100%" alignItems="center" my="1rem">
                            <Button sx={{
                                height: '48px', width: '300px', bgcolor: '#006400',
                                '&:hover': { bgcolor: '#008000' }, borderRadius: '6px'
                            }}
                                onClick={(e) => sendMessage(e)}>
                                <Typography color="#ffffff">{modalTexts.sendQuestion}</Typography>
                            </Button>

                            <Box height="auto" width="100%" textAlign="center">
                                <Typography color="#000000" fontSize="12px">{modalTexts.sendDesc}</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default GiveQuestionModal;
