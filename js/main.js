$(document).ready(function() {
    $('h2.done-count').hide()
    
    $('.form-list').on('keydown','input',function(k){
        if(k.keyCode==13){
            
            k.preventDefault();
//            var n = $(this).parent().next();
//            
//            if(n.length == 0){
//                var clone = $(this).parent().clone();
//                $(this).parent().parent().append(clone);
//            }
//        
//            //$(this).parent().next().find('input').focus();
//            
//              
//            
        }
    });
});

