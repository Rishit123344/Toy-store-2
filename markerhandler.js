AFRAME.registerComponent('markerhandler',{
    init:function(){
        this.el.addEventListener('markerFound',()=>{
            console.log('markerFound')
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost',()=>{
            console.log('markerLost')
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttondiv = document.getElementById('button-div')
        buttondiv.style.display='flex'
        var ratingbutton = document.getElementById('rating-button')
        var orderbutton = document.getElementById('order-button')
        ratingbutton.addEventListener('click',function(){
            swal({
                icon:'warning',
                title:'Rate Toy',
                text:'Work In Progress'
            })
        })
        orderbutton.addEventListener('click',function(){
            swal({
                icon:'https://i.imgur.com/4NZ6uLY.jpg',
                title:'Thanks For Ordering',
                text:'Ur Order Will Be Served Soon'
            })
        })
    },
    handleMarkerLost:function(){
        var buttondiv = document.getElementById('button-div')
        buttondiv.style.display='none'
    }
})