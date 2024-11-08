import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Pesan-pesan ulang tahun
const messages = [
  "Selamat ulang tahun, Novia Ramadhani Pacarnya Kim Mingyu Seventeen!",
  "Semoga harimu seindah dirimu!",
  "Semoga setiap wishlistmu tercapai dalam waktu dekat ini satu persatu!",
  "Tetap konyol, tetap hebat!",
  "Btw, jangan lupa traktir giviz yaa!",
  "Bercanda :v",
  "Nah sekarang coba buka kadonya 🎁"
];

// Styled-component untuk pesan
const MessageContainer = styled.div`
  margin: 20px;
  font-size: 1.2em;
  text-align: center;
  animation: bounce 1s ease infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

// Styled-component untuk ikon tap
const TapIcon = styled.div`
  font-size: 2em;
  margin-top: 10px;
  color: #ff6b6b;
`;

// Styled-component untuk tombol
const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #4ecdc4;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #48dbfb;
  }
`;

// Styled-component untuk overlay pop-up video
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Styled-component untuk konten pop-up video responsif
const PopupContent = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    max-width: 60%;
  }

  video {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
  }
`;

// Tombol untuk menutup pop-up
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

// Path ke video default
const defaultVideoUrl = require('../assets/video.mp4'); // Sesuaikan path ke videomu

// Komponen pop-up video
const VideoPopup = ({ isOpen, videoUrl = defaultVideoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <video width="100%" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </PopupContent>
    </Overlay>
  );
};

// Komponen utama untuk pesan ulang tahun
function PesanLucu() {
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const nextMessage = () => {
    setIndex((index + 1) % messages.length);
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    if (index === messages.length - 1) {
      setShowButton(true); // Tampilkan tombol setelah pesan terakhir
    } else {
      setShowButton(false);
    }
  }, [index]);

  return (
    <div>
      <MessageContainer onClick={nextMessage}>
        {messages[index]}
      </MessageContainer>
      {index < messages.length - 1 && <TapIcon>👆 Coba Tap Pesannya! (pelan-pelan)</TapIcon>}
      {showButton && <Button onClick={openPopup}>Buka Kado</Button>}

      {/* Pop-up video */}
      <VideoPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default PesanLucu;
