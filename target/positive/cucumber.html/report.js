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
  "duration": 10798177600,
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
  "name": "select carbrand as \"Ford\" from the Any Make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select model as \"1 Series M\" from the Any Model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select location as \"NSW-All\" from the Any location dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select Price as \"$2,500\" from the Price(max) dropdown",
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
  "name": "page title should be \"Bmw 1 Series M Under 2500 for Sale NSW\"",
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
  "duration": 6146407400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 1132693000,
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
  "duration": 5413789700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_carbrand_as_from_the_Any_Make_dropdown(String)"
});
formatter.result({
  "duration": 8263000,
  "error_message": "java.lang.NullPointerException\r\n\tat pages.actions.SearchCarsPageActions.selectCarMake(SearchCarsPageActions.java:22)\r\n\tat stepDefinations.SearchCars.select_carbrand_as_from_the_Any_Make_dropdown(SearchCars.java:48)\r\n\tat ✽.And select carbrand as \"Ford\" from the Any Make dropdown(SearchCars.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series M",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_model_as_from_the_Any_Model_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW-All",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_location_as_from_the_Any_location_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,500",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_Price_as_from_the_Price_max_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchCars.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchCars.i_should_see_searched_cars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series M Under 2500 for Sale NSW",
      "offset": 22
    }
  ],
  "location": "SearchCars.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 10438108200,
  "status": "passed"
});
});