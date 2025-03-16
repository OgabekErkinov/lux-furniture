import { Box, Button, Input, Stack, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import axios from 'axios';
import useMedia from '../hooks/useMedia';
import useStore from '../store/store';
import { toast } from 'react-toastify';

const InputField = ({ value, onChange, placeholder, error, multiline = false, rows = 1 }) => (
  <Box width="100%">
    <Input
      disableUnderline
      placeholder={placeholder}
      sx={{
        height: '40px',
        width: '100%',
        border: '1px solid #006400',
        borderRadius: '6px',
        px: '10px',
        outline: 'none',
      }}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
    />
    {error && <Typography color="#FF0000" fontSize="12px">{error}</Typography>}
  </Box>
);

const GiveQuestionModal = () => {
  const { t } = useTranslation();
  const { xs, sm, lg } = useMedia();
  const { modalOpen, toggleModal } = useStore();
  const modalTexts = t('givingQuestion.modal', { returnObjects: true });
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [errors, setErrors] = useState({ name: '', phoneNumber: '', questionText: '' });

  const handlePhoneNumber = (string) => {
    const filteredNumber = string.replace(/\D/g, '').slice(0, 12);
    setPhoneNumber(filteredNumber.startsWith('998') ? `+${filteredNumber}` : `+998${filteredNumber.slice(0, 9)}`);
    setErrors(prev => ({ ...prev, phoneNumber: '' }));
  };

  const validateForm = () => {
    let newErrors = { name: '', phoneNumber: '', questionText: '' };
    if (name.length < 3) newErrors.name = modalTexts.errorFill;
    if (phoneNumber.length !== 13) newErrors.phoneNumber = modalTexts.errorFill;
    if (questionText.length < 5) newErrors.questionText = modalTexts.errorFill;
    setErrors(newErrors);
    return !Object.values(newErrors).some(err => err);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!validateForm()){
      toast.error(t('toasts.field_required'))
      return
    }

    const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
    const myId = "8158030030";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Full Name: ${name}\nPhone Number: ${phoneNumber}\nQuestion: ${questionText}`;

    axios.post(url, {
      chat_id: myId,
      text: messageContent,
    })
      .then(() => {
        setName('');
        setPhoneNumber('');
        setQuestionText('');
        setErrors({ name: '', phoneNumber: '', questionText: '' });
        toggleModal();
        toast.success(t('toasts.submission_success'))
      })
      .catch((error) => {
        toast.error(t('toasts.submission_failed'))
        setErrors(prev => ({
          ...prev,
          questionText: `${modalTexts.errorSend} ${error.message}`,
        }));
      });
  };

  return (
    <Box position="fixed" zIndex={99} top={0} left={0} display={modalOpen ? 'block' : 'none'} 
         width="100%" height="100%">

      <Box width="100%" height="10vh" 
        sx={{ backdropFilter: 'blur(5px)' }} 
      />

      {/* Modal content area */}
      <Box
        height="90vh"
        width="100vw"
        bgcolor="#ffffff"
        pt="10px"  
      >
        {/* Close Button */}
        <Box position="absolute" top="10px" right="10px">
          <Button onClick={toggleModal} sx={{ color: '#006400' }}>
            <CloseOutlined />
          </Button>
        </Box>

        {/* Modal Content */}
        <Stack height="80%" width="100%" my="auto">
          <Box height="90vh" width="100%" display="flex" justifyContent="center">
            <Stack height="100%" width='100%' minWidth="300px" alignItems="center" gap="1rem">
              
              <Box component="img" src='/logo.webp' height="90px" width="90px" />
              <Stack height="auto" width="100%" my="1rem" alignItems="center">
                <Typography color="#000000" fontSize={xs ? '24px' : lg ? '32px' : '28px'} textAlign="center">
                  {modalTexts.title}
                </Typography>
                <Typography width={lg ? '60%' : '100%'} textAlign="center" color="#000000" 
                            fontSize={xs ? '14px' : '18px'}>
                  {modalTexts.titleHelper}
                </Typography>
              </Stack>

              {/* Input Fields */}
              <Stack width="300px" height="auto" alignItems="center" gap="1rem">
                <InputField
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: '' })); }}
                  placeholder={modalTexts.name}
                  error={errors.name}
                />
                <InputField
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumber(e.target.value)}
                  placeholder="998901234567"
                  error={errors.phoneNumber}
                />
                <InputField
                  value={questionText}
                  onChange={(e) => { setQuestionText(e.target.value); setErrors(prev => ({ ...prev, questionText: '' })); }}
                  placeholder={modalTexts.yourQuestion}
                  error={errors.questionText}
                  multiline
                  rows={4}
                />
              </Stack>

              {/* Submit Button */}
              <Stack height="auto" width="100%" alignItems="center" my="1rem">
                <Button sx={{
                  height: '48px', width: '300px', bgcolor: '#006400',
                  '&:hover': { bgcolor: '#008000' }, borderRadius: '6px'
                }} onClick={sendMessage}>
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
    </Box>
  );
};

export default GiveQuestionModal;
