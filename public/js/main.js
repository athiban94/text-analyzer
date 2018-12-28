$(document).ready(function () {
    $(".text-analyze-submit").click(function (event) {
        textToAnalyze = $("#textToAnalyze").val();
        if(textToAnalyze) {
            postData = {
                'sampletext' : textToAnalyze
            }
            $.ajax({
                type: 'POST',
                url: '/analyze',
                data: postData,
                success: function(response) {
                    if(response.success) {
                        if(response.polarity == 0) {
                            swal("Analysis", "The given sentence is netural which is neither positive or negative.");
                        }
                        if(response.polarity > 0) {
                            polarityValue = response.polarity * 100;
                            polarityValue = polarityValue.toFixed(2);
                            swal("Analysis", "The given sentence is "+ polarityValue +"% positive");
                        }
                        if(response.polarity < 0) {
                            polarityValue = response.polarity * 100;
                            polarityValue = polarityValue.toFixed(2);
                            swal("Analysis", "The given sentence is "+ polarityValue +"% negative");
                        }
                    } else {
                        swal({
                            title: "Error",
                            text: "Oops! Something went wrong. Please try again later.",
                            type: "warning",
                            showCancelButton: false,
                            confirmButtonClass: 'btn-primary',
                            confirmButtonText: 'OK'
                        });
                    }
                },
                error: function(error) {
                    console.log("Exception Caught: " + error);
                }
            });
        } else {
            $("#textToAnalyze").addClass("validation-falied")
        }
    });
});


