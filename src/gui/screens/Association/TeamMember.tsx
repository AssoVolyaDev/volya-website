import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
  const { t } = useTranslation();

  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* TODO : comprendre pourquoi cette règle fait ça ?! */}
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <h5>{t(`global.members.${teamMember.id}.name`)}</h5>
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <h5>{t(`global.members.${teamMember.id}.description`)}</h5>
    </div>
  );
  const image = (
    <img
      src={teamMember.picture}
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
