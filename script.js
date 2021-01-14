{

    var CheckBoxes = document.getElementsByTagName("INPUT");

    // var value = prompt("Populate textboxes with the value = ?")

    for(var i = 0; i < CheckBoxes.length; i++)
    {
        if(CheckBoxes[i].type == 'checkbox')
        {
            CheckBoxes[i].checked = true;
        };
    };
    alert("All Attended");
};