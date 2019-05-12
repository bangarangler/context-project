import React from "react";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import PageContent from "./components/PageContent.js";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import { LanguageProvider } from "./contexts/LanguageContext.js";

const App = props => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
