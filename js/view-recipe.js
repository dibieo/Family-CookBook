    var num = 0;
          function addStep(){

             num = num + 1;
             var text = $("#direction").clone();
             var newId = "direction" + num;
             text.attr("id", newId);
             var input = "#" + newId;
             console.log(input + " label[for='step']");
             console.log($(input).html("step " + num));
             $("#directions").append(text);
          }


	$(function() {


		$( "#comment-form" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Save": function() {
                                  alert('Thanks! Your comment has been added!');
                                  $("#comment-form").dialog('close');

				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			}
		});

		$("#post-comment")
			.button()
			.click(function() {
				$( "#comment-form" ).dialog( "open" );
			});
	});

          $(function() {
		$( "#tabs" ).tabs();
	});
        function dialogS() {

			 alert("Your recipe has been shared on facebook & twitter");
			}


            var num = 0;
         


      


	$(function() {
		// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		//$( "#dialog:ui-dialog" ).dialog( "destroy" );


		$( "#share-form" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Share": function() {
                                  alert('Thanks! Your recipe has been shared online!');
                                  $("#share-form").dialog('close');

				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			}
		});

		$("#share-meal")
			.button()
			.click(function() {
				$( "#share-form" ).dialog( "open" );
			});
	});

        $(function() {
		// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		//$( "#dialog:ui-dialog" ).dialog( "destroy" );


		$( "#addMemory-form" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Add Memory": function() {
                                 alert('Thanks! Your memories have been added to the time line');
                                  					$( this ).dialog( "close" );

				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			}
		});

		$("#add-memory")
			.button()
			.click(function() {
				$( "#addMemory-form" ).dialog( "open" );
			});
	});