function bigestSumOfTwoElements(array) {

    if (array.length == 0) {
        return "pusta tablica";
    } else if (array.length == 1) {
        return array[0];
    } else {
        var biggest1 = array[0];
        var biggest2 = array[1];

        for (var i = 2; i < array.length; i++) {
            if (biggest1 < biggest2) {
                var aaa = biggest1;
                biggest1 = biggest2;
                biggest2 = aaa;
            }

            if (array[i] > biggest1) {
                biggest2 = array[i];
            } else if (array[i] > biggest2) {
                biggest2 = array[i];
            }
        }

        return biggest1 + biggest2;
    }
}

bigestSumOfTwoElements([])