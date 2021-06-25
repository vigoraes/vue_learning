Vue.component('navbar',{
	template: `
	<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="images/logo.png" width="50" height="50" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">nothing yet<span class="sr-only">(Página atual)</span></a>
      <a class="nav-item nav-link" href="#">nothing yet</a>
      <a class="nav-item nav-link" href="#">nothing yet</a>
      <a class="nav-item nav-link disabled" href="#">nothing yet</a>
    </div>
  </div>
</nav>
	`,
	data(){
		return{
			tmp: 'tmp'
		}
	}
})

Vue.component('rodape',{
	template: `
	<div><p>{{user}} study &copy-2020</p></div>
	`,
	data(){
		return{
			user: 'Johnzin'
		}
	}
})

Vue.component('continente', {
			props: {
				local: {
					type: String,
					required: true,
					default: ''
				},
				
				color: {
					type: String,
					required: true,
				},
				
				index: {
					type: Number,
					required: true
				}
			},
			
			template: `
			<div :id="local" class="continente">
			<img :src="image" @click='addSoldier' usemap='getMap'>
			<h1>{{soldiers}}</h1>
			</div>
			`,
			
			data(){
				return{
					soldiers: 1
				}
			},

			methods: {
				addSoldier(){
					this.soldiers += 1
					this.$emit('update-soldiers', this.index)
				}
			},
			
			computed: {
				image(){
					return 'images/' + this.local + '/' + this.color + '.png'
				}
			}			
		})


		var app = new Vue({
	 	 	el: '#app',
	  		
	  		data: {
	  			continentes: ['medio-paraiba', 'metropolitana', 'serrana', 'norte', 'noroeste', 'centro-sul', 'lagos'],
	  			color: ['default','default','default','default','default','default','default'],
	  			palette: ['blue', 'pink', 'purple', 'green', 'orange', 'red', 'yellow'],
	  			soldiers: [1,1,1,1,1,1,1]
	    	},
	    	
	    	methods: {
	    		updateColor(color){
	    			var nums = [0,1,2,3,4,5,6],
					ranNums = [],
					i = nums.length,
					j = 0

					while (i--) {
						j = Math.floor(Math.random() * (i+1));
						ranNums.push(nums[j]);
						nums.splice(j,1)
					}

					for(let i = 0; i < 7; i++){
						Vue.set(this.color, i, this.palette[ranNums[i]])	
					} 
	    		},
	    		
	    		resetColor(){
	    			for(let i = 0; i < 7; i++) Vue.set(this.color, i, 'default')
	    		},

	    		updateSoldiers(index){
	    			Vue.set(this.soldiers, index, this.soldiers[index] + 1)
	    		}
	    	}
		})