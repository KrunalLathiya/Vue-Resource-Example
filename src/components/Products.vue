<template>
    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>
              <tr v-for="product in products">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
      data(){
            return{
                products: []
            }
        },
      created: function()
      {
          this.fetchProducts();
      },
      methods: {
        fetchProducts(){
          {
              this.$http.get('http://localhost:8000/api/products').then((response) => {
                console.log(response.body);
                  this.products = response.body;
              });
          }
        }
      }
    }
</script>
