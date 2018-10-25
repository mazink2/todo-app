$(document).ready(function() {
  $(".add-circle").on("click", function() {
    $(".task-form").addClass("active");
  });

  $(".task-form .close-btn").on("click", function() {
    $(".task-form").removeClass("active");
  });
});
