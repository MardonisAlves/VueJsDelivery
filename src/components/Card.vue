<template>
  <div>
  <b-container>
  <b-row align-h="around">
    <b-card-group deck>
     <b-card title="Calabresa" img-src="static/images/calabresa.png" img-alt="Card image" img-top>
       <b-card-text>
         Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
      </b-card>

      <b-card title="Calabresa" img-src="static/images/calabresa.png" img-alt="Card image" img-top>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
       </b-card-text>
       </b-card>

       <b-card title="Calabresa" img-src="static/images/calabresa.png" img-alt="Card image" img-top>
         <b-card-text>
           Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
        </b-card>

        <b-card title="Calabresa" img-src="static/images/calabresa.png" img-alt="Card image" img-top>
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
         </b-card-text>
       </b-card>

  </b-card-group>
  </b-row>
  </b-container>
    </div>

</template>
<script>
export default {
  name: 'Card'
}
</script>
<style>
.card{
  border: 0px;
  margin-top:80px;
}
.card-title{
  font-size:12px;
}
.card-text{
  font-size: 10px;
}
</style>
