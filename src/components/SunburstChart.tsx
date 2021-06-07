import * as React from "react";
import { useEffect } from "react";
import sunburstDataParser from "../utility/sunburstDataParser";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
am4core.useTheme(am4themes_animated);

export default function SunburstChart({ splits } : any) {
  useEffect(() => {
    // create chart
    var chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
    chart.padding(0, 0, 0, 0);
    chart.radius = am4core.percent(98);

    chart.data = sunburstDataParser(splits);
    // chart.data =[
    //     {
    //         "name": "social",
    //         "children": [
    //             {
    //                 "name": "bar",
    //                 "value": 481578000
    //             },
    //             {
    //                 "name": "lunch",
    //                 "value": 839409000
    //             },
    //             {
    //                 "name": "dinner",
    //                 "value": 440216000
    //             }
    //         ]
    //     },
    //     {
    //         "name": "uncategorized",
    //         "children": [
    //             {
    //                 "name": "not defined",
    //                 "value": 1717238000
    //             }
    //         ]
    //     },
    //     {
    //         "name": "entertainment",
    //         "children": [
    //             {
    //                 "name": "gaming",
    //                 "value": 627863000
    //             },
    //             {
    //                 "name": "movie",
    //                 "value": 550467000
    //             },
    //             {
    //                 "name": "tv",
    //                 "value": 438854000
    //             }
    //         ]
    //     },
    //     {
    //         "name": "productivity",
    //         "children": [
    //             {
    //                 "name": "biking",
    //                 "value": 332088000
    //             },
    //             {
    //                 "name": "reading",
    //                 "value": 298379000
    //             },
    //             {
    //                 "name": "basketball",
    //                 "value": 216024000
    //             }
    //         ]
    //     }
    // ];

    chart.colors.step = 2;
    chart.fontSize = 12;
    chart.innerRadius = am4core.percent(20);

    // define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";

    var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
    chart.seriesTemplates.setKey("0", level0SeriesTemplate);

    // this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;
    level0SeriesTemplate.showOnInit = false;
    level0SeriesTemplate.usePercentHack = false;

    level0SeriesTemplate.radius = am4core.percent(90);
    level0SeriesTemplate.innerRadius = am4core.percent(0);

    let selectedState = level0SeriesTemplate.states.create("selected");
    selectedState.properties.opacity = 0.7;
    level0SeriesTemplate.defaultState.properties.radius = am4core.percent(100);

    var currentlySelected;

    level0SeriesTemplate.slices.template.events.on("over", function (event) {
      if (event.target.dataItem.sunburstDataItem.children) {
        event.target.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      }
    });

    level0SeriesTemplate.slices.template.events.on("hit", function (event) {
      zoomOutButton.show();
      var hitSlice = event.target;
      console.log(hitSlice.dataItem.sunburstDataItem.series.pixelRadius);

      if (hitSlice.dataItem.sunburstDataItem.children) {
        var series = event.target.dataItem.component;
        if (!series.dummyData) {
          series.tooltip.disabled = true;
          hitSlice.dataItem.label.radius =
            hitSlice.radius - hitSlice.pixelInnerRadius - 7;
          hitSlice.dataItem.label.bent = true;
          hitSlice.dataItem.label.rotation = -180;

          currentlySelected = hitSlice;
          series.dummyData = true;
          series.setState("selected");
          hitSlice.dataItem.sunburstDataItem.series.show();
          hitSlice.dataItem.sunburstDataItem.series.setState("selected");
          series.slices.each(function (slice) {
            if (slice != event.target) {
              slice.dataItem.hide();
            }
          });
        } else {
          drillUp(hitSlice);
        }
      }
    });

    level0SeriesTemplate.labels.template.adapter.add(
      "rotation",
      function (rotation, target) {
        target.maxWidth =
          target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
        target.maxHeight = Math.abs(
          ((target.dataItem.slice.arc *
            (target.dataItem.slice.innerRadius +
              target.dataItem.slice.radius)) /
            2) *
            am4core.math.RADIANS
        );
        return rotation;
      }
    );

    var level1SeriesTemplate = level0SeriesTemplate.clone();
    level1SeriesTemplate.hidden = false;
    level1SeriesTemplate.innerRadius = am4core.percent(90);
    level1SeriesTemplate.radius = am4core.percent(100);
    chart.seriesTemplates.setKey("1", level1SeriesTemplate);
    level1SeriesTemplate.fillOpacity = 0.75;
    let selectedState2 = level1SeriesTemplate.states.create("selected");
    selectedState2.properties.pixelRadius = 70;
    level1SeriesTemplate.defaultState.properties.pixelRadius = 245;

    var zoomOutButton = chart.seriesContainer.createChild(
      am4core.ZoomOutButton
    );
    zoomOutButton.visible = false;
    zoomOutButton.horizontalCenter = "middle";
    zoomOutButton.verticalCenter = "middle";
    zoomOutButton.events.on("hit", function () {
      drillUp(currentlySelected);
    });

    function drillUp(slice) {
      collapse(slice);
      var series = slice.dataItem.component;
      series.tooltip.disabled = false;
      series.dummyData = false;
      series.setState("default");
      slice.dataItem.sunburstDataItem.series.setState("default");

      series.slices.each(function (slice) {
        // if (slice != event.target) {
        //   slice.dataItem.show();
        // }
      });

      if (series.parentDataItem.seriesDataItem) {
        currentlySelected = series.parentDataItem.seriesDataItem.slice;
      } else {
        zoomOutButton.hide();
      }
    }

    function collapse(slice) {
      slice.dataItem.label.bent = false;
      slice.dataItem.label.radius = 10;

      if (slice.dataItem.sunburstDataItem.children) {
        slice.dataItem.sunburstDataItem.children.each(function (child) {
          // child.seriesDataItem.component.setState("hidden");
          collapse(child.seriesDataItem.slice);
        });
      }
    }

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div class="border-2 rounded-lg w-1/2 h-5/6 py-auto my-5 mx-5 flex flex-col justify-center">
      <div id="chartdiv" class="w-5/6 h-5/6 m-auto"></div>
    </div>
  );
}
