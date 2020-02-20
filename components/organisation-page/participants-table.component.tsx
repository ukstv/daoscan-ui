import React from "react";
import { Participant } from "./queries";
import { Styled } from "theme-ui";
import styled from "@emotion/styled";

interface Props {
  participants: Participant[];
}

const TdNumeric = styled(Styled.td)`
  text-align: right;
`;

export function ParticipantsTable(props: Props) {
  const renderRow = (participant: Participant) => {
    return (
      <tr key={participant.address}>
        <Styled.td>{participant.address}</Styled.td>
        <TdNumeric>{participant.shares.amount}</TdNumeric>
      </tr>
    );
  };

  const renderBody = () => {
    return props.participants.map(participant => {
      return renderRow(participant);
    });
  };

  return (
    <Styled.table>
      <thead>
        <tr>
          <Styled.th>Participant</Styled.th>
          <Styled.th>Shares</Styled.th>
        </tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </Styled.table>
  );
}
