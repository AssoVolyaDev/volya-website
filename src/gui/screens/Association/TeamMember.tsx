import { ReactElement } from 'react';
import styled from 'styled-components';
import useLocale from '../../../hooks/useLocale';

import * as Types from '../../../types';

type TeamMemberPosition = 'left' | 'right';

interface TeamMemberInterface {
  teamMember: Types.TeamMember;
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
  const { shortLocale } = useLocale();
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h5>{teamMember.pseudo[shortLocale as keyof Types.I18nText]}</h5>
      {/* <h5>{teamMember.description[shortLocale as keyof Types.I18nText]}</h5> */}
    </div>
  );
  const image = (
    <img
      src={teamMember.imageProfileUrl}
      width="100"
      height="100"
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
