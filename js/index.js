$(document).ready(function () {

    function UpdateTask() {
        let task = 0;
        let comp = 0;

        task = $("li").length;
        comp = $("li.main").length;
        $("#total-task").text(task);
        $("#completed-task").text(comp);
    }

    $("#add-btn").click(function () {
        let value = $("#task_input").val();
        if (value !== "") {
            const item = document.createElement("li");
            item.innerHTML = `
                <span>${value}</span> 
                <button class="bbutton">Delete</button>
            `;
            $("ul").append(item);
            $("#task_input").val("");
            UpdateTask();
        }
    });

    $("ul").on("click", "li span", function () {
        $(this).parent("li").toggleClass("main");
        UpdateTask();
    });

    $("ul").on("click", ".bbutton", function () {
        $(this).parent("li").fadeOut(500, function () {
            $(this).remove();
            UpdateTask();
        });
    });

    $(".all-btn").click(function () {
        $("li").show();
    });

    $(".com-btn").click(function () {
        $("li").hide();
        $("li.main").show();
    });

    $(".incom-btn").click(function () {
        $("li").show();
        $("li.main").hide();
    });

    UpdateTask();

});


