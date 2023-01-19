import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MessengerThemeContext = createContext({});

const PINK = '#FF8AAE';
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const LIGHT_GRAY = '#D3D3D3';
const MEDIUM_GRAY = '#6E6E80';
const LIGHT_BLUE = '#9ADCFF';

export function MessengerThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    header: {
      backgroundColor: PINK,
      titleTextColor: BLACK,
      subTitleColor: BLACK,
    },
    content: {
      backgroundColor: WHITE,
    },
    launcher: {
      backgroundColor: PINK,
    },
    textArea: {
      backgroundColor: WHITE,
      textColor: MEDIUM_GRAY,
    },
    welcomeMessages: {
      backgroundColor: WHITE,
      textColor: BLACK,
      closeButtonBackgroundColor: LIGHT_GRAY,
    },
    widgets: {
      text: {
        left: {
          textColor: BLACK,
          backgroundColor: LIGHT_BLUE,
        },
        right: {
          textColor: BLACK,
          backgroundColor: WHITE,
        },
      },
    },
  });
  const value = useMemo(() => ({
    theme, setTheme,
  }), [theme, setTheme]);
  return (
    <MessengerThemeContext.Provider value={value}>
      {children}
    </MessengerThemeContext.Provider>
  );
}

MessengerThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
