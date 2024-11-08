import React from 'react';
import styled from 'styled-components';

// Styled-component untuk footer
const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: #333;  // Mengubah warna teks menjadi #333
  text-align: center;
  font-size: 1.2em;
  font-family: 'Arial', sans-serif;
`;

// Komponen Footer
const Footer = () => {
  return (
    <FooterContainer>
      Made with ❤️ by Sky
    </FooterContainer>
  );
};

export default Footer;
