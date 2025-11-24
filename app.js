let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  let link = await getImg();
  let image = document.getElementById("image");
  image.setAttribute("src", link);
});

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("erorr", e);
    return "/";
  }
}
