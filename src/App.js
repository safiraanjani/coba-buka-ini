import React from 'react';
import PesanLucu from './components/PesanLucu';
import BalonAnimasi from './components/BalonAnimasi';
import RumbaiAnimasi from './components/RumbaiAnimasi';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
  font-family: Arial, sans-serif;
  text-align: center;
  position: relative;
  padding: 20px;
  cursor: pointer;
`;

function App() {
  return (
    <AppContainer>
      <RumbaiAnimasi /> 
      <h1>🎉 Happy Birthday, Bestie! 🎉</h1>
      <AudioPlayer />
      <PesanLucu />
      <BalonAnimasi />
      <Footer />
    </AppContainer>
  );
}

export default App;
