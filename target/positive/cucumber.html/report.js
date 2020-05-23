$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate search car page is working",
  "description": "\nIn order to validate that \nsearch cars page is working \nwe will do acceptance testing",
  "id": "acceptance-testing-to-validate-search-car-page-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 5366130700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate search car page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-car-page-is-working;validate-search-car-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on home page \"https://www.carsguide.com.au/\" of cars guild.com",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "buy+sell"
      ],
      "line": 13
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 14
    },
    {
      "cells": [
        "news"
      ],
      "line": 15
    },
    {
      "cells": [
        "advice"
      ],
      "line": 16
    },
    {
      "cells": [
        "pricing+specs"
      ],
      "line": 17
    },
    {
      "cells": [
        "labs"
      ],
      "line": 18
    },
    {
      "cells": [
        "guids"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on \"Search Cars\" Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select carbrand as \"BMW\" from the Any Make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select model as \"3\" from the Any Model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select location as \"ACT - All\" from the Any location dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select Price as \"$1,000\" from the Price(max) dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "page title should be \"Bmw 1 Series M Under 1000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 19
    }
  ],
  "location": "SearchCars.i_am_on_home_page_of_cars_guild_com(String)"
});
formatter.result({
  "duration": 3185536400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 511574400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCars.click_on_Search_Cars_link(String)"
});
formatter.result({
  "duration": 4363897800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_carbrand_as_from_the_Any_Make_dropdown(String)"
});
formatter.result({
  "duration": 5143948800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_model_as_from_the_Any_Model_dropdown(int)"
});
formatter.result({
  "duration": 5203388900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_location_as_from_the_Any_location_dropdown(String)"
});
formatter.result({
  "duration": 139761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_Price_as_from_the_Price_max_dropdown(String)"
});
formatter.result({
  "duration": 120676800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 2857002500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_should_see_searched_cars()"
});
formatter.result({
  "duration": 102600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series M Under 1000 for Sale ACT | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCars.page_title_should_be(String)"
});
formatter.result({
  "duration": 44038100,
  "status": "passed"
});
formatter.after({
  "duration": 3886875400,
  "status": "passed"
});
formatter.before({
  "duration": 3622985300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate search only new cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-car-page-is-working;validate-search-only-new-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on home page \"https://www.carsguide.com.au/\" of cars guild.com",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 33
    },
    {
      "cells": [
        "buy+sell"
      ],
      "line": 34
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 35
    },
    {
      "cells": [
        "news"
      ],
      "line": 36
    },
    {
      "cells": [
        "advice"
      ],
      "line": 37
    },
    {
      "cells": [
        "pricing+specs"
      ],
      "line": 38
    },
    {
      "cells": [
        "labs"
      ],
      "line": 39
    },
    {
      "cells": [
        "guids"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "click on \"Search Cars\" Search Cars link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on All New lable",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "select carbrand as \"Audi\" from the Any Make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "select model as \"3\" from the Any Model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "select location as \"ACT - All\" from the Any location dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "select Price as \"$90,000\" from the Price(max) dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should see searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "page title of new cars search should be \"New Audi A4 Under 90000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 19
    }
  ],
  "location": "SearchCars.i_am_on_home_page_of_cars_guild_com(String)"
});
formatter.result({
  "duration": 9599899900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 181564500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCars.click_on_Search_Cars_link(String)"
});
formatter.result({
  "duration": 3571520400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.click_on_All_New_lable()"
});
formatter.result({
  "duration": 152284400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_carbrand_as_from_the_Any_Make_dropdown(String)"
});
formatter.result({
  "duration": 5114230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_model_as_from_the_Any_Model_dropdown(int)"
});
formatter.result({
  "duration": 5166596500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_location_as_from_the_Any_location_dropdown(String)"
});
formatter.result({
  "duration": 123746900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_Price_as_from_the_Price_max_dropdown(String)"
});
formatter.result({
  "duration": 126392200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 3654810300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_should_see_searched_cars()"
});
formatter.result({
  "duration": 314800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Audi A4 Under 90000 for Sale ACT | carsguide",
      "offset": 41
    }
  ],
  "location": "SearchCars.page_title_of_new_cars_search_should_be(String)"
});
formatter.result({
  "duration": 84730400,
  "status": "passed"
});
formatter.after({
  "duration": 2353787600,
  "status": "passed"
});
});