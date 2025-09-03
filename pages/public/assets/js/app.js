var vwu = new Vanilla_website_utils();

window.onload = async function () {
  let v = await vwu.get_parameters();
  const api = "https://api.grallator.com/nslookup";
  let url = api;
  let filter = {};

  if (v["domain"]) {
    filter["domain"] = v["domain"];
    document.querySelector("#domain").value = v["domain"];
  }

  if (filter["domain"]) {
    url = await vwu.add_parameters(url, filter);
    const data = JSON.parse(await vwu.aget_api(url));
    let result = document.querySelector("#result");

    let html = "<h2>Result:</h2>";
    html += "<p>";
    for (let x = 0; x <= data.length - 1; x++) {
      if (data[x] != "") {
        if (data[x].indexOf("v=spf1") > -1) {
          const a = data[x].split(" ");
          for (let i = 0; i <= a.length - 1; i++) {
            if (a[i].length > 2) {
              html += a[i] + "<br>";
            }
          }
        } else {
          html += data[x] + "<br>";
        }
      }
    }
    html += "</p>";
    result.innerHTML = html;
  }
};
