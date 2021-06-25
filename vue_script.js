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
			<h1>{{soldiers}}</h1>
			<img :src="image" @click='addSoldier'>
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
				},

				isReset(){
					if(this.reset){
						this.soldiers == 1
						this.reset = false
					} 


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
	  			reset: false
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
	    			this.reset = true
	    		}
	    	}
		})