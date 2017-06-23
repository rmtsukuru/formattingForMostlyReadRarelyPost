$(function() {
    $('#input').on('change keyup', function() {
        var text = $(this).val();
        var paragraphs = text.split('\n\n');
        $('#output').html('');
        $('#output').append('<p>****<br />****</p>');
        $.each(paragraphs, function(i, paragraph) {
            var contents = '';
            var lines = paragraph.split('\n');
            $.each(lines, function(j, line) {
                contents += '<p>&gt; ' + line + '</p>';
            });
            $('#output').append(contents + '<p>****</p>');
        });
        $('#output p:last-child').html('<p>****<br />****</p>');
    });
});
