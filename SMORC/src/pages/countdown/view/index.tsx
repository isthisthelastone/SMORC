import { AirdropBackground, CountdownBackground, Logo } from "@shared/assets";
import { EffectsWrapper } from "../../home";
import { Box, Flex, SpecialBox, Typography } from "@shared/components";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  GreyTransparentSocials,
  HugeWhiteSocials,
} from "@shared/components/molecules";
import { Copyright } from "@shared/components/molecules/copyright";
import { MobileCountdown } from "@pages/countdown/view/mobile.tsx";
import { css } from "@emotion/react";

export const Countdown = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 768px is a common breakpoint for mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <EffectsWrapper
      className={`flex-col px-[${isMobile ? 5 : 12.5}%]  gap-[${isMobile ? 5 : 7.5}rem]`}
      url={CountdownBackground}
    >
      <Flex className="pt-[2rem] justify-center ">
        <Logo />
      </Flex>
      {isMobile ? (
        <MobileCountdown />
      ) : (
        <>
          <ClocksWithTitle />
          <CountdownSocials />
          <Footer />
        </>
      )}
    </EffectsWrapper>
  );
};

interface ClocksWithTitleProps {
  isMobile?: boolean;
}
export const ClocksWithTitle = ({ isMobile }: ClocksWithTitleProps) => {
  const [time, setTime] = useState<null | string>(null);
  const fetchTime = async () => {
    try {
      const response = await fetch("https://api.smorc.io/startup");

      const data = await response.json();

      setTime(data.datetime);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };
  useEffect(() => {
    fetchTime();
  }, []);

  const textStyles = `text-[${isMobile ? "2.25rem" : "3.5rem"}] font-[${isMobile ? "600" : "700"}]`;

  return (
    <Flex
      className={`flex-col gap-[4rem] justify-center text-center px-[${isMobile ? 0 : 25}%]`}
    >
      <Typography className={textStyles}>Website Launchs In</Typography>
      <SpecialBox className="flex-1">
        <Flex
          className={`justify-center pt-[${isMobile ? 0.5 : 1.5}rem] pb-[${isMobile ? 0 : 2}rem] flex-1 text-center`}
        >
          <Clock isMobile={isMobile} targetDate={time} />
        </Flex>
      </SpecialBox>
    </Flex>
  );
};

const Clock: React.FC<{ targetDate: string | null; isMobile?: boolean }> = ({
  targetDate,
  isMobile,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (!targetDate) return;
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: days < 10 ? "0" + days : days.toString(),
          hours: hours < 10 ? "0" + hours : hours.toString(),
          minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
          seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <ClockContainer isMobile className={"sm:text-[2.25rem] sm:font-[600]"}>
      <DisplayTime isMobile={isMobile} label="Days" value={timeLeft.days} />
      <Typography className={`text-[${isMobile ? 2.25 : 3.5}rem] pt-[0.25rem]`}>
        :
      </Typography>
      <DisplayTime isMobile={isMobile} label="Hours" value={timeLeft.hours} />
      <Typography className={"pt-[0.25rem]"}>:</Typography>
      <DisplayTime
        isMobile={isMobile}
        label="Minutes"
        value={timeLeft.minutes}
      />
      <Typography className={"pt-[0.25rem]"}>:</Typography>
      <DisplayTime
        isMobile={isMobile}
        label="Seconds"
        value={timeLeft.seconds}
      />
    </ClockContainer>
  );
};
interface DisplayTimeProps {
  label: string;
  value: string;
  isMobile?: boolean;
}

const DisplayTime: React.FC<DisplayTimeProps> = ({
  label,
  value,
  isMobile,
}) => {
  const mainTextStyles = `text-[${isMobile ? "2.25rem" : "3.5rem"}] font-[${isMobile ? "600" : "700"}]`;
  const additionalTextStyles = `text-[${isMobile ? "0.875rem" : "1rem"}] font-[400]`;

  return (
    <Flex className="flex-col items-center justify-center p-1">
      <TimeValue className={mainTextStyles}>{value}</TimeValue>
      <TimeLabel className={additionalTextStyles}>
        <Typography special>{label}</Typography>
      </TimeLabel>
    </Flex>
  );
};

interface CountdownSocialsProps {
  className?: string;
}

export const CountdownSocials = ({ className }: CountdownSocialsProps) => (
  <Flex className={`${className} flex-col gap-[2rem] justify-center`}>
    <Typography className={"font-[1.25rem] text-center font-[600]"}>
      Join SMORC
    </Typography>
    <HugeWhiteSocials className={"justify-center"} />
  </Flex>
);

export const Footer = () => (
  <Flex className="flex-1 justify-between pt-[15rem] pb-[2rem]">
    <Copyright />
    <GreyTransparentSocials />
  </Flex>
);

const TimeValue = styled(Typography)`
  font-weight: 700;
`;

const TimeLabel = styled(Typography)`
  font-size: 1rem;
  font-weight: 400;
`;

interface ClockContainterProps {
  isMobile: boolean;
}

const ClockContainer = styled(Flex)(
  ({ isMobile }: ClockContainterProps) => css`
    display: flex;
    text-align: center;
    justify-content: center;
    grid-gap: ${isMobile ? "0.25rem" : "1rem"}
    flex: 1;
  `,
);
