import LetterGlitch from './LetterGlitch';
<LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>
import React from 'react';
import LetterGlitch from './LetterGlitch'; // or from 'react-glitch-effect'

export default function DashboardTitle() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      >
        GAMIFIED DASHBOARD
      </LetterGlitch>
    </div>
  );
}