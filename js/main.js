//AJAX JSON JQUERY
$(document).ready(function () {
    let gender_button = $('#gender-btn');
    let input = $('#search-by-gender');
    let list1 = $('#list1');

    //Search by gender: example --- boy, girl, men, women etc.
    let baseUrl = 'http://api.tvmaze.com/search/shows?q=';

    gender_button.on('click', function () {
        $.get(
            baseUrl + input.val(),
            function (response) {

                list1.html('');

                for (var i = 0; i < response.length; i++) {
                    let listItem = $('<li></li>');
                    listItem.html(response[i].show.name + '<br>' + 'Category: ' + response[i].show.genres + '<br>' + 'Type: ' + response[i].show.type + '<br>' + 'Language: ' + response[i].show.language + '<br>' + 'Website: ' + response[i].show.officialSite);

                    list1.append(listItem);
                }
            },

            'json'
        )
    })

    let episode_button = $('#episode-btn');
    let episode_input = $('#search-by-episode');
    let list2 = $('#list2');

    //Search by episode number: example --- 1, 2, 3 etc.
    let baseUrl2 = 'http://api.tvmaze.com/shows/1/episodebynumber?season=2&number=';

    episode_button.on('click', function () {
        $.get(
            baseUrl2 + episode_input.val(),
            function (responseEpisode) {

                list2.html('');

                list2.html('Episode Name: ' + responseEpisode.name + '<br>' + 'Brodcast Date: ' + responseEpisode.airdate + '<br>' + 'Time: ' + responseEpisode.airtime + '<br>' + 'Duration: ' + responseEpisode.runtime + '<br>' + 'At a glance: ' + responseEpisode.summary + '<br>' + '<img src="' + responseEpisode.image.original + '">');
            },

            'json'
        )
    })

});
