function maBootan() {
    function textFileToArray(filename) {
        var reader = (window.XMLHttpRequest != null)
            ? new XMLHttpRequest()
            : new ActiveXObject("Microsoft.XMLHTTP");
        reader.open("GET", filename, false);
        reader.send();
        return reader.responseText.split("\n");
    }
    var field = document.getElementById("inpoot").value;

    var listNoun = textFileToArray("http://www.shadetrap.tk/whatever.txt");
    var listName = textFileToArray("https://shadetrap.github.io/Misc/names.txt");
    var listP01AdjAge = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/age.txt");
    var listP01AdjColour = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/colour.txt");
    var listP01AdjMaterial = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/material.txt");
    var listP01AdjOpinion = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/opinion.txt");
    var listP01AdjOrigin = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/origin.txt");
    var listP01AdjPurpose_a = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/purpose_a.txt");
    var listP01AdjPurpose = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/purpose.txt");
    var listP01AdjShape = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/shape.txt");
    var listP01AdjSize = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Adjectives/size.txt");
    var listSpecies = textFileToArray("https://shadetrap.github.io/Misc/species.txt");
    var listP01NouAnimal = textFileToArray("https://shadetrap.github.io/Misc/Prototype/01/Nouns/animal.txt");
    var listJazzaActions = textFileToArray("https://shadetrap.github.io/Misc/Prototype/ArtyJazza/actions.txt");
    var listJazzaCharacters = textFileToArray("https://shadetrap.github.io/Misc/Prototype/ArtyJazza/characters.txt");
    var listJazzaDescriptions = textFileToArray("https://shadetrap.github.io/Misc/Prototype/ArtyJazza/descriptions.txt");
    var listJazzaFeatures = textFileToArray("https://shadetrap.github.io/Misc/Prototype/ArtyJazza/features.txt");
    var listJazzaWD = textFileToArray("https://shadetrap.github.io/Misc/Prototype/ArtyJazza/worlddescriptions.txt");
    var listJazzaWorlds = textFileToArray("https://shadetrap.github.io/Misc/Prototype/ArtyJazza/worlds.txt");

    //var listTest1 = textFileToArray("https://shadetrap.github.io/Misc/Prototype/test/bingo.txt");
    //var listTest2 = textFileToArray("https://shadetrap.github.io/Misc/Prototype/test/bango.txt");


    var mathNoun = listNoun[Math.floor(Math.random() * listNoun.length)];
    var mathName = listName[Math.floor(Math.random() * listName.length)];
    var mathP01AdjAge = listP01AdjAge[Math.floor(Math.random() * listP01AdjAge.length)];
    var mathP01AdjColour = listP01AdjColour[Math.floor(Math.random() * listP01AdjColour.length)];
    var mathP01AdjMaterial = listP01AdjMaterial[Math.floor(Math.random() * listP01AdjMaterial.length)];
    var mathP01AdjOpinion = listP01AdjOpinion[Math.floor(Math.random() * listP01AdjOpinion.length)];
    var mathP01AdjOrigin = listP01AdjOrigin[Math.floor(Math.random() * listP01AdjOrigin.length)];
    var mathP01AdjPurpose_a = listP01AdjPurpose_a[Math.floor(Math.random() * listP01AdjPurpose_a.length)];
    var mathP01AdjPurpose = listP01AdjPurpose[Math.floor(Math.random() * listP01AdjPurpose.length)];
    var mathP01AdjShape = listP01AdjShape[Math.floor(Math.random() * listP01AdjShape.length)];
    var mathP01AdjSize = listP01AdjSize[Math.floor(Math.random() * listP01AdjSize.length)];
    var mathSpecies = listSpecies[Math.floor(Math.random() * listSpecies.length)];
    var mathP01NouAnimal = listP01NouAnimal[Math.floor(Math.random() * listP01NouAnimal.length)];
    var mathJazzaActions = listJazzaActions[Math.floor(Math.random() * listJazzaActions.length)];
    var mathJazzaCharacters = listJazzaCharacters[Math.floor(Math.random() * listJazzaCharacters.length)];
    var mathJazzaDescriptions = listJazzaDescriptions[Math.floor(Math.random() * listJazzaDescriptions.length)];
    var mathJazzaFeatures = listJazzaFeatures[Math.floor(Math.random() * listJazzaFeatures.length)];
    var mathJazzaWD = listJazzaWD[Math.floor(Math.random() * listJazzaWD.length)];
    var mathJazzaWorlds = listJazzaWorlds[Math.floor(Math.random() * listJazzaWorlds.length)];
    //var mathTest1 = listTest1[Math.floor(Math.random() * listTest1.length)];
    //var mathTest2 = listTest2[Math.floor(Math.random() * listTest2.length)];
    //var mathTestCombine = TestCombiner();
    //var mathTestCombine = mathTest1.push(mathTest2);
    // function TestCombiner(){
    //     var combination = ["oreos"];
    //     combination.push(mathTest1);
    //     combination.push(mathTest2);
    // }


//noun, name, species, animal
    field = field.replace(/{noun}/gi, mathNoun);
    field = field.replace(/{name}/gi, mathName);

    field = field.replace(/{age}/gi, mathP01AdjAge);
    field = field.replace(/{color}/gi, mathP01AdjColour);
    field = field.replace(/{material}/gi, mathP01AdjMaterial);
    // field = field.replace(/{opinion}/gi, "<mark style='color:red'>" + mathP01AdjOpinion + "</mark>");
    field = field.replace(/{opinion}/gi, mathP01AdjOpinion);
    field = field.replace(/{origin}/gi, mathP01AdjOrigin);
    field = field.replace(/{purpose-a}/gi, mathP01AdjPurpose_a);
    field = field.replace(/{purpose}/gi, mathP01AdjPurpose);
    field = field.replace(/{shape}/gi, mathP01AdjShape);
    field = field.replace(/{size}/gi, mathP01AdjSize);

    field = field.replace(/{species}/gi, mathSpecies);
    field = field.replace(/{animal}/gi, mathP01NouAnimal);

    field = field.replace(/{jazzaaction}/gi, mathJazzaActions);
    field = field.replace(/{jazzacharacters}/gi, mathJazzaCharacters);
    field = field.replace(/{jazzadescriptions}/gi, mathJazzaDescriptions);
    field = field.replace(/{jazzafeatures}/gi, mathJazzaFeatures);
    field = field.replace(/{jazzawd}/gi, mathJazzaWD);
    field = field.replace(/{jazzaworlds}/gi, mathJazzaWorlds);
    //  field = field.replace(/{{test}}/gi, mathTestCombine);

    document.getElementById("awtpoot").innerHTML = field;

    //paralax...
    ; (function ($) {
        $window = $(window);

        $('*[data-type="parallax"]').each(function () {

            var $bgobj = $(this);

            $(window).scroll(function () {

                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                var coords = '50% ' + yPos + 'px';

                $bgobj.css({ backgroundPosition: coords });

            });
        });
    })(jQuery);
}
