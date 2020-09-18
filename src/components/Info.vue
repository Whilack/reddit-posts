<template>
  <v-container>
    <h1 align="center">Reddit popular posts</h1>
    <v-row dense>
      <v-col v-for="post in currentPage" :key="post._id" cols="8" class="mx-auto">
        <card :post="post" />
      </v-col>
    </v-row>

    <v-row class="mt-2" align="center" justify="center">
      <span class="grey--text">Posts per page</span>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
            {{ itemsPerPage }}
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(number, index) in itemsPerPageArray"
            :key="index"
            @click="updateItemsPerPage(number)"
          >
            <v-list-item-title>{{ number }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

       <v-pagination
        v-model="page"
        :length="numberOfPages"
        :total-visible="10"
      ></v-pagination>

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

  data() {
    return {
      page: 1,
      itemsPerPageArray: [5, 10, 15, 20],
      itemsPerPage: 10,
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.posts.length / this.itemsPerPage);
    },

    currentPage() {
      var begin = (this.page - 1) * this.itemsPerPage;
      var end = begin + this.itemsPerPage;
      return this.posts.slice(begin, end);
    },
  },
  methods: {
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
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
