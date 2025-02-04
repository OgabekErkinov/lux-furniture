import { Box } from '@mui/material'
import Heading from './Heading'
import { useTranslation } from 'react-i18next'
import ToggleItem from './ToggleItem'


const QuestionsSections = () => {
    const {t} = useTranslation()
    const questions = t('questionsSection.questions', {returnObjects : true})
  return (
    <Box height='auto' width='90%' p='1rem'>
        <Heading/>
        <Box height='auto' width='100%' my='1rem'>
            {
             Array.isArray(questions) && questions.map((question, idx) => {
                    return (
                        <ToggleItem question={question.question} answer={question.answer} key={idx}/>
                    )
                })
            }

        </Box>


    </Box>
  )
}

export default QuestionsSections
