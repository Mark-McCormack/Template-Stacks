<template>
  <div>
    <div>
      <div>
        <div>Delete Component</div>

        <div>I'm the Delete Component component.</div>
        <button v-on:click="deleteUsers">Delete Users</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    deleteUsers() {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        'Content-Type': 'text/html',
      };
      let uri = 'http://localhost:3000/delete/deleteUsers';
      axios.delete(uri, this.post, headers).then((data) => {
        console.log(data.data);
      });
    },
  },
};
</script>
