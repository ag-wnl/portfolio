import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { CssBaseline, GeistProvider, Themes  } from '@geist-ui/core'
import Home from './pages/Home';


function App() {

  const myTheme1 = Themes.createFromDark({
    type: 'myTheme',
    palette: {
      success: '#000',
    },
  })


  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'));
  }

  return (
    <GeistProvider themes={[myTheme1]} themeType={themeType}>
      <CssBaseline /> 
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/blogs' element={<Blogs />} /> */}
      </Routes>
    </GeistProvider>
  
  );
}

export default App;
