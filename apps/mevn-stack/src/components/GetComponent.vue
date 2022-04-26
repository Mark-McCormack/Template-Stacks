 <template>
 <div >
   <div >
     <div >
       <div >Get Component</div>

       <div >
         I'm the Get Component component.
       </div>
       <button v-on:click="getUsers">Get Users</button>
     </div>
   </div>
 </div>
 </template>

 <script>
  import axios from 'axios'
  export default {
    data(){
      return {
        post:{}
      }
    },
    methods: {
      getUsers(){
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
            "Access-Control-Max-Age": 2592000, // 30 days
            "Content-Type": "text/html",
          };
          let uri = 'http://localhost:3000/get/getUsers';
          axios.get(uri, this.post, headers).then(data => {
            console.log(data.data)
        });
      }
    }
  }
 </script>