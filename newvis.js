// Load data from datasets/videogames_wide.csv using d3.csv and then make visualizations
async function fetchData() {
  const data = await d3.csv("./dataset/videogames_wide.csv");
  return data;
}

async function fetchDataLong() {
  const data = await d3.csv("./dataset/videogames_long.csv");
  return data;
}

async function main() {
  const dataWide = await fetchData();
  const dataLong = await fetchDataLong();

  const vlSpec = vl
    .markBar()
    .data(dataWide)
    .transform(
      vl.filter("datum.Platform === 'DS' || datum.Platform === '3DS'")
    )
    .encode(
      vl.y().fieldN("Genre").sort("-x").title("Genre"),
      vl.x().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
      vl.column().fieldN("Platform").title("Platform"),
      vl.color().fieldN("Genre").legend(false),
    )
    .width(200)
    .height(250)
    .toSpec();
    
  const vlSpec2 = vl
    .markBar()
    .data(dataWide)
    .transform(
      vl.filter("datum.Genre === 'Role-Playing' || datum.Genre === 'Strategy'"),
      vl.filter("datum.Platform === 'GB' || datum.Platform === 'GBA' || datum.Platform === 'DS' || datum.Platform === '3DS' || datum.Platform === 'PS2' || datum.Platform === 'PS3' || datum.Platform === 'X360'")
    )
    .encode(
      vl.x().fieldN("Platform").title("Platform"),
      vl.y().fieldQ("Global_Sales").aggregate("sum").title("Total Global Sales"),
      vl.color().fieldN("Genre"),
      vl.column().fieldN("Genre").title("Genre")
    )
    .width(200)
    .height(300)
    .toSpec();

  const vlSpec3 = vl
    .markLine()
    .data(dataWide)
    .transform(
      vl.filter("datum.Genre === 'Role-Playing' || datum.Genre === 'Strategy' || datum.Genre === 'Action' || datum.Genre === 'Shooter'")
    )
    .encode(
      vl.x().fieldT("Year").title("Year"),
      vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
      vl.color().fieldN("Genre").title("Genre"),

    )
    .width("container")
    .height(300)
    .toSpec();

  const vlSpecPlatform = vl
    .markLine()
    .data(dataWide)
    .transform(
      vl.filter("datum.Platform === 'Wii' || datum.Platform === 'PS3' || datum.Platform === 'X360'")
    )
    .encode(
      vl.x().fieldT("Year").title("Year"),
      vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
      vl.color().fieldN("Platform").title("Platform")
    )
    .width("container")
    .height(250)
    .toSpec();



    render("#view4", vlSpec);
    render("#view2", vlSpec2);
    render("#view3", vlSpec3);
    render("#view6", vlSpecPlatform);

  }

main();

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}
