$(".btn").click(function (e) { 
    var number = 1 + Math.floor(Math.random() * 4); 
    function handleNumber(number){
        // console.log(number);
        
        switch(number){
            case 1:
                $(".btn").text(you)
            break
            case 2:
                $(".btn").text(you)
            break
            case 3:
                $(".btn").text(you)
            break
        }
    } 
});
