$(document).ready(function(){
    document.execCommand('defaultParagraphSeparator', false, 'p');

    var rule = {
        heading: /^#{1,6}/
    };

    // inline
    $("#editor").on("keypress", function(e){
        if (e.which ==13) {
            // if space is entered, RE current sentence
            var selection = document.getSelection();
            console.log(selection.focusNode);
            var currentNode = selection.anchorNode.parentElement;
            var res;
            if (res = rule.heading.exec(currentNode.innerHTML)) {
                if (res[0].length >= 1) {
                    document.execCommand("formatBlock", false, "h1");
                }
            }
        }
    });

});
