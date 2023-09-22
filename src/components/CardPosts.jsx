import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import React from "react";

const CardPosts = ({ posts }) => {
  return (
    <View>
      {posts.map((post) => (
        <Card key={post.id} style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>
              {post.id} - {post.title}
            </Text>
            <Text style={styles.body}>{post.body}</Text>
          </Card.Content>
          <Card.Cover
            source={{ uri: "https://picsum.photos/700" }}
            style={styles.image}
          />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
};

export default CardPosts;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },

  body: {
    fontSize: 14,
  },

  image: {
    height: 200,
    width: 300,
    flex: 1,
    alignSelf: "center",
    marginBottom: 10,
  },

  button: {
    fontSize: 13.5,
    marginBottom: 10,
  },
});
