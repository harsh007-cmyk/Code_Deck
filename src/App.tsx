import React from 'react';
import GlobalStyles from './Styles/global'
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import ModalProvider from './context/ModalContext';
import PlaygroundProvider from './context/PlaygroundContext';
function App() {
  return (
    <div>
      <PlaygroundProvider>
      <ModalProvider>
      <GlobalStyles/>
      <HomeScreen/>
      </ModalProvider>
      </PlaygroundProvider>
    </div>
  );
}

export default App;
