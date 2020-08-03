<template>
  <div id="chat">
    <div class="q-pa-md row justify-center" id="chatBox">
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/7f637399-f0fe-4037-b861-97cbce6c5965">
        </iframe>
      <!--
      
        <div style="width: 100%; max-width: 400px">
          <div class="text-h4 text-center q-mb-lg">We Bot personal chatbot!</div>
          <q-chat-message
            name="Bot 1337"
            stamp="7 minutes ago"
            :text="['Did you know that We Bot gives customers a really good time? Wink wink' ]"
            sent
            text-color="white"
            bg-color="primary"
          >
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--sent"
                src="https://cdn.quasar.dev/img/avatar4.jpg"
              >
            </template>
          </q-chat-message>

          <q-chat-message
            name="Jane"
            :text="['Wow thats insane, take my money']"
            bg-color="amber"
          >
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="https://cdn.quasar.dev/img/avatar2.jpg"
              >
            </template>
          </q-chat-message>
          
        </div>
        
        <form action="" method="" id="chatBotForm">
         <input type="text" name="message" id="msgArea" :value="msg" >
         <input type="button" value="Send" id="msgBtn">
        </form>
       -->
      </div>
   <q-item clickable v-ripple class="float-right">
    <q-item-section avatar @click="openOrCloseChat">
      <q-avatar
        color="purple"
        text-color="white"
        icon="chat"
        />
      </q-item-section>
    </q-item>
      
  </div>
  
</template>

<script>

export default {
     name: 'ChatWidget',
     props: {
       msg: String
     },
     methods: {
       openOrCloseChat() {
         let chatBox = document.getElementById('chatBox');
         if(chatBox.style.display == 'inline-flex' || chatBox.style.display == 'block') {
           chatBox.style.display = 'none'
 
         }else {
            chatBox.style.display = 'block'
     
         }
         
       }
     }    
}


</script>

<style lang="scss">
#chatBox {
  display: none;
  border: 1px solid black;
  background-color: $webotWhite;
  border-radius: -100px;
  background: #88b7d5;
	border: 4px solid #c2e1f5;

  position: relative;
}

#chat {
  z-index: 4;
  position: fixed;
  right: 0;
  bottom: 20px;
  border-radius: 50%;
}

#chatBotForm {
  background-color: ghostwhite;
  min-width: 100%;
  font-size: 1em;
  > div {
    min-width: 100%;
  }
}
#msgArea {
  width: 80%;
}

#msgBtn {
  width: 19%;
}
</style>