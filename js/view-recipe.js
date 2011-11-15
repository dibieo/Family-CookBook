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
		// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		//$( "#dialog:ui-dialog" ).dialog( "destroy" );


		$( "#direction-form" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Save": function() {
                                  alert('Thanks! Your direction(s) have been added!');
                                  $("#direction-form").dialog('close');

				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			}
		});

		$("#annotate-dir")
			.button()
			.click(function() {
				$( "#direction-form" ).dialog( "open" );
			});
	});

          $(function() {
		$( "#tabs" ).tabs();
	});
	$(function() {
			$( "#accordion" ).accordion({
			autoHeight: false,
			navigation: true,
			animated: 'easeslide'

			});
	});
        function dialogS() {

			 alert("Your recipe has been shared on facebook & twitter");
			}


            var num = 0;
          function addIng(){

             num = num + 1;
             var text = $("#ingredient").clone();
             var newId = "ingredient " + num;
             text.attr("id", newId);
             $("#ingredients").append(text);
          }


	$(function() {
		// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		//$( "#dialog:ui-dialog" ).dialog( "destroy" );


		$( "#dialog-form" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Save": function() {
                                  alert('Thanks! Your ingredient(s) have been added!');
                                  $("#dialog-form").dialog('close');

				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			}
		});

		$("#annotate-ing")
			.button()
			.click(function() {
				$( "#dialog-form" ).dialog( "open" );
			});
	});


        $(function() {

        // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		//$( "#dialog:ui-dialog" ).dialog( "destroy" );


		$( "#dialog-ing" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Ok": function() {
                                  $("#dialog-ing").dialog('close');

				}
			},
			close: function() {
			}
		});

		$("#other-ing")
			.click(function() {
				$( "#dialog-ing" ).dialog( "open" );
			});
        });

           $(function() {

        // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		//$( "#dialog:ui-dialog" ).dialog( "destroy" );


		$( "#dialog-step" ).dialog({
			autoOpen: false,
			height: 450,
			width: 500,
			modal: true,
			buttons: {
				"Ok": function() {
                                  $("#dialog-step").dialog('close');

				}
			},
			close: function() {
			}
		});

		$("#other-step")
			.click(function() {
				$( "#dialog-step" ).dialog( "open" );
			});
        });


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