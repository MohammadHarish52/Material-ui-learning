import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "./components/Layout";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
