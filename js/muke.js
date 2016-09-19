 
$(document).ready(function(e) {
	function list(parent,chilren){
		parent.hover(function(){
		chilren.css("display","block")
		},function(){
		chilren.css("display","none")	
			})
	chilren.hover(function(){
		chilren.css("display","block")
	   },function(){
		chilren.css("display","none")
		   })
		}
    list($("#a"),$(".a"));
	list($("#b"),$(".b"));
	list($("#c"),$(".c"));
	list($("#d"),$(".d"));
	list($("#e"),$(".e"));
	list($("#f"),$(".f"));
	list($("#g"),$(".g"));   
});