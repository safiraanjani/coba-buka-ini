import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animasi untuk gerakan tali gorden atau rumbai
const swing = keyframes`
  0% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(-10px); }
`;

// Animasi untuk partikel hiasan
const float = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 1; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
  100% { transform: translateY(0) translateX(0); opacity: 1; }
`;

// Wrapper untuk rumbai
const RumbaiWrapper = styled.div`
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  width: 80%;
  pointer-events: none;
  flex-wrap: wrap;
`;

// Styling untuk rumbai berbentuk segitiga
const Rumbai = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 30px solid ${(props) => props.color || '#ff6b6b'};
  margin: 0 10px;
  position: relative;
  animation: ${swing} 2s ease-in-out infinite;
`;

// Tali rumbai menggunakan pseudo-element ::after
const Tali = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 50px;
  background-color: #333;
`;

// Wrapper untuk hiasan partikel
const HiasanWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  pointer-events: none;
`;

// Styling untuk partikel hiasan
const Hiasan = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color || '#ff6b6b'};
  border-radius: 50%;
  animation: ${float} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

// Komponen RumbaiAnimasi dengan hiasan tambahan
const RumbaiAnimasi = () => {
  const colors = ['#ff6b6b', '#ff8e72', '#ffcd60', '#4ecdc4', '#48dbfb', '#ff6347', '#00bfff', '#ff1493']; // 8 warna

  return (
    <>
      <HiasanWrapper>
        {/* Menambahkan lebih banyak partikel */}
        {Array.from({ length: 20 }).map((_, index) => (
          <Hiasan
            key={index}
            top={Math.random() * 50} // Posisi acak di atas
            left={Math.random() * 100} // Posisi acak horizontal
            color={colors[index % colors.length]}
            delay={Math.random() * 1.5} // Waktu delay acak lebih pendek
          />
        ))}
      </HiasanWrapper>
      <RumbaiWrapper>
        {colors.slice(0, 8).map((color, index) => ( // Menggunakan 8 warna untuk 8 rumbai
          <Rumbai key={index} color={color} style={{ animationDelay: `${index * 0.5}s` }}>
            <Tali />
          </Rumbai>
        ))}
      </RumbaiWrapper>
    </>
  );
};

export default RumbaiAnimasi;
