import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./style/themes/theme";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ThemeProvider theme={appTheme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
