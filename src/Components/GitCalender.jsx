import { Flex,Text } from "@chakra-ui/react";
import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip";
import { AppContex } from "../Context/Authcontext";

export const GitCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
          const { theme } = useContext(AppContex);
          const light = {
            backgroundColor: "#f5fcff",
            color: "black",
          };

          const dark = {
            backgroundColor: "black",
            color: "#f5fcff",
          };
  return (
    <>
      <Text
        style={theme === "light" ? light : dark}
        ml={{ base: "120px", sm: "140px", md: "172px", lg: "350px" }}
        fontWeight={600}
        textAlign="center"
        fontSize={{ base: "12px", md: "18px", lg: "20px" }}
        mt={{ base: "37px", md: "40px", lg: "55px" }}
        letterSpacing={"3px"}
      >
        GITHUB CALENDER
      </Text>
      <Flex
        style={theme === "light" ? light : dark}
        ml={{ base: "112px", sm: "140px", md: "152px", lg: "400px" }}
        width={{ base: "69%", md: "80%", lg: "70%" }}
        justifyContent="center"
        alignItems="center"
        mt={{ base: "10px", md: "20px" }}
      >
        <GitHubCalendar
          username="Janhaviprabhu"
          year={new Date().getFullYear()}
          transformData={selectLastHalfYear}
        >
          {" "}
          <ReactToolTip />{" "}
        </GitHubCalendar>
      </Flex>
    </>
  );
};
