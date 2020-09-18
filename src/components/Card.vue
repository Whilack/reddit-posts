<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-icon large left>mdi-reddit</v-icon>
        <span class="title font-weight-light">{{post.author}}</span>
      </v-card-title>

      <v-card-text>
        <a class="headline font-weight-bold" target="_blank" :href='"https://www.reddit.com" + post.permalink'>{{post.title}}</a>
        <v-img :src="post.url" max-width="500px"></v-img>
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title>{{new Date(post.created * 1000).toLocaleString("en-US")}}</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-thumb-up-outline</v-icon>
            <span class="subheading mr-2">{{post.ups}}</span>
            <v-icon class="mr-1">mdi-arrow-up-bold-circle-outline</v-icon>
            <span class="subheading mr-2">{{post.upvote_ratio}}</span>
            <v-icon class="mr-1">mdi-comment-multiple-outline</v-icon>
            <span class="subheading">{{post.num_comments}}</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>
