 <template>
 <div >
   <div >
     <div >
       <div >Create Component</div>

       <div >
         I'm the Create Component component.
       </div>
       <button v-on:click="createUser">Create User</button>
     </div>
   </div>
 </div>
 </template>

 <script>
  import axios from 'axios'
  export default {
    data(){
      return {
        post:{
          name: 'Mark2',
          age: 22,
          username: 'Mark212'
        }
      }
    },
    methods: {
      createUser(){
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
            "Access-Control-Max-Age": 2592000, // 30 days
            "Content-Type": "text/html",
          };
          let uri = 'http://localhost:3000/create/createUser';
          axios.post(uri, this.post, headers).then(data => {
            console.log(data.data)
        });
      }
    }
  }
 </script>