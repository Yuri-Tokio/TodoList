function deleteTodo(i) 
{
    $.ajax({
        url: 'Home/Delete',
        type: 'POST',
        data: {
            id: i
        },
        success: function() {
            window.location.reload();
        }
    });
}

function populateForm(i) {

    $.ajax({
        url: 'Home/PopulateForm',
        type: 'GET',
        data: {
            id: i
        },
        dataType: 'json',
        success: function (response) {
            $("#Todo_Name").val(response.name);
            $("#Todo_Id").val(response.id);
            $("#Todo_Description").val(response.description);
            $("#Todo_Status").val(response.status);
            $("#form-button").val("Atualizar Tarefa");
            $("#form-action").attr("action", "/Home/Update");
        }
    });
}

function doneForm(i) {

    $.ajax({
        url: 'Home/DoneForm',
        type: 'PUT',
        data: {
            id: i
        },
        dataType: 'json',
        success: function (response) {
            $("#Todo_Done").val(response.done);
            $("#Todo_Id").val(response.id);
            $("#form-button").val("Concluir Tarefa");
            $("#form-action").attr("action", "/Home/Done");
        }
    });
}