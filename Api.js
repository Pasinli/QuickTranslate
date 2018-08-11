document.getElementById("btn").addEventListener("click", Search);

function Search() {
    var deger = $("#msg").val();
    var secim1 = $("#FormCustomSelect1 option:selected").val();
    var secim2 = $("#FormCustomSelect2 option:selected").val();
    
        if (deger != String.prototype.trim()) {


            var rl = "https://translation.googleapis.com/language/translate/v2?q=" + deger;
            $.ajax({
                url: rl,
                type: "GET",
                dataType: "Json",
                data: {
                    key: "AIzaSyCInHiOCgun0ohlrtK_J6wSPwEWWHWtMwg ",
                    target:secim2,
                    source:secim1,
                },
                success: function (data) {
                    $("#translated").removeAttr("hidden");

                    $.each(data, function (key, item) {

                        $.each(item.translations, function (hey, tem) {

                            $("#endT").text("       " + tem.translatedText);
                        })


                    })


                },
                error: function (data) {

                }

            });


        }
        else {
            $("#hidAlert").removeAttr("hidden");
        }
        
    }
    