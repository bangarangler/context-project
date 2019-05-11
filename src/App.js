import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import PageContent from "./components/PageContent.js";
import { ThemeProvider } from './contexts/ThemeContext.js'

class App extends Component {
  render() {
    return (
<ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
    );
  }
}

export default App;
