import { Box, Flex, Text } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
import ReactToolTip from 'react-tooltip'

export default function GitCalender() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <>
      <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '37px', md: '40px', lg: '55px' }} letterSpacing={{ base: '3px' }}>GITHUB CALENDER</Text>
      <Flex width={{ base: '90%', md: '80%', lg: '90%' }} justifyContent='center' alignItems='center' m='auto' mt={{ base: '10px', md: '20px' }}>
        <GitHubCalendar  username="Janhaviprabhu" year='last' color='#00B5D6'> <ReactToolTip delayShow={20} html /> </GitHubCalendar>
      </Flex>
    </>
  )
}