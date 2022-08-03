const fileJson = "./WardList.json";
const memberListUrl =
  "https://lcr.churchofjesuschrist.org/services/umlu/report/member-list?lang=eng&unitNumber=106569";
const cookie = `JSESSIONID=0; PFpreferredHomepage=COJC; WRUIDCD=3458104840127581; __CT_Data=gpv=1&ckp=tld&dm=churchofjesuschrist.org&apv_59_www11=2&cpv_59_www11=1&rpv_59_www11=1; s_campaign=16634941358; _cs_c=0; notice_behavior=implied|us; at_check=true; AMCVS_66C5485451E56AAE0A490D45@AdobeOrg=1; s_cc=true; _cs_cvars={"1":["Page Name","my home|dashboard"]}; amlbcookie-prod=01; ORIG_URL=/sso?realm=/church&service=OktaOIDC&goto=https://www.churchofjesuschrist.org/services/platform/v4/set-wam-cookie&authIndexType=service&authIndexValue=OktaOIDC; NTID=QVX6kOknTQBjwvlFjV1kmM8kxUwrMJeJ; OAUTH_LOGOUT_URL=; _cs_id=3a131ca1-2c90-a3fb-da9f-340eae69fa12.1631136368.46.1659281921.1659281921.1586361061.1665300368858; RT="z=1&dm=churchofjesuschrist.org&si=46d27d2a-780d-4cbe-bd73-0432d1539f08&ss=l69f8aj8&sl=0&tt=0&bcn=//17de4c0f.akstat.io/"; notice_behavior=implied|us; analytics_video_metadata_load=false; s_ips=395; s_tp=1148; agent-authn-tx-bdGRI3bT1asMSkdWEUuS8U7_btc=eAENzU0KwjAQQOG7zDo0aFslAXFXBL2DlGRs1PwxmYhYenezfYvvrVDJgwbHnIuW0hvqjKtkXHq8sNRiHD0Ld4kWPQy9ZAzZoyQ0KQSMVtZsZ8azn+NywriAgMDOgt4JcJYK6HUTgN/cymFUYzOOSkBM0WDb3n9qXy/vz5R67q83hu0PguAwqQ==; ChurchSSO=8GbpixMLWjX5o4dB7oPUR7CWHp0.*AAJTSQACMDIAAlNLABxJZnRRYzFJdDhSMCswUCtTazVOcEs3Tm9EVms9AAR0eXBlAANDVFMAAlMxAAIwMQ..*; SameSite=None; __VCAP_ID__=47cdbe5c-ae30-465e-5d0e-83f7; mbox=PC#058d43b7506641e48200b1050bd87145.35_0#1722787992|session#1d12c03becc54b739c3d0e33da986023#1659545052; gpv_Page=temple-entry.page.title; gpv_cURL=lcr.churchofjesuschrist.org/temple/recommend/update; AMCV_66C5485451E56AAE0A490D45@AdobeOrg=1176715910|MCIDTS|19208|MCMID|58512148769013722050347333324645862083|MCAAMLH-1660147992|9|MCAAMB-1660147992|RKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y|MCOPTOUT-1659550392s|NONE|vVersion|5.4.0|MCAID|NONE; adcloud={"_les_v":"y,churchofjesuschrist.org,1659544992"}; s_plt=3.11; s_pltp=temple-entry.page.title; Church-auth-jwt-prod=eyJ0eXAiOiJKV1QiLCJraWQiOiIvQnA5UHlqa2QwWE9WT1RoZVlOb21URitHa3M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ0cmF2ZG9nIiwiYXVkaXRUcmFja2luZ0lkIjoiZTI5MTkwYWYtNjg0My00NmIzLTk2Y2YtZTk4NDgyMzIzMmFhLTE4NDkwMzU2IiwiaXNzIjoibnVsbDovL2lkZW50LXByb2QuY2h1cmNob2ZqZXN1c2NocmlzdC5vcmc6NDQzL3Nzby9vYXV0aDIiLCJ0b2tlbk5hbWUiOiJpZF90b2tlbiIsIm5vbmNlIjoiWl90QjNtQ3k4Q1QzV3RpRyIsImF1ZCI6ImwxODM4MiIsImFjciI6IjAiLCJhenAiOiJsMTgzODIiLCJhdXRoX3RpbWUiOjE2NTk1NDMxODgsImZvcmdlcm9jayI6eyJzc290b2tlbiI6IjhHYnBpeE1MV2pYNW80ZEI3b1BVUjdDV0hwMC4qQUFKVFNRQUNNRElBQWxOTEFCeEpablJSWXpGSmREaFNNQ3N3VUN0VGF6Vk9jRXMzVG05RVZtczlBQVIwZVhCbEFBTkRWRk1BQWxNeEFBSXdNUS4uKiIsInN1aWQiOiI3MWYyYTI3OC1iNTY4LTQ1NmMtOGViNC1kZjVlZDcwZjc5NzctMTg1MzQ2MjkifSwicmVhbG0iOiIvY2h1cmNoIiwiZXhwIjoxNjU5NTg2MzkyLCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTY1OTU0MzE5MiwiYWdlbnRfcmVhbG0iOiIvY2h1cmNoIn0.j93zrQd6pkyN_J4D8fZFCD2TaCd_8TlZx-VafVwhUoxIhJBECDJtXqTfkgWgFqEWH5RmXBLU-B4Feq3SjF-FUDXw9Gdn2UKyNZ6bozEpT6pQ6phhmRCC3KvDQxjnlPDa_q7jR-Sn3p0T7LfGLGejNCKFZEDTLb48wXzavWxyY_LVEU87nK2f2HB9MWBrBmd-VSzWqLUabuJqLy3jb6pTVaj6o0ttuFOlYiblhlPNJWzeSansXbOpX9KVF34w5gt8AsiTMTuUqpKmgTVreNjyNGAamrLv9yUFzqR5e58Eeb_FGSU8IhAg1dW_77Mp8BQ9CQYUrAS4kb51KQxDEZlVJg; s_ppv=temple-entry.page.title,41,34,470,1,2; s_sq=ldschurchofjesuschristprod=%26c.%26a.%26activitymap.%26page%3Dtemple-entry.page.title%26link%3DMember%2520List%26region%3Dbody%26pageIDType%3D1%26.activitymap%26.a%26.c%26pid%3Dtemple-entry.page.title%26pidt%3D1%26oid%3Dhttps%253A%252F%252Flcr.churchofjesuschrist.org%252Frecords%252Fmember-list%253Flang%253Deng%26ot%3DA; RT="z=1&dm=lcr.churchofjesuschrist.org&si=46d27d2a-780d-4cbe-bd73-0432d1539f08&ss=l69f8aj8&sl=0&tt=0&bcn=//17de4c0f.akstat.io/&hd=4dxxog"; ADRUM_BTa=R:0|g:8342af91-48df-4159-92ff-3bfcb6d608d5|n:churchofjesuschrist-prod_6b18a1f3-d5bd-4201-be20-78fa6c4d8152; ADRUM_BT1=R:0|i:519284|e:102;`;

async function loadWardData() {
  const response = await fetch(fileJson);

  if (response.status >= 200 && response.status <= 299) {
    const data = await response.json();
    //populate html
    loadHtml(data);
  } else {
    mainContainerElement.innerHTML(`Error loading file (${fileJson})`);
  }
}

function loadWardDataFromWeb() {
  fetch(memberListUrl, {
    mode: "no-cors",
    headers: {
      Cookie: cookie,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((data) => {
      // Do something with your data
      console.log("data", data);
    });
}

// loadWardData();

loadWardDataFromWeb();
