jQuery(document).ready(function () {
  $("#6").click(function () {
    $(":input").each(function () {
      console.log($(this).val());
    });
  });
  $("label").click(function () {
    $("label").addClass("text-primary");
  });
  $("#crossButton").click(function () {
    $("div.modal-body").toggle(2000).toggle(2000);
  });

  $("#3").click(function () {
    $("#contentDiv").html(
      "<p>You Click on Submit Button </p><br><button >Back To Page</button>"
    );
    $("#footerDiv").empty();
    //.attr() tags ke attribute ko get/set karne ke liye
    //.html() inner html ke content ko get/set karne ke liye
    //.text() sirf text ko get/set karne ke liye
    //.val() form fields ko get/set karne ke liye

    // $("button").addClass("btn button text-white");
    // $("button").attr("class", "btn button text-white");
    // $("button").attr("id", "btnId");
    $("button").attr({
      class: "btn button text-white",
      id: "btnId",
    });
    $("button").click(function () {
      window.location.reload();
    });
  });

  // $("#recommendClosing").attr("checked", true);
  $("#recommendClosing").attr("checked", true);
  // console.warn(a);

  $("#1").click(function () {
    $("#contentDiv").html(
      "<p>You Click on Voicemail</p><br><button >Back To Page</button>"
    );
    $("button").addClass("btn button text-white");
    $("#footerDiv").empty();
    $("button").click(function () {
      window.location.reload();
    });
  });
  $("#callSummary").val("first value");
  $("#2").click(function () {
    $("#callSummary").val();

    // $("#callSummary").val(function (i, originalValue) {
    //   return originalValue + " Second value hello sir welcome to callback";
    // });
    var a = $("#callSummary").val();
    console.log("value of Call Summary box  ", a);
  });
  $("#4").click(function () {
    $("#contentDiv").html(
      "<p>You Click on Cancel </p><br><button >Back To Page</button>"
    );
    $("button").addClass("btn button text-white");
    $("#footerDiv").empty();
    $("button").click(function () {
      window.location.reload();
    });
  });
  // console.warn($("div.modal-header").parent());
  // console.warn(
  //   "crossButton    ",
  //   $("#crossButton")
  //     .parents("div.modal-content")
  //     .css({ color: "red", border: "2px solid red" })
  // );
  // console.warn($("div.modal-header").parent().attr("id", "545"));
  // console.warn(
  //   " All ancestor of div-modal-header   >",
  //   $("div.modal-header").parents()
  // );
  $("div")
    .filter(".modal-body")
    .css({ color: "red", border: "2px solid green" });
  $("h5.modal-title").on({
    click: function () {
      $("div.modal-content").find("label").css({ color: "green" });
    },
    mouseenter: function () {
      $("div.modal-content").find("label").css({ color: "white" });
    },
    mouseleave: function () {
      $("div.modal-content").find("label").css({ color: "blue" });
    },
    dblclick: function () {
      console.log("dblClick");
      $("div.modal-content").find("label").css({ color: "yellow" });
    },
  });
  $(".modal-footer").eq(2).css("button");
});
