import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";
import Navigation from "./Navigation";
import Toast from "react-native-toast-message";

export default function App() {
  const client = new ApolloClient({
    uri: "http://192.168.0.13:4000",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ApolloProvider>
  );
}
