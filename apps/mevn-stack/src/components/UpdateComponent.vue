 <template>
 <div >
   <div >
     <div >
       <div >Update Component</div>

       <div >
         I'm the Update Component component.
       </div>
      <button v-on:click="updateUser">Update User</button>
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
      updateUser(){
                  const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
            "Access-Control-Max-Age": 2592000, // 30 days
            "Content-Type": "text/html",
          };
          let uri = 'http://localhost:3000/update/updateUsers';
          axios.put(uri, this.post, headers).then(data => {
            console.log(data.data)
        });
      }
    }
  }
 </script>