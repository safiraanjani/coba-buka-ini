import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animasi untuk membuat balon terbang ke atas
const flyUp = keyframes`
  0% { transform: translateY(100vh); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
`;

// Wrapper untuk balon-balon
const BalloonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  pointer-events: none; /* agar balon tidak menghalangi interaksi dengan konten lain */
`;

// Styling untuk balon dan tali
const Balloon = styled.div`
  width: 50px;
  height: 70px;
  background-color: ${(props) => props.color || 'pink'};
  border-radius: 50%;
  animation: ${flyUp} 6s ease-in infinite;
  margin: 0 10px;
  box-shadow: inset -10px -10px 0 rgba(0, 0, 0, 0.2);

  // Tali balon menggunakan pseudo-element ::after
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 50px;
    background: #333;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const BalonAnimasi = () => {
  const colors = ['#ff6b6b', '#ff8e72', '#ffcd60', '#4ecdc4', '#48dbfb'];

  return (
    <BalloonWrapper>
      {colors.map((color, index) => (
        <Balloon key={index} color={color} style={{ animationDelay: `${index * 1}s` }} />
      ))}
    </BalloonWrapper>
  );
};

export default BalonAnimasi;
