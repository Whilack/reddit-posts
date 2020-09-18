<template>
  <v-container>
    <h1 align="center">Reddit popular posts</h1>
    <v-row dense>
      <v-col v-for="post in posts" :key="post._id" cols="8" class="mx-auto">
        <card :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card";
import Posts from "../collections/Posts";

export default {
  components: {
    Card,
  },
  meteor: {
    $subscribe: {
      posts: [],
    },
    posts() {
      return Posts.find({});
    },
  },
};
</script>
