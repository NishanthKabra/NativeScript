﻿import application = require("application");

import trace = require("trace");
trace.enable();
trace.setCategories(trace.categories.concat(
    trace.categories.Debug
    , "TabView"
    //, trace.categories.Navigation
    //, trace.categories.ViewHierarchy
    //, trace.categories.VisualTreeEvents
    ));

application.start({ moduleName: "main-page" });