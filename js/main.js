
$(document).ready(function(){


    $(function() {
        $( "#all_role_list, #user_role_list" ).sortable({
            connectWith: ".connectedSortable",
            placeholder: 'placeholder',
            cursor: 'move',
            helper: 'clone',
            appendTo: 'body',
            receive: function( event, ui ) {
                if( event.target.getAttribute('id').indexOf("user_role_list") > -1){

                    var src = $(ui.item).children(2);
                    var partId = $(src).attr('id');

                    $(src).attr('name', 'role[' + partId.substring(8) + ']');

                }
                else{
                    var src = $(ui.item).children(2);
                    $(src).attr('name', 'none');

                }
            },
        });
    });



});
