$(function() {
    var url = "/data/data.json";
    var quote = $("#quoteblock");// the id of the heading

    $.get(url, function (data) {
        var the_quote = data;
        var quotes_data = the_quote.contents.quotes;

        let newPos, temp;
        for (let i = quotes_data.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = quotes_data[i];
            quotes_data[i] = quotes_data[newPos];
            quotes_data[newPos] = temp;
            quote.text(quotes_data[0].quote);
        }
        
    });
});