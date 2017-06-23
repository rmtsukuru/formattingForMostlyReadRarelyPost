$(function() {
    $('#input').on('change keyup', function() {
        var text = $(this).val();
        var paragraphs = text.split('\n\n');
        $('#output').html('');
        $.each(paragraphs, function(i, paragraph) {
            var contents = '<p>';
            var lines = paragraph.split('\n');
            $.each(lines, function(j, line) {
                contents += '&gt; ' + line + '<br />';
            });
            contents += '</p>';
            $('#output').append(contents);
        });
    });
});
