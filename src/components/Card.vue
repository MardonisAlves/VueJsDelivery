<template>
  <div>
  <b-container fluid>
  <b-row align-h="around">
  <b-card
     title="Calabresa"
     img-src="https://picsum.photos/600/300/?image=21"
     img-alt="Image"
     img-top
     tag="article"
     style="max-width: 10rem;"
     class="mb-2">
     <b-card-text>
       <p>M Valor 20.50</p>
       <p>G Valor 22.50</p>
     </b-card-text>

     <b-button href="#" variant="primary">+</b-button>
   </b-card>

   <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=20"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 10rem;"
      class="mb-2">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">+</b-button>
    </b-card>
   <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=22"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 10rem;"
      class="mb-2">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">+</b-button>
    </b-card>


    <b-card
       title="Card Title"
       img-src="https://picsum.photos/600/300/?image=23"
       img-alt="Image"
       img-top
       tag="article"
       style="max-width: 10rem;"
       class="mb-2">
       <b-card-text>
         Some quick example text to build on the card title and make up the bulk of the card's content.
       </b-card-text>

       <b-button href="#" variant="primary">+</b-button>
     </b-card>


     <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=24"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem;"
        class="mb-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">+</b-button>
      </b-card>
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
}
.card{
  margin-top:80px;
}
.card-text{
  font-size: 12px;
}
</style>
