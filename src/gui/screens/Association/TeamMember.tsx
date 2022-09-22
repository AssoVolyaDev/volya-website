import { ReactElement } from 'react';
import styled from 'styled-components';
import useLocale from '../../../hooks/useLocale';
import { useMediaQuery } from 'react-responsive';

import * as Types from '../../../types';
import * as Constants from '../../../constants';

import DefaultMaleProfileImg from '../../../assets/images/male-member.png';
import DefaultFemaleProfileImg from '../../../assets/images/female-member.png';

type TeamMemberPosition = 'left' | 'right';

const WINDOWS_SIZE = window.innerWidth;
const DESKTOP_PERCENT_IMG_SIZE = 1 / 8;
const MOBILE_PERCENT_IMG_SIZE = 1 / 4;

interface TeamMemberInterface {
  teamMember: Types.DefaultTeamMember | Types.TeamMember;
  position: TeamMemberPosition;
}

const TeamMemberContainer = styled.div<{ position: TeamMemberPosition }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ position }) => (position === 'left' ? 'flex-start' : 'flex-end')};

  > img {
    ${({ position }) => position === 'left' && 'margin-right: 15px'};
    ${({ position }) => position === 'right' && 'margin-left: 15px'};
  }
`;

function TeamMember({ teamMember, position }: TeamMemberInterface): ReactElement {
  const isMobile = useMediaQuery({ maxWidth: Constants.DEVICE_SIZES.mobileXL });

  const isDefaultTeamMember = (teamMember as Types.DefaultTeamMember).gender !== undefined;

  const { shortLocale } = useLocale();
  const text = (
    <>
      {!isDefaultTeamMember && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h5>{(teamMember as Types.TeamMember).pseudo[shortLocale as keyof Types.I18nText]}</h5>
          {/* <h5>{teamMember.description[shortLocale as keyof Types.I18nText]}</h5> */}
        </div>
      )}
    </>
  );
  const image = (
    <img
      src={
        isDefaultTeamMember
          ? (teamMember as Types.DefaultTeamMember).gender === 'male'
            ? DefaultMaleProfileImg
            : DefaultFemaleProfileImg
          : (teamMember as Types.TeamMember).imageProfileUrl
      }
      width={
        isMobile ? MOBILE_PERCENT_IMG_SIZE * WINDOWS_SIZE : DESKTOP_PERCENT_IMG_SIZE * WINDOWS_SIZE
      }
      height={
        isMobile ? MOBILE_PERCENT_IMG_SIZE * WINDOWS_SIZE : DESKTOP_PERCENT_IMG_SIZE * WINDOWS_SIZE
      }
      className="d-inline-block align-top"
      alt="Volya logo"
    />
  );

  return (
    <TeamMemberContainer position={position}>
      {position === 'left' ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </TeamMemberContainer>
  );
}

export default TeamMember;
