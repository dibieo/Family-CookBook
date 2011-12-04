
//Enter key triggers the search
$(document).keypress(function(e) {
    if(e.keyCode == 13) {

      $("#search_recipe").click();
    }
});



$(function addARecipe(){
    $("#add_recipe").button()
			.click(function() {
				window.location = "add-recipe.html";
			});
});

$(function browseRecipes(){
    $("#browse_recipe").button()
			.click(function() {
				window.location = "browse-recipes.html";
			});
});

$(function viewRecipes(){
    $("#search_recipe").button()
			.click(function() {
				window.location = "view-recipe.html";
			});
});




//Adds a Recipe

$(function() {


		$( "#requestRecipe-form" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Send Request": function() {
                                  alert('Thanks! Your request has been sent!');
                                  $("#requestRecipe-form").dialog('close');

				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			}
		});

		$("#requestRecipe")
			.button()
			.click(function() {
				$( "#requestRecipe-form" ).dialog( "open" );
			});
	});

