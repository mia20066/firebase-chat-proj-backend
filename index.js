const functions = require("firebase-functions");
const axios = require("axios"); 


exports.createChatEngineUser = functions.auth.user().onCreate((user) => { 
    console.log("create", user); 

    
    axios.post(
        "https://api.chatengine.io/users/",
        {
          username: user.email,
          secret: user.uid,
          email: user.email,
          first_name: user.displayName,
        },
        { headers: { "Private-Key": "10a3cece-6e9f-43da-95cf-d01383ed7edc" } }  

      );
  });
  
  exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => { 
    console.log("delete", user); 

    
    axios.delete("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": "4eaf43b2-0b96-494b-acd3-f9188aefc5d8",  
          "User-Name": user.email,
          "User-Secret": user.uid, 
        },
      });
  });

 