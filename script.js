//Outside the document ready!? WHAAAA!?
function generateProperty(){
	var propertyID = randomNumber(1, 9999);
	var propertyValue = randomNumber(3,25);
	var propertyArea = randomNumber(1000,10000);


	var el = 	"<div class='newProperty'>" +
					"<div>Property ID : " + propertyID + "</div>" +
					"<div>" + propertyArea + " Sq. Ft.</div>" +
					"<div>$" + propertyValue + " / sq.ft.</div>" +
					"<div><button class='removeButton'>Remove</button></div>"
				"</div>";

	$('#customerList').append(el);
	el = $('#customerList').children().last();
	el.hide().slideToggle('fast');
}

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function (){

	//event handler COULD be here

	//Advanced selector! This is new! SWEET!
	$('#customerList').on('click', '.newProperty button', function(){
		//You can reassign $(this)! Even with a cool Bling!
		var $this = $(this);
		//could use .closest()!
		$(this).parent().parent().slideToggle('fast', function(){
			$(this).remove();
		});
	})
})